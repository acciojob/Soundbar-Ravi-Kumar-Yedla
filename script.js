//your JS code here. If required.
function playSound(soundName) {
    const audio = new Audio(`sounds/${soundName}`);
    audio.addEventListener('error', function() {
        console.error('Failed to load audio file:', soundName);
    });
    audio.play();
}