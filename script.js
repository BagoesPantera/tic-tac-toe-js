// DOM
const btnOption = document.querySelectorAll('.button-option')
const popUp = document.querySelector('.popup')
const message = document.getElementById('message')
const btnRestart = document.getElementById('restart')
const btnNewGame = document.getElementById('new-game')

// variable
// x turn first
let xTurn = true
let drawCount = 0

const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];

function winChecker() {
    for(let i of winningPatterns) {
        // console.log(i); // => [0, 3, 6]
        let [ele1, ele2, ele3] = [
            btnOption[i[0]].innerText, // 0
            btnOption[i[1]].innerText, // 3
            btnOption[i[2]].innerText, // 6
        ]
        
        if (ele1 != '' && ele2 != '' && ele3 != '') {
            if (ele1 == ele2 && ele2 == ele3) {
                popUp.classList.remove('hide')
                message.innerHTML = `&#x1F389; <br> ${ele1} Wins`;
            }
        }
    }
}

function draw() {
    popUp.classList.remove('hide')
    message.innerHTML = '&#x1F60E; <br> Draw'
}

btnOption.forEach((element) => {
    element.addEventListener('click', () => {
        if(xTurn){
            xTurn=false
            element.innerHTML='X'
        }else{
            xTurn=true
            element.innerHTML='O' 
        } 
        // disable the element, so you cant click it again
        element.disabled=true
        winChecker()
        drawCount += 1
        if (drawCount == 9) {
            draw()
        }
    })
})

function newGame() {
    btnOption.forEach((element) => {
        element.disabled = false
        element.innerHTML = ''
    })
    xTurn = true;
    drawCount = 0
    popUp.classList.add('hide')
}

btnRestart.addEventListener('click', () => {
    newGame()
})

btnNewGame.addEventListener('click', () => {
    newGame()
})