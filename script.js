let white_Keys = ["z", "x", "c", "v", "b", "n", "m"];
let black_Keys = ["s", "d", "g", "h", "j"];
let keys = document.querySelectorAll(".key");
let whiteKeys = document.querySelectorAll(".key.white");
let blackKeys = document.querySelectorAll(".key.black");
keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});
document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  let key = e.key;
  let whiteKeyIndex = white_Keys.indexOf(key);
  let blackKeyIndex = black_Keys.indexOf(key);
  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});
function playNote(key) {
  let noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}
