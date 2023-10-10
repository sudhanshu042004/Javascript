// test 
let x = (a) => {
    console.log(a);
}

const GameBoard = ["", "", "", "", "", "", "", "", ""];
function player(mark) {
    return { mark };
}

// get player selection by dialog
const dialog = document.querySelector("dialog");
const dialogBtn = document.querySelectorAll(".dialog-btn");
const btnX = document.querySelector(".Xbtn");
const btnY = document.querySelector(".Ybtn");
const showSelectionDiv = document.querySelector(".showSelection");
const blockDiv = document.querySelectorAll(".block");

let player1;
let player2;

dialog.showModal();
dialogBtn.forEach((item) => {
    item.addEventListener("click", () => {
        dialog.close();
        let choiceof1 = item.value;
        let choiceof2;
        if (choiceof1 == "X") {
            choiceof2 = "O";
        } else {
            choiceof2 = "X";
        }
        player1 = player(choiceof1);
        player2 = player(choiceof2);
        showSelectionDiv.innerHTML = `<ul> 
        <li> <h2>Player 1: ${player1.mark}</h2></li>
        <li><h2>player 2: ${player2.mark}</h2></li> </ul >`
    })
})

let chanceCount=0;
blockDiv.forEach((item)=>{
    item.addEventListener("click",()=>{
        
        
        if(chanceCount%2==0){
            item.innerHTML=`${player1.mark}`
        }else if (chanceCount%2!=0){
            item.innerHTML=`${player2.mark}`
        }
        chanceCount++;
    
    })
})