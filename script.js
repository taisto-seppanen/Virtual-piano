const note_a = new sound("./assets/audio/a.mp3");
const note_a_sharp = new sound("./assets/audio/a♯.mp3");
const note_b = new sound("./assets/audio/b.mp3");
const note_c = new sound("./assets/audio/c.mp3");
const note_c_sharp = new sound("./assets/audio/c♯.mp3");
const note_d = new sound("./assets/audio/d.mp3");
const note_d_sharp = new sound("./assets/audio/d♯.mp3");
const note_e = new sound("./assets/audio/e.mp3");
const note_f = new sound("./assets/audio/f.mp3");
const note_f_sharp = new sound("./assets/audio/f♯.mp3");
const note_g = new sound("./assets/audio/g.mp3");
const note_g_sharp = new sound("./assets/audio/g♯.mp3");

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.play = function () {
    this.sound.play();
  };
}

var mouseDown = 0;
document.addEventListener("keydown", playKey);
document.addEventListener("keyup", returnDefaulKey);
let pianoKeys = document.getElementsByClassName("piano-key");

function playKey(event) {
  playing(event.keyCode);
}

//Обработка движений мыши по клавишам
for (let i of pianoKeys) {
  i.mouseout = function () {
    let keyID = i.id;
    keyID.style.backgroundColor = "green";
  };

  i.onmousedown = function () {
    mouseDown = 1;
    let keyID = i.id;
    playing(keyID);
  };
  i.onmouseup = function () {
    mouseDown = 0;
  };

  i.onmouseover = function () {
    if (mouseDown) {
      let keyID = i.id;
      playing(keyID);
      keyID = document.getElementById(i.id);
      keyID.classList.add("piano-key-active");
    } else {
      let keyID = document.getElementById(i.id);
    }
  };

  i.onmouseout = function () {
    let keyID = document.getElementById(i.id);
    if (keyID.classList.contains("piano-key-active")) {
      keyID.classList.remove("piano-key-active");
    }
  };
}

function returnDefaulKey(event) {
  try {
    code = event.keyCode;
    code += "";
    let keyID = document.getElementById(code);
    keyID.classList.toggle("piano-key-active");
  } catch {}
}

function playing(code) {
  code += "";
  switch (code) {
    case "81":
      document.getElementById(code).classList.toggle("piano-key-active");
      note_c_sharp.play();
      break;
    case "87":
      document.getElementById(code).classList.toggle("piano-key-active");
      note_d_sharp.play();
      break;
    case "69":
      document.getElementById(code).classList.toggle("piano-key-active");
      note_f_sharp.play();
      break;
    case "82":
      document.getElementById(code).classList.toggle("piano-key-active");
      note_g_sharp.play();
      break;
    case "84":
      document.getElementById(code).classList.toggle("piano-key-active");
      note_a_sharp.play();
      break;
    case "65":
      document.getElementById(code).classList.toggle("piano-key-active");
      note_c.play();
      break;
    case "83":
      document.getElementById(code).classList.toggle("piano-key-active");
      note_d.play();
      break;
    case "74":
      document.getElementById(code).classList.toggle("piano-key-active");
      note_b.play();
      break;
    case "68":
      document.getElementById(code).classList.toggle("piano-key-active");
      note_e.play();
      break;
    case "70":
      document.getElementById(code).classList.toggle("piano-key-active");
      note_f.play();
      break;
    case "71":
      document.getElementById(code).classList.toggle("piano-key-active");
      note_g.play();
      break;
    case "72":
      document.getElementById(code).classList.toggle("piano-key-active");
      note_a.play();
      break;
  }
}

// full screen button script here
function fullSreenButtonOn() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function keyViewMode() {
  console.log(pianoKeys);
  for (let key of pianoKeys) {
    console.log(key.classList);
    // key.classList.replace;                //dot elements or wut?
  }
  document.getElementById("notesBtn").classList.toggle("btn-active");
  document.getElementById("lettersBtn").classList.toggle("btn-active");
}
