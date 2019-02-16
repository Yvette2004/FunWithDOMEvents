let playBTn = document.getElementBYId("play")
playBtn.addEventListener("click",move);
function move(){
	playBtn.style.top = Math.random() *100 +1 + "%";
	playBtn.style.left = Math.random() *100 +1 + "%";
}