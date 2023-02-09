"use strict";

/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!";

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=20;

document.querySelector('.guess').value=23;

*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let hightscore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("****************No NUMBER!!!!*************");
  } else if (guess === secretNumber) {
    //when player wins
    displayMessage("Correct Number!!!!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > hightscore) {
      hightscore = score;
      document.querySelector(".highscore").textContent = hightscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Tooo High!!!" : "Too Low!!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You have LOST the GAME");
      document.querySelector(".score").textContent = 0;
    }
  }
  //    else if (guess > secretNumber) {
  //     //   high number
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Tooo High!!!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You've LOST the GAME";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     //low
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too Low!!!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You've LOST the GAME";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = secretNumber;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector(".number").textContent = "?";
});
