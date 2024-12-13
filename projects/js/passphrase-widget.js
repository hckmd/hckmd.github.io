// Set the text above the generate button to the initial prompt to match dropdowns
['word1', 'word2', 'word3', 'word4'].forEach(selectId => randomiseWordSelection(selectId));
updatePhraseText();

// Hide the passphrase image until an image has actually loaded
const outputElement = document.getElementById('output');
outputElement.style.display = 'none';

// Once an image has loaded, hide the placeholder image - we only need to do this once
outputElement.onload = function () {
    if (outputElement.style.display == 'none') {
        document.getElementById('placeholder').style.display = 'none';
        outputElement.style.display = 'block';	
    }
};
visualisePhrase();


function randomiseWordSelection(selectId) {
    const select = document.getElementById(selectId);
    const items = select.getElementsByTagName('option');
    const index = Math.floor(Math.random() * items.length);
    select.selectedIndex = index;
}

function updatePhraseText() {
    const word1 = document.getElementById('word1').value;
    const word2 = document.getElementById('word2').value;
    const word3 = document.getElementById('word3').value;
    const word4 = document.getElementById('word4').value;

    const text = `${word1} ${word2} ${word3} ${word4}`;
    document.getElementById("phrase").innerText = text;
}

function visualisePhrase() {
    const word1 = document.getElementById('word1').value;
    const word2 = document.getElementById('word2').value;
    const word3 = document.getElementById('word3').value;
    const word4 = document.getElementById('word4').value;

    const imageDir = "https://hckmd.pythonanywhere.com/static/memory-trick-images";
    const imageSource = `${imageDir}/${word1}_${word2}_${word3}_${word4}.jpg`;
    document.getElementById('output').src = imageSource;
}

// The click event, which gets the source of the image we want to use
document.getElementById('visualise').addEventListener('click', visualisePhrase);

document.getElementById('randomise').addEventListener('click', function() {
    ['word1', 'word2', 'word3', 'word4'].forEach(selectId => randomiseWordSelection(selectId));
    updatePhraseText();
});

// Adds event listener to the dropdowns, to update the prompt text when the dropdowns change
[...document.querySelectorAll('.selection')].forEach(select => select.addEventListener('change', function() {
    updatePhraseText();
}));