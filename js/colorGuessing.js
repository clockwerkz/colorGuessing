var game = {}

var numSquares = 6;
var colors = [];
var pickedColor;


var colorDisplay = document.querySelector("h1 span");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

game.init = function() {
	setUpModeButtons();
	setUpSquares();
	resetBtn.addEventListener("click", reset);
	reset();
}

game.init();

function setUpModeButtons() {
	//mode Button event Listeners

	for (var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			numSquares = (this.textContent === "Easy") ? 3 : 6;
			
			reset();
		});
	}	
}


function setUpSquares() {
	//set up click events for the game squares on the page

	for (var i=0; i<squares.length; i++){
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

}


function reset() {
	resetBtn.textContent = "New Colors";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	for (var i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
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



/* OLD CODE BEFORE REFACTORING - LEAVING IN FILE FOR LEARNING PURPOSES 

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
});*/