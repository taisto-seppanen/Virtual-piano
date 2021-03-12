const note_a = new sound("./sounds/a.mp3");
const note_a_sharp = new sound("./sounds/a♯.mp3");
const note_b = new sound("./sounds/b.mp3");
const note_c = new sound("./sounds/c.mp3");
const note_c_sharp = new sound("./sounds/c♯.mp3");
const note_d_sharp = new sound("./sounds/d♯.mp3");
const note_e = new sound("./sounds/e.mp3");
const note_f = new sound("./sounds/f.mp3");
const note_f_sharp = new sound("./sounds/f♯.mp3");
const note_g = new sound("./sounds/g.mp3");
const note_g_sharp = new sound("./sounds/g♯.mp3");

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.play = function () {
    this.sound.play();
  };
}

document.addEventListener("keydown", keyPlay);

function mousePlay(event, bntKeyCode) {
  if (mouseDown) playKey(bntKeyCode);
}

var mouseDown = 0;

document.body.onmousedown = function () {
  mouseDown = 1;
};
document.body.onmouseup = function () {
  mouseDown = 0;
};

function keyPlay(event) {
  playKey(event.keyCode);
}

function playKey(code) {
  switch (code) {
    case 81: //q
      note_a_sharp.play();
      let pushedKey = document.getElementById(code);
      //pushedKey.style.backgroundColor = "green";
      break;
    case 87: //w
      note_c_sharp.play();
      break;
    case 69: //e
      note_d_sharp.play();
      break;
    case 82: //r
      note_f_sharp.play();
      break;
    case 84: //t
      note_g_sharp.play();
      break;
    case 65: //a
      note_a.play();
      break;
    case 83: //s
      note_b.play();
      break;
    case 68: //d
      note_c.play();
      break;
    case 70: //f
      note_e.play();
      break;
    case 71: //g
      note_f.play();
      break;
    case 72: //h
      note_g.play();
      break;
  }
}

// full screen button script here
function fullSreenButtonOn() {
  var fllScrnBtn = document.getElementById("fullSreenButton");

  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    console.log(fllScrnBtn);
    fllScrnBtn.style.backgroundColor = "blue";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      fllScrnBtn.style.backgroundColor = "red";
    }
  }
}
