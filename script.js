console.log("Welcome to Tic Tac Toe");

let music = new Audio("mp3&gif/music.mp3");
let audioTurn = new Audio("mp3&gif/ting.mp3");
let gameOver = new Audio("mp3&gif/gameover.mp3");
let turn = "X";
let isGameOver = false;

// For change Turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// For Check for a win
const checkWin = () => {

    let boxText = document.getElementsByClassName('box-text');

    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== '')) {
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won";
            isGameOver = true;
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = '200px';
            // document.querySelector('.line').style.width = "22vw";
            // document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vh) rotate(${e[5]}deg)`;
        }
    })
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.box-text');
    element.addEventListener('click', (e) => {
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });

});

// Reset Button
reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.box-text');
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    });
    turn = 'X';
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = '0px'
    // document.querySelector('.line').style.width = "0vw";
});