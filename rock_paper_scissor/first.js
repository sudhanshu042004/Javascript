let player = prompt("rock,paper,scissor");
let computer;
let selection = Math.random();
if (selection < 0.34) {
  computer = "rock";
} else if (selection <= 0.67) {
  computer = "paper";
} else computer = "scissor";

player = player.toLowerCase();
console.log(player);

if (
  (player == "rock" && computer == "rock") ||
  (player == "paper" && computer == "paper") ||
  (player == "scissor" && computer == "scissor")
) {
  console.log("Tie");
} else if (
  (player == "rock" && computer == "paper") ||
  (player == "paper" && computer == "scissor") ||
  (player == "scissor" && computer == "rock")
) {
  console.log("you loose!!");
} else if (
  (player == "rock" && computer == "scissor") ||
  (player == "paper" && computer == "rock") ||
  (player == "scissor" && computer == "paper")
) {
  console.log("you winn!!");
} else console.log("enter correct option");

console.log(player + " :player");
console.log(computer + " :computer");
