let fontSize = 24;
let bgChanged = false;

function changeHeading() {
  let text = document.getElementById("inputText").value;
  if (text !== "") {
    document.getElementById("heading").innerText = text;
  }
}

function changeBackground() {
  if (!bgChanged) {
    document.body.style.background = "#cce5ff";
    bgChanged = true;
  } else {
    document.body.style.background = "#e6e6e6";
    bgChanged = false;
  }
}

function increaseFont() {
  fontSize += 2;
  document.getElementById("heading").style.fontSize = fontSize + "px";
}

function togglePara() {
  let para = document.getElementById("para");
  para.style.display = (para.style.display === "none") ? "block" : "none";
}

function resetAll() {
  document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
  document.body.style.background = "#e6e6e6";
  document.getElementById("para").style.display = "block";
  document.getElementById("heading").style.fontSize = "24px";
  fontSize = 24;
}