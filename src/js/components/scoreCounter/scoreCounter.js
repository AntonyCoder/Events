import './scoreCounter.css'

export class ScoreCounter {
    constructor() {
        this.score = 0
    }

    renderScore() {
        const body = document.querySelector('body');
        const score = document.createElement('div');

        score.classList.add('score-counter');
        score.textContent = `Total score: ${this.score}`;

        body.insertAdjacentElement("afterbegin", score);
    }

    changeScore(point) {
        this.score += point;
        const score = document.querySelector('.score-counter');
        score.textContent = `Total score: ${this.score}`;
    }
}