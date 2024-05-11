const celulas = document.querySelectorAll(".celula");
let checarVez = true;

const JOGADOR_X = "X";
const JOGADOR_O = "O";

const COMBINACOES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
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
    checkWinner(vez);
}

function checkWinner(vez) {
    const winner = COMBINACOES.some((comb) => {
        return comb.every((index) => {
            return celulas[index].classList.contains(vez);
        })
    });

    if (winner) {
        endGame(vez);
    } else if (checkTie()) {
        endGame();
    } else {
        checarVez = !checarVez;
    }
}

function checkTie() {
    let x = 0;
    let o = 0;

    for (let index = 0; index < celulas.length; index++) {
        if (celulas[index].classList.contains(JOGADOR_X)) {
            x++;
        }
        if (celulas[index].classList.contains(JOGADOR_O)) {
            o++;
        }
    }

    return x + o === 9 ? true : false;
}

function endGame(vencedor = null) {
    const telaEscura = document.getElementById("tela-escura");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    let mensagem = null;

    telaEscura.style.display = "block";
    telaEscura.appendChild(h2);
    telaEscura.appendChild(h3);
    if (vencedor) {
        h2.innerHTML = ` Parabéns! Player<span>${vencedor}</span> venceu`;
    } else {
        h2.innerHTML = "Que jogão...Empatou";
    }

    let contador = 3;
    setInterval(() => {
        h3.innerHTML = `Reiniciando em ${contador--}`;

    }, 1000);

    setTimeout(() => location.reload(), 4000);
}
