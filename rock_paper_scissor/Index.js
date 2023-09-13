let player;
let P_count = 0;
let C_count = 0;

const playerscore = document.querySelector("#pscore");
const computerscore = document.querySelector("#cscore");

const playerSelection = document.querySelector("#player");

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
    C_count += 1;
    computerscore.textContent = C_count;
  } else if (
    (x == "rock" && y == "scissor") ||
    (x == "paper" && y == "rock") ||
    (x == "scissor" && y == "paper")
  ) {
    playerSelection.textContent = "Winn!!";
    P_count += 1;
    playerscore.textContent = P_count;
  } else playerSelection.textContent = "Enter Correct Option!!";
}

// player weapon selection
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    //random weapon for computer
    let computer;
    let selection = Math.random();
    if (selection < 0.34) {
      computer = "rock";
    } else if (selection <= 0.67) {
      computer = "paper";
    } else computer = "scissor";

    player = button.id;
    Game(player, computer);
  });
});
