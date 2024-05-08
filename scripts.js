const celulas = document.querySelectorAll(".celula");
let checarTurno = true;

const JOGADOR_X = "X";
const JOGADOR_O = "O";

document.addEventListener("click", (event) => {
    if (event.target.matches(".celula")) {
        play(event.target.id);
    }

});

function play(id) {
    const celula = document.getElementById(id);
    turno = checarTurno ? JOGADOR_X : JOGADOR_O;
    celula.textContent = turno;
    checarTurno = !checarTurno;
    checkWin(turno);
}

function checkWin() {

}