let player ;
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
  button.addEventListener("click",()=>{
    player=button.id;
    console.log(player);
  })
}
);

let computer;
let selection = Math.random();
if (selection < 0.34) {
  computer = "rock";
} else if (selection <= 0.67) {
  computer = "paper";
} else computer = "scissor";


