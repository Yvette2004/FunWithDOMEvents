let playBtn = document.getElementById("play-button");

playBtn.addEventListener("click", move);

function move() {
	playBtn.style.top = Math.random()*100 + "%";
	playBtn.style.left = Math.random()*100 + "%";
}

//Challenge 1
let removeText = document.getElementById("challenge-one");
let bodyElements = document.getElementsByTagName("body");
let body = bodyElements[0];


removeText.addEventListener("dblclick", ifClicked);

function ifClicked() {
	body.removeChild(removeText);
}

//Challenge 2 

playBtn.addEventListener("mouseover",hover);

function hover() {
	playBtn.style.backgroundColor = "purple";
}


//Challenge 3
let title= document.getElementById("page-title");
title.addEventListener("copy",copy);

function copy() {
 	alert("STOP!");

}
