let goodCount = 0;
let badCount = 0;
const goodThreshold = 3;
const badThreshold = 3;

function updateCounters() {
    document.getElementById('good-counter').innerText = `Good: ${goodCount}`;
    document.getElementById('bad-counter').innerText = `Bad: ${badCount}`;

    // Check for end conditions
    if (goodCount >= goodThreshold) {
        endFight(true);
    } else if (badCount >= badThreshold) {
        endFight(false);
    }
}

function handleQuicktimeChoice(correct) {
    if (correct) {
        goodCount += 1;
    } else {
        badCount += 1;
    }
    updateCounters();
    loadNextImage(); // Advance image in fight sequence
}

function loadNextImage() {
    const imageElement = document.getElementById('fight-scene-image');
    // Logic to progress through image sequence
    imageElement.src = `/next_image_${goodCount + badCount}.jpg`; // Update based on current scene
}

function endFight(success) {
    if (success) {
        // Hide fight scene UI, resume normal game UI
        document.querySelector('.dialogue').classList.remove('hidden');
    } else {
        // Show replay prompt
        alert('Failed! Try Again.');
        // Reset counters or navigate to retry screen
        goodCount = 0;
        badCount = 0;
        updateCounters();
        loadNextImage();
    }
}

// Event listeners for button actions
document.getElementById('btn-top-left').onclick = () => handleQuicktimeChoice(false); // or true based on scenario
document.getElementById('btn-top-right').onclick = () => handleQuicktimeChoice(true);
document.getElementById('btn-bottom-left').onclick = () => handleQuicktimeChoice(false);
document.getElementById('btn-bottom-right').onclick = () => handleQuicktimeChoice(false);