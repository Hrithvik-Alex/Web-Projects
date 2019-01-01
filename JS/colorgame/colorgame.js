var numberOfSquares = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")
var squares = document.querySelectorAll(".square");

init();

function init(){
	setModeButtons();
	setSquares();	
	reset();
}

function setModeButtons(){
	for (var i = modeButtons.length - 1; i >= 0; i--) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
		})
	}
}

function setSquares() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			 var clickedColor = this.style.backgroundColor
			 if(clickedColor === pickedColor) {
			 	message.textContent = "Correct";
			 	changeColors(clickedColor);
			 	h1.style.backgroundColor = clickedColor
			 	resetButton.textContent = "Play Again?"

			 } else {
			 	this.style.backgroundColor = "#232323";
			 	message.textContent = "Try Again";
			 }
		});
	}
}

function reset() {
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	message.textContent = "";
	for(var i = 0; i < squares.length; i++) {
	if(colors[i]){
		squares[i].style.display = "block"
		squares[i].style.backgroundColor = colors[i];
	} else {
		squares[i].style.display = "none";
	}
	
	}
	h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	for(var i = 0; i <squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(amount) {
	colorArray = []
	for(i=0;i<amount;i++) {
		colorArray.push(randomColor())
	}
	return colorArray
}

function randomColor() {
	red = Math.floor(Math.random() * 255);
	green = Math.floor(Math.random() * 255);
	blue = Math.floor(Math.random() * 255);
	color = "rgb(" + red +", " + green + ", " + blue + ")"
	return color
}