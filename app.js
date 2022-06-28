'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;



//when layer clicks on "CHECK!" button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // If there is no input
  if (!guess) {
    //If there is no number
    document.querySelector(".message").textContent = "⛔ No Number!";
  } else if (guess === secretNumber) {
    //when the player guesses the number the color of the background will change
    document.querySelector(".message").textContent = "🥳 Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretNumber) {
    if (score > 0) {
      //if the player hits a big number than the correct number
      document.querySelector(".message").textContent = "📈 Too High!";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      //fixing a bug, if the player guessed more than 20 times the SCORE display shoed a negative number
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      //for player when he is typing a number lower than the correct  number
      document.querySelector(".message").textContent = "📉 Too Low!";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});


//adding event handler for "AGAIN" button 

document.querySelector(".again").addEventListener("click", function () {
  score = 20 ;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#4f6367";
  document.querySelector(".number").style.width = "15rem";
});