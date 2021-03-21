function play(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener("keydown", (event) => {
  let key = document.getElementById(event.keyCode);
  key.classList.add("piano-key-active");
  var src = `assets/audio/${key.dataset.note}.mp3`;
  play(src);
});

window.addEventListener("keyup", (event) => {
  try {
    code = event.keyCode;
    code += "";
    let keyID = document.getElementById(code);
    keyID.classList.remove("piano-key-active");
  } catch {}
});

var isMouseDown = 0;
for (let key of document.getElementsByClassName("piano-key")) {
  key.onmousedown = function () {
    event.target.classList.add("piano-key-active");
    isMouseDown = 1;
    var src = `assets/audio/${key.dataset.note}.mp3`;
    play(src);
  };
  key.onmouseup = function () {
    isMouseDown = 0;
  };
  key.onmouseover = function () {
    if (isMouseDown) {
      var src = `assets/audio/${key.dataset.note}.mp3`;
      play(src);
      event.target.classList.add("piano-key-active");
    }
  };
  key.onmouseout = function () {
    if (event.target.classList.contains("piano-key-active")) {
      event.target.classList.remove("piano-key-active");
    }
  };
}
// full screen button script here
function fullSreenButtonOn() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
// view mode == notes
const ViewModeNotes = document.querySelector(".btn-notes");
ViewModeNotes.addEventListener("click", (event) => {
  if (ViewModeletter.classList.contains("btn-active")) {
    ViewModeletter.classList.remove("btn-active");
    ViewModeNotes.classList.add("btn-active");
    for (let key of document.getElementsByClassName("piano-key")) {
      key.classList.remove("piano-key-letter");
    }
  }
});
// view mode == letters
const ViewModeletter = document.querySelector(".btn-letters");
ViewModeletter.addEventListener("click", (event) => {
  if (ViewModeNotes.classList.contains("btn-active")) {
    ViewModeNotes.classList.remove("btn-active");
    ViewModeletter.classList.add("btn-active");
  }
  for (let key of document.getElementsByClassName("piano-key")) {
    if (!key.classList.contains("piano-key-letter")) {
      key.classList.add("piano-key-letter");
    }
  }
});
