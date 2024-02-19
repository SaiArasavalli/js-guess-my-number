"use strict";

// STATE
let score = 20;
let highscore = 0;
let secretNum = Math.trunc(Math.random() * 20 + 1);

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No Number";
  } else if (guess === secretNum) {
    document.querySelector(".number").textContent = secretNum;
    document.querySelector(".number").style.fontSize = "8rem";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".message").textContent = "🎉 Correct Number";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      score -= 1;
      document.querySelector(".message").textContent =
        guess > secretNum ? "📈 Too High" : "📉 Too Low";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.fontSize = "6rem";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
