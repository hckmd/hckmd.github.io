// Set the text above the generate button to the initial prompt to match dropdowns
['word1', 'word2', 'word3', 'word4'].forEach(selectId => randomiseWordSelection(selectId));
updatePhraseText();
visualisePhrase();

function randomiseWordSelection(selectId) {
    var select = document.getElementById(selectId);
    var items = select.getElementsByTagName('option');
    var index = Math.floor(Math.random() * items.length);
    select.selectedIndex = index;
}

function updatePhraseText() {
    var word1 = document.getElementById('word1').value;
    var word2 = document.getElementById('word2').value;
    var word3 = document.getElementById('word3').value;
    var word4 = document.getElementById('word4').value;

    var text = `${word1} ${word2} ${word3} ${word4}`;
    document.getElementById("phrase").innerText = text;
}

function visualisePhrase() {
    var word1 = document.getElementById('word1').value;
    var word2 = document.getElementById('word2').value;
    var word3 = document.getElementById('word3').value;
    var word4 = document.getElementById('word4').value;

    var imageDir = "https://hckmd.pythonanywhere.com/static/memory-trick-images";
    var imageSource = `${imageDir}/${word1}_${word2}_${word3}_${word4}.jpg`;
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