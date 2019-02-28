let playBtn = document.getElementById("play-button");

playBtn.addEventListener("click",move);

function move(){
	playBtn.style.top = Math.random() *100 +1 + "%";
	playBtn.style.left = Math.random() *100 +1 + "%";
}
//challenge 1
let removeText = document.getElementById("challenge-one");
let body = document.getElementByTagName("body")[0];
removeText.addEventListener("dblclick", ifClicked);
function ifClicked(){
	body.removeChild(removeText);
}
playBtn.addEventListener("mouseover", hover);
function hover(){
	playBtn.style.backgroundColor= "blue";
}

let title = document.getElementById("page-title")
title.addEventListener("copy",copy);
function copy(){
	alert("STOP")
}