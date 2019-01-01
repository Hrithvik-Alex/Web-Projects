let playerOneScore = document.getElementById("playerOne");
let playerTwoScore = document.getElementById("playerTwo");
var p1Score = 0;
var p2Score = 0;

let inputScore = document.querySelector("input");
let totalScore = document.getElementById("score");
var winningScore = 5;

let playerOneButton = document.querySelector("#p1Button");
let playerTwoButton = document.querySelector("#p2Button");
let resetButton = document.querySelector("#reset");

var gameOver = false;

function reset() {
	p1Score=0;
	playerOneScore.textContent = p1Score;
	playerOneScore.classList.remove("winner")
	
	p2Score=0;
	playerTwoScore.textContent = p2Score;
	playerTwoScore.classList.remove("winner")

	gameOver = false;
}


inputScore.addEventListener("change", function(){
	totalScore.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});




playerOneButton.addEventListener("click", function(){
	if(!gameOver) {
		p1Score++;

		if(p1Score === winningScore) {
			gameOver = true;
			playerOneScore.classList.add("winner");
		}

		playerOneScore.textContent = p1Score;
	}
	
});

playerTwoButton.addEventListener("click", function(){
	if(!gameOver) {
		p2Score++;

		if(p2Score === winningScore) {
			gameOver = true;
			playerTwoScore.classList.add("winner");
		}

		playerTwoScore.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});