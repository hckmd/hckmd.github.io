(function () {
  'use strict';

  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const TOTAL_LETTERS = ALPHABET.length; // 26
  const STEP_DEG = 360 / TOTAL_LETTERS; // ~13.8461538 deg per letter

  const R_OUTER = 246;
  const R_MID = 175;
  const R_INNER = 105;

  const appContainer = document.getElementById('app-container');
  const svgWheel = document.getElementById('cipher-wheel');
  const outerWheelGroup = document.getElementById('outer-wheel');
  const innerWheelGroup = document.getElementById('inner-wheel');
  const keyDisplay = document.getElementById('key-display');
  const keyUpBtn = document.getElementById('key-up-btn');
  const keyDownBtn = document.getElementById('key-down-btn');
  const resetBtn = document.getElementById('reset-btn');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const fullscreenIcon = document.getElementById('fullscreen-icon');
  const minimiseIcon = document.getElementById('minimise-icon');
  const fullscreenText = document.getElementById('fullscreen-text');

  const SVG_NS = 'http://www.w3.org/2000/svg';

  // State
  let currentKey = 0;
  let outerRotationDeg = 0; // Rotation angle in degrees of the outer wheel
  let keyRotationDeg = 0; // Relative rotation angle of the inner wheel wrt the outer wheel
  let draggingWheel = null; // 'inner' | 'outer' | null
  let activePointerId = null;
  let dragStartPointerAngle = 0;
  let dragStartAngle = 0;

  /**
   * Convert angle in degrees (where 0 is 12 o'clock / top, increasing clockwise)
   * to Cartesian coordinates (x, y).
   */
  function polarToCartesian(radius, angleDegFromTop) {
    const angleRad = ((angleDegFromTop - 90) * Math.PI) / 180;
    return {
      x: radius * Math.cos(angleRad),
      y: radius * Math.sin(angleRad)
    };
  }

  /**
   * Create an SVG path string for an annular sector (ring wedge).
   */
  function createAnnularSectorPath(rOuter, rInner, startDeg, endDeg) {
    const p1 = polarToCartesian(rOuter, startDeg);
    const p2 = polarToCartesian(rOuter, endDeg);
    const p3 = polarToCartesian(rInner, endDeg);
    const p4 = polarToCartesian(rInner, startDeg);
    const largeArc = endDeg - startDeg > 180 ? 1 : 0;

    return [
      `M ${p1.x.toFixed(3)} ${p1.y.toFixed(3)}`,
      `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${p2.x.toFixed(3)} ${p2.y.toFixed(3)}`,
      `L ${p3.x.toFixed(3)} ${p3.y.toFixed(3)}`,
      `A ${rInner} ${rInner} 0 ${largeArc} 0 ${p4.x.toFixed(3)} ${p4.y.toFixed(3)}`,
      'Z'
    ].join(' ');
  }

  /**
   * Build the 26 segments and letters for both the outer and inner wheels.
   */
  function buildCipherWheel() {
    outerWheelGroup.innerHTML = '';
    innerWheelGroup.innerHTML = '';

    const rOuterText = (R_OUTER + R_MID) / 2;
    const rInnerText = (R_MID + R_INNER) / 2;

    for (let i = 0; i < TOTAL_LETTERS; i++) {
      const centerDeg = i * STEP_DEG;
      const startDeg = centerDeg - STEP_DEG / 2;
      const endDeg = centerDeg + STEP_DEG / 2;
      const letter = ALPHABET[i];

      // --- Outer Wheel Segment ---
      const outerPath = document.createElementNS(SVG_NS, 'path');
      outerPath.setAttribute('d', createAnnularSectorPath(R_OUTER, R_MID, startDeg, endDeg));
      outerPath.setAttribute(
        'class',
        i === 0 ? 'outer-segment outer-segment-index' : 'outer-segment'
      );
      outerWheelGroup.appendChild(outerPath);

      const outerText = document.createElementNS(SVG_NS, 'text');
      outerText.setAttribute('class', 'wheel-letter outer-letter');
      outerText.setAttribute(
        'transform',
        `rotate(${centerDeg.toFixed(3)}) translate(0, -${rOuterText.toFixed(2)})`
      );
      outerText.textContent = letter;
      outerWheelGroup.appendChild(outerText);

      // --- Inner Wheel Segment ---
      const innerPath = document.createElementNS(SVG_NS, 'path');
      innerPath.setAttribute('d', createAnnularSectorPath(R_MID, R_INNER, startDeg, endDeg));
      innerPath.setAttribute(
        'class',
        i === 0 ? 'inner-segment inner-segment-index' : 'inner-segment'
      );
      innerWheelGroup.appendChild(innerPath);

      const innerText = document.createElementNS(SVG_NS, 'text');
      innerText.setAttribute('class', 'wheel-letter inner-letter');
      innerText.setAttribute(
        'transform',
        `rotate(${centerDeg.toFixed(3)}) translate(0, -${rInnerText.toFixed(2)})`
      );
      innerText.textContent = letter;
      innerWheelGroup.appendChild(innerText);
    }

    // Crisp outer and middle boundary rings
    const outerBorder = document.createElementNS(SVG_NS, 'circle');
    outerBorder.setAttribute('cx', '0');
    outerBorder.setAttribute('cy', '0');
    outerBorder.setAttribute('r', String(R_OUTER));
    outerBorder.setAttribute('class', 'wheel-border-ring');
    outerWheelGroup.appendChild(outerBorder);

    const midBorder = document.createElementNS(SVG_NS, 'circle');
    midBorder.setAttribute('cx', '0');
    midBorder.setAttribute('cy', '0');
    midBorder.setAttribute('r', String(R_MID));
    midBorder.setAttribute('class', 'wheel-border-ring');
    innerWheelGroup.appendChild(midBorder);
  }

  /**
   * Normalize any integer key into [0, 25].
   */
  function normalizeKey(key) {
    return ((key % TOTAL_LETTERS) + TOTAL_LETTERS) % TOTAL_LETTERS;
  }

  /**
   * Convert a relative key rotation angle (degrees clockwise) into the corresponding key (0-25).
   * Increasing key (0 -> 1 -> 2...) rotates the inner wheel counter-clockwise (-STEP_DEG per key)
   * relative to the outer wheel so that outer 'A' aligns with inner 'B' (key 1), 'C' (key 2), etc.
   */
  function rotationToKey(relativeAngleDeg) {
    const rawSteps = Math.round(-relativeAngleDeg / STEP_DEG);
    return normalizeKey(rawSteps);
  }

  /**
   * Apply the current rotation angles for both wheels and update the key readout.
   * The inner wheel's total rotation is outerRotationDeg + keyRotationDeg so it stays
   * locked to the current key when the outer wheel is rotated.
   */
  function renderWheelState(animateInner = true, animateOuter = true) {
    if (animateInner) {
      innerWheelGroup.classList.remove('no-transition');
    } else {
      innerWheelGroup.classList.add('no-transition');
    }

    if (animateOuter) {
      outerWheelGroup.classList.remove('no-transition');
    } else {
      outerWheelGroup.classList.add('no-transition');
    }

    const totalInnerDeg = outerRotationDeg + keyRotationDeg;
    outerWheelGroup.style.transform = `rotate(${outerRotationDeg.toFixed(4)}deg)`;
    innerWheelGroup.style.transform = `rotate(${totalInnerDeg.toFixed(4)}deg)`;
    keyDisplay.textContent = String(currentKey);
  }

  /**
   * Find the shortest angular delta from currentDeg to targetBaseDeg.
   */
  function shortestAngleDelta(currentDeg, targetBaseDeg) {
    let delta = ((targetBaseDeg - currentDeg) % 360 + 540) % 360 - 180;
    if (Math.abs(Math.abs(delta) - 180) < 1e-6) {
      delta = -180;
    }
    return delta;
  }

  /**
   * Set the cipher key (0-25), rotating the inner wheel along the shortest angular path
   * relative to the outer wheel.
   */
  function setKey(targetKey, animate = true) {
    const normalized = normalizeKey(targetKey);
    const targetBaseAngle = -normalized * STEP_DEG;

    keyRotationDeg += shortestAngleDelta(keyRotationDeg, targetBaseAngle);
    currentKey = normalized;
    renderWheelState(animate, true);
  }

  /**
   * Reset key to 0 and return both inner and outer wheels to their original position
   * along the shortest visual path.
   */
  function resetWheels() {
    const currentTotalInnerDeg = outerRotationDeg + keyRotationDeg;
    const targetOuterDeg = outerRotationDeg + shortestAngleDelta(outerRotationDeg, 0);
    const targetTotalInnerDeg = currentTotalInnerDeg + shortestAngleDelta(currentTotalInnerDeg, 0);

    outerRotationDeg = targetOuterDeg;
    keyRotationDeg = targetTotalInnerDeg - targetOuterDeg;
    currentKey = 0;
    renderWheelState(true, true);
  }

  /**
   * Step the key by +1 or -1.
   */
  function stepKey(stepDelta) {
    currentKey = normalizeKey(currentKey + stepDelta);
    const snappedSteps = Math.round(keyRotationDeg / STEP_DEG);
    keyRotationDeg = (snappedSteps - stepDelta) * STEP_DEG;
    renderWheelState(true, true);
  }

  /**
   * Compute pointer angle in degrees around the center of the SVG wheel.
   */
  function getPointerAngleDeg(clientX, clientY) {
    const rect = svgWheel.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    return (Math.atan2(dy, dx) * 180) / Math.PI;
  }

  /**
   * Determine which wheel ('outer' or 'inner') the pointer selected, or null if outside/center.
   */
  function detectSelectedWheel(event) {
    if (event.target && typeof event.target.closest === 'function') {
      if (event.target.closest('#outer-wheel')) {
        return 'outer';
      }
      if (event.target.closest('#inner-wheel')) {
        return 'inner';
      }
    }

    // Fallback via radial distance in normalized viewBox coordinates (500x500)
    const rect = svgWheel.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      return null;
    }
    const scale = 500 / rect.width;
    const dx = (event.clientX - (rect.left + rect.width / 2)) * scale;
    const dy = (event.clientY - (rect.top + rect.height / 2)) * scale;
    const dist = Math.hypot(dx, dy);

    if (dist >= R_MID && dist <= R_OUTER) {
      return 'outer';
    }
    if (dist >= R_INNER && dist < R_MID) {
      return 'inner';
    }
    return null;
  }

  /**
   * Handle pointer/mouse/touch drag start on the wheel.
   */
  function onPointerDown(event) {
    if (event.button !== undefined && event.button !== 0) {
      return;
    }

    const selected = detectSelectedWheel(event);
    if (!selected) {
      return;
    }

    draggingWheel = selected;
    activePointerId = event.pointerId;
    dragStartPointerAngle = getPointerAngleDeg(event.clientX, event.clientY);
    dragStartAngle = draggingWheel === 'outer' ? outerRotationDeg : keyRotationDeg;

    svgWheel.classList.add('is-dragging');
    if (draggingWheel === 'outer') {
      // Both wheels move together when rotating the outer wheel
      outerWheelGroup.classList.add('no-transition');
      innerWheelGroup.classList.add('no-transition');
    } else {
      innerWheelGroup.classList.add('no-transition');
    }

    if (svgWheel.setPointerCapture && event.pointerId !== undefined) {
      try {
        svgWheel.setPointerCapture(event.pointerId);
      } catch (_) {
        // Ignore if pointer capture is unsupported
      }
    }

    event.preventDefault();
  }

  /**
   * Handle pointer/mouse/touch drag move.
   */
  function onPointerMove(event) {
    if (!draggingWheel || (activePointerId !== null && event.pointerId !== activePointerId)) {
      return;
    }

    const pointerAngle = getPointerAngleDeg(event.clientX, event.clientY);
    const angleDiff = ((pointerAngle - dragStartPointerAngle) % 360 + 540) % 360 - 180;

    // Update drag baselines continuously so multi-turn rotations never jump at +-180 deg
    dragStartPointerAngle = pointerAngle;
    dragStartAngle += angleDiff;

    if (draggingWheel === 'outer') {
      // Rotating the outer wheel moves both wheels together, keeping the key locked
      outerRotationDeg = dragStartAngle;
      renderWheelState(false, false);
    } else {
      keyRotationDeg = dragStartAngle;
      currentKey = rotationToKey(keyRotationDeg);
      renderWheelState(false, true);
    }

    event.preventDefault();
  }

  /**
   * Handle pointer/mouse/touch release and snap the dragged wheel to the nearest letter segment.
   */
  function onPointerUp(event) {
    if (!draggingWheel || (activePointerId !== null && event.pointerId !== activePointerId)) {
      return;
    }

    const finishedWheel = draggingWheel;
    draggingWheel = null;
    activePointerId = null;
    svgWheel.classList.remove('is-dragging');

    if (svgWheel.releasePointerCapture && event.pointerId !== undefined) {
      try {
        svgWheel.releasePointerCapture(event.pointerId);
      } catch (_) {
        // Ignore
      }
    }

    if (finishedWheel === 'outer') {
      const nearestOuterStep = Math.round(outerRotationDeg / STEP_DEG);
      outerRotationDeg = nearestOuterStep * STEP_DEG;
      renderWheelState(true, true);
    } else {
      const nearestKeyStep = Math.round(keyRotationDeg / STEP_DEG);
      keyRotationDeg = nearestKeyStep * STEP_DEG;
      currentKey = normalizeKey(-nearestKeyStep);
      renderWheelState(true, true);
    }
  }

  /**
   * Check whether the page is currently in fullscreen mode.
   */
  function isFullscreenActive() {
    return Boolean(
      document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement ||
        appContainer.classList.contains('is-fullscreen')
    );
  }

  /**
   * Lock the screen orientation to its current orientation so the user does not
   * accidentally rotate the screen while in fullscreen mode.
   */
  async function lockDeviceOrientation() {
    if (!screen.orientation || typeof screen.orientation.lock !== 'function') {
      return;
    }
    try {
      const currentType =
        screen.orientation.type ||
        (window.innerHeight >= window.innerWidth ? 'portrait-primary' : 'landscape-primary');
      await screen.orientation.lock(currentType);
    } catch (_) {
      try {
        const fallbackType = window.innerHeight >= window.innerWidth ? 'portrait' : 'landscape';
        await screen.orientation.lock(fallbackType);
      } catch (__) {
        // Orientation lock is not supported on some desktop or iOS browsers; fail silently.
      }
    }
  }

  /**
   * Unlock the screen orientation when exiting fullscreen.
   */
  function unlockDeviceOrientation() {
    if (screen.orientation && typeof screen.orientation.unlock === 'function') {
      try {
        screen.orientation.unlock();
      } catch (_) {
        // Ignore if not supported or not locked
      }
    }
  }

  /**
   * Sync the fullscreen button UI (icon, label, aria-pressed) with the fullscreen state.
   */
  function updateFullscreenUI() {
    const active = isFullscreenActive();
    fullscreenBtn.setAttribute('aria-pressed', String(active));

    if (active) {
      fullscreenIcon.classList.add('hidden');
      minimiseIcon.classList.remove('hidden');
      fullscreenText.textContent = 'Minimise';
    } else {
      fullscreenIcon.classList.remove('hidden');
      minimiseIcon.classList.add('hidden');
      fullscreenText.textContent = 'Full screen';
    }
  }

  /**
   * Toggle fullscreen mode and screen orientation lock.
   */
  async function toggleFullscreen() {
    if (!isFullscreenActive()) {
      const docEl = document.documentElement;
      let enteredNativeFullscreen = false;

      try {
        if (docEl.requestFullscreen) {
          await docEl.requestFullscreen();
          enteredNativeFullscreen = true;
        } else if (docEl.webkitRequestFullscreen) {
          docEl.webkitRequestFullscreen();
          enteredNativeFullscreen = true;
        } else if (docEl.msRequestFullscreen) {
          docEl.msRequestFullscreen();
          enteredNativeFullscreen = true;
        }
      } catch (_) {
        enteredNativeFullscreen = false;
      }

      if (!enteredNativeFullscreen) {
        appContainer.classList.add('is-fullscreen');
      }

      await lockDeviceOrientation();
      updateFullscreenUI();
    } else {
      unlockDeviceOrientation();
      appContainer.classList.remove('is-fullscreen');

      try {
        if (document.fullscreenElement && document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitFullscreenElement && document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msFullscreenElement && document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } catch (_) {
        // Ignore errors when exiting fullscreen
      }

      updateFullscreenUI();
    }
  }

  // Initialize wheel SVG and state
  buildCipherWheel();
  renderWheelState(false, false);

  // Pointer events (handles mouse and touch uniformly)
  svgWheel.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove, { passive: false });
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);

  // Keyboard accessibility for the wheel
  svgWheel.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
      event.preventDefault();
      stepKey(1);
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
      event.preventDefault();
      stepKey(-1);
    } else if (event.key === 'Home' || event.key === '0') {
      event.preventDefault();
      resetWheels();
    }
  });

  // Up / Down key buttons
  keyUpBtn.addEventListener('click', function () {
    stepKey(1);
  });

  keyDownBtn.addEventListener('click', function () {
    stepKey(-1);
  });

  // Reset button
  resetBtn.addEventListener('click', function () {
    resetWheels();
  });

  // Fullscreen / Minimise button
  fullscreenBtn.addEventListener('click', function () {
    toggleFullscreen();
  });

  // Sync UI and unlock orientation if user exits fullscreen via Escape key or system gesture
  function onFullscreenChange() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      appContainer.classList.remove('is-fullscreen');
      unlockDeviceOrientation();
    }
    updateFullscreenUI();
  }

  document.addEventListener('fullscreenchange', onFullscreenChange);
  document.addEventListener('webkitfullscreenchange', onFullscreenChange);
})();
