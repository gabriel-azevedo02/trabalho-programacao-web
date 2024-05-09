const celulas = document.querySelectorAll(".celula");
let checarVez = true;

const JOGADOR_X = "X";
const JOGADOR_O = "O";

const COMBINACOES = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

document.addEventListener("click", (event) => {
    if (event.target.matches(".celula")) {
        play(event.target.id);
    }

});

function play(id) {
    const celula = document.getElementById(id);
    vez = checarVez ? JOGADOR_X : JOGADOR_O;
    celula.textContent = vez;
    celula.classList.add(vez);
    checkWin(vez);
}

function checkWinner(vez) {

    const winner = COMBINACOES.some((comb) => {
        return comb.every((index) => {
         return celulas[index].classList.contains(vez);   

        })
    });
     
    if(winner){
        endGame(vez);
    } else if(checkTie()){
        endGame();
    } else {
        checarVez = !checarVez;
    }
    

   
}