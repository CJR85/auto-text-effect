'use strict';
const textEl = document.getElementById('text'),
  speedEl = document.getElementById('speed'),
  text =
    "Don't Be A Menace to South Central while drinking your Juice in the Hood";
let idx = 1,
  speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));
