import './board.css'
import { ScoreCounter } from '../scoreCounter/scoreCounter';
const scoreCounter = new ScoreCounter();

export class Board {
    constructor() {
        this.body = document.querySelector('body');
        this.container = document.createElement('div');
        this.onGoblinCellClick = this.onGoblinCellClick.bind(this);

        this.goblinCounter = 0;
    }

    renderBoard() {

        this.container.classList.add('container');

        this.body.appendChild(this.container);

        for (let i = 0; i < 16; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            this.container.appendChild(cell);
        }

        this.showGoblin();
        scoreCounter.renderScore()

    }

    getRandomInt() {
        return Math.floor(Math.random() * 15);
    }

    showGoblin() {
        const cells = document.querySelectorAll('.cell');
        if (cells) {
            const position = this.getRandomInt();
            cells[position].classList.add('cell-active');

            setInterval(() => {
                const cellActive = document.querySelector('.cell-active');
                if (cellActive) {
                    cellActive.classList.remove('cell-active');
                    const newPosition = this.getRandomInt();
                    cells[newPosition].classList.add('cell-active');
                    this.goblinCounter++;
                    this.body.addEventListener('click', this.onGoblinCellClick);
                    this.gameOver();
                }
            }, 1000)
        }

    }

    onGoblinCellClick(e) {
        if (e.target.classList.contains('cell-active')) {
            scoreCounter.changeScore(1);
            this.body.removeEventListener('click', this.onGoblinCellClick);
        }
    }

    gameOver() {
        if (this.goblinCounter - scoreCounter.score > 5) {
            this.container.classList.add('container-disabled')
            this.container.textContent = "Game Over!"
        }
    }
}