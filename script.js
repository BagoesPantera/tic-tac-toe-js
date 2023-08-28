// DOM
const btnOption = document.querySelectorAll('.button-option')

// x turn first
let xTurn = true

console.log(btnOption);

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
    })
})