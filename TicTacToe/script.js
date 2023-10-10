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
const body = document.querySelector("body");
const buttonSound = new Audio("./sound/click-button-140881.mp3");
const tadaSound = new Audio("./sound/tada-fanfare-a-6313.mp3");
const tieSound=new Audio("sound/windows-error-sound-effect-35894.mp3");


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

let ternCount=0;
blockDiv.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(ternCount%2==0){
            item.innerHTML=`${player1.mark}`
            GameBoard.splice(item.value,1,player1.mark);
            
        }else if (ternCount%2!=0){
            item.innerHTML=`${player2.mark}`
            GameBoard.splice(item.value,1,player2.mark);
            
        }
        ternCount++;
        buttonSound.play();
        Game();
    })
})

let Player1win;
let Player2win;

function GameResult() {
    Player1win = (GameBoard[0] == player1.mark && GameBoard[1] == player1.mark && GameBoard[2] == player1.mark) || 
    (GameBoard[3] == player1.mark && GameBoard[4] == player1.mark && GameBoard[5] == player1.mark) || 
    (GameBoard[6] == player1.mark && GameBoard[7] == player1.mark && GameBoard[8] == player1.mark) || 
    (GameBoard[0] == player1.mark && GameBoard[3] == player1.mark && GameBoard[6] == player1.mark) || 
    (GameBoard[1] == player1.mark && GameBoard[4] == player1.mark && GameBoard[7] == player1.mark) ||
    (GameBoard[2] == player1.mark && GameBoard[5] == player1.mark && GameBoard[8] == player1.mark) || 
    (GameBoard[0] == player1.mark && GameBoard[4] == player1.mark && GameBoard[8] == player1.mark) || 
    (GameBoard[2] == player1.mark && GameBoard[4] == player1.mark && GameBoard[6] == player1.mark);  
    //player 2
    Player2win = (GameBoard[0] == player2.mark && GameBoard[1] == player2.mark && GameBoard[2] == player2.mark) || 
    (GameBoard[3] == player2.mark && GameBoard[4] == player2.mark && GameBoard[5] == player2.mark) || 
    (GameBoard[6] == player2.mark && GameBoard[7] == player2.mark && GameBoard[8] == player2.mark) || 
    (GameBoard[0] == player2.mark && GameBoard[3] == player2.mark && GameBoard[6] == player2.mark) || 
    (GameBoard[1] == player2.mark && GameBoard[4] == player2.mark && GameBoard[7] == player2.mark) ||
    (GameBoard[2] == player2.mark && GameBoard[5] == player2.mark && GameBoard[8] == player2.mark) || 
    (GameBoard[0] == player2.mark && GameBoard[4] == player2.mark && GameBoard[8] == player2.mark) || 
    (GameBoard[2] == player2.mark && GameBoard[4] == player2.mark && GameBoard[6] == player2.mark);
}


    function GameWin(){
        setTimeout(() => {
        const playAgain = document.createElement("dialog");
            playAgain.classList.add("playAgain");
            body.appendChild(playAgain);
            playAgain.showModal();
            if (Player1win) {
                playAgain.innerHTML=` Player 1 Winn!!
                <button class='reload'>Play Again</button>`
                tadaSound.play();
            } else if (Player2win) {
                playAgain.innerHTML=` Player 2 Winn!!
                <button class='reload'>Play Again</button>`
                tadaSound.play();
            } else {
                playAgain.innerHTML=` Tie!!
                <button class='reload'>Play Again</button>`
                
            }
            const reloadBtn =  document.querySelector(".reload");
            reloadBtn.addEventListener("click",()=>{
                window.location.reload();
            })
        }, 500);
    }


function Game(){
    GameResult();
    if (Player1win) {
        GameWin();
    }
    if (Player2win) {
        GameWin();
    }
    if (ternCount>=9){
        GameWin();
        tieSound.play();
    }
}
