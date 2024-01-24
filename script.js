var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// Set background color to that color inputs match the background generated on the first page load. 
body.style.background = setGradient();

// Display the initial CSS linear gradient property on page load.
css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// function to get a random integer between two given values
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

// function to randomise the background
function randomise() {
	var r1 = getRandomInt(0,266);
	var g1 = getRandomInt(0,266);
	var b1 = getRandomInt(0,266);
	var r2 = getRandomInt(0,266);
	var g2 = getRandomInt(0,266);
	var b2 = getRandomInt(0,266);

	body.style.background = `linear-gradient(to right, rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}))`;

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomise);