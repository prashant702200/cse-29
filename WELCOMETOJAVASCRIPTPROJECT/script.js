function changeHeading() {
    var text = document.getElementById("inputText").value;
    document.getElementById("heading").innerHTML = text;
}

function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}

function increaseFont() {
    document.getElementById("heading").style.fontSize = "30px";
}

function togglePara() {
    var p = document.getElementById("para");

    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}

function resetAll() {
    location.reload();
}