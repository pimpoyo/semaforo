count = 0;
document.getElementById("changeButton").addEventListener("click", changeColor );
function changeColor() {
	colorValue = ++count%3;
	
	if (colorValue == 0) {
		document.getElementById("top").style.backgroundColor = "#555555";
		document.getElementById("center").style.backgroundColor = "#555555";
		document.getElementById("bottom").style.backgroundColor = "#FF0000";
	} else if (colorValue == 1) {
		document.getElementById("top").style.backgroundColor = "#00FF00";
		document.getElementById("center").style.backgroundColor = "#555555";
		document.getElementById("bottom").style.backgroundColor = "#555555";
	} else {
		document.getElementById("top").style.backgroundColor = "#555555";
		document.getElementById("center").style.backgroundColor = "#FF6514";
		document.getElementById("bottom").style.backgroundColor = "#555555";
	}
}
