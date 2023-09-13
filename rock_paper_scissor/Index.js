let player;
let count=0;

const score = document.querySelector("#score");
score.textContent=count;

//random weapon for computer
let computer;
let selection = Math.random();
if (selection < 0.34) {
  computer = "rock";
} else if (selection <= 0.67) {
  computer = "paper";
} else computer = "scissor";


//game
 function Game(x,y) {
  if (
    (x == "rock" && y == "rock") ||
    (x == "paper" && y == "paper") ||
    (x == "scissor" && y == "scissor")
  ) {
    console.log("Tie");
  } else if (
    (x == "rock" && y == "paper") ||
    (x == "paper" && y == "scissor") ||
    (x == "scissor" && y == "rock")
  ) {
    console.log("you loose!!");
  } else if (
    (x == "rock" && y == "scissor") ||
    (x == "paper" && y == "rock") ||
    (x == "scissor" && y == "paper")
  ) {
    console.log("you winn!!");
  } else console.log("enter correct option");
};

// player weapon selection
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    player = button.id;
    //check
    console.log(player,computer);
    Game(player,computer);
  });
});

