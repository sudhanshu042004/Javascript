// test 
let x = (a) => {
    console.log(a);
}

const GameBoard = ["", "", "", "", "", "", "", "", ""];
function player(selection) {
    return { selection };
}

// get player selection by dialog
const dialog = document.querySelector("dialog");
const dialogBtn = document.querySelectorAll(".dialog-btn");
const btnX = document.querySelector(".Xbtn");
const btnY = document.querySelector(".Ybtn");
const showSelectionDiv = document.querySelector(".showSelection");
dialog.showModal();
dialogBtn.forEach((item) => {
    item.addEventListener("click", () => {
        dialog.close();
        let choice = item.value;
        let choice2;
        if (choice == "X") {
            choice2 = "Y";
        } else {
            choice2 = "X";
        }
        const player1 = player(choice);
        const player2 = player(choice2);
        showSelectionDiv.innerHTML = `<ul> 
        <li> Player 1: ${player1.selection}</li>
        <li>player 2: ${player2.selection}</li> </ul >`
    })
})


