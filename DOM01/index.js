let mydiv = document.querySelector("#mydiv");



let newelement = document.createElement("span");
newelement.textContent = "this is love babber";

mydiv.insertAdjacentElement("beforebegin" , newelement); // beforebegin afterbegin beforeending after ending

let parent =document.querySelector("#mydiv");
let child = document.querySelector("fpara");

parent.removechild(child);
