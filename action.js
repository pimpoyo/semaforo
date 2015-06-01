count = 0;
document.getElementById("changeButton").addEventListener("click", changeColor );
function changeColor() {
	colorValue = ++count%3; //if trafficLight has 3 light
	off = "circle off";
	green = "circle green";
	red = "circle red";
	orange = "circle orange";
	
	if (colorValue == 0) {
		document.getElementById("top").className = off;
		document.getElementById("center").className = off;
		document.getElementById("bottom").className = red;
	} else if (colorValue == 1) {
		document.getElementById("top").className = green;
		document.getElementById("center").className = off;
		document.getElementById("bottom").className = off;
	} else {
		document.getElementById("top").className = off;
		document.getElementById("center").className = orange;
		document.getElementById("bottom").className = off;
	}
}
