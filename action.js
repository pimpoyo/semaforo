var count = 0;
document.getElementById("changeButton").addEventListener("click", changeColor );
function changeColor() {
	var colorValue = ++count%3; //if trafficLight has 3 light
	var off = "circle off";
	var green = "circle green";
	var red = "circle red";
	var orange = "circle orange";
	
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
