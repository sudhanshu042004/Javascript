let player;
let P_count = 0;
let C_count = 0;
var win = false;
var lose = true;

const playerscore = document.querySelector("#pscore");
const computerscore = document.querySelector("#cscore");
const playerSelection = document.querySelector("#player");
const computerSelection = document.querySelector("#Computer");
const Result = document.querySelector("#gameResult");

//reload function

//game
function Game(x, y) {
  if (
    (x == "rock" && y == "rock") ||
    (x == "paper" && y == "paper") ||
    (x == "scissor" && y == "scissor")
  ) {
    playerSelection.textContent = "Tie";
  } else if (
    (x == "rock" && y == "paper") ||
    (x == "paper" && y == "scissor") ||
    (x == "scissor" && y == "rock")
  ) {
    playerSelection.textContent = "Loose!!";
    C_count = C_count + 1;
    computerscore.textContent = C_count;
  } else if (
    (x == "rock" && y == "scissor") ||
    (x == "paper" && y == "rock") ||
    (x == "scissor" && y == "paper")
  ) {
    playerSelection.textContent = "Winn!!";
    P_count = P_count + 1;
    playerscore.textContent = P_count;
  } else playerSelection.textContent = "Enter Correct Option!!";
}

// player weapon selection
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //random weapon for computer
    let computer ="  ";
    let selection = Math.random();
    if (selection < 0.34) {
      computer = "rock";
    } else if (selection <= 0.67) {
      computer = "paper";
    } else computer = "scissor";

    player = button.id;
    computerSelection.innerHTML=computer;
   setTimeout(() => {
    Game(player, computer);
   }, 500); 

    if (P_count > 3) {
      win = true;
    } else if (C_count > 3) {
      lose = true;
    }
    console.log(lose);
    //win/loose get true show
    if (win) {
      let winPanel = document.createElement("div");
      let button = document.createElement("button");

      winPanel.classList.add("winPanel");
      winPanel.textContent = "Yay!! You win";
      button.textContent = "PlayAgain";
      button.addEventListener("click",()=>{
        window.location.reload();
      }
      )
      winPanel.appendChild(button);
      Result.appendChild(winPanel);
    } else if (lose) {
      console.log("lose");
      let loosePanel = document.createElement("div");
      let button = document.createElement("button");

      loosePanel.classList.add("losePanel");
      loosePanel.textContent = "I think You loose by Mistake";
      button.textContent = "TryAgain";
      button.addEventListener("click",()=>{
        window.location.reload();
      })
      loosePanel.appendChild(button);
      Result.appendChild(loosePanel);
    }
  });
});
