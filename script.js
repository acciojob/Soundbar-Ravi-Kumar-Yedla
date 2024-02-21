//your JS code here. If required.
function playSound(soundName) {
  const audio = new Audio(`sounds/${soundName}`);
  audio.play();
}