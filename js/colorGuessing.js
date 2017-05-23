var numSquares = 6;
var colors = generateRandomColors(numSquares);
var colorDisplay = document.querySelector("h1 span");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function () {
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function () {
	numSquares = 6;
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display="block";	
	}
});

resetBtn.addEventListener("click", function(){
	this.textContent = "New Colors";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	for (var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
});

for (var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab our color of clicked square
		//compare color to pickedColor
		clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetBtn.textContent = "Play Again?";
		} else {
			messageDisplay.textContent = "Try Again";
			this.style.backgroundColor = "#232323";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	//change each color to match given color
	for (var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function randomColor(){
	var R = Math.floor(Math.random()*256);
	var G = Math.floor(Math.random()*256);
	var B = Math.floor(Math.random()*256);

	return `rgb(${R}, ${G}, ${B})`;
}

function generateRandomColors(num){
	var arr = [];
	for (var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}