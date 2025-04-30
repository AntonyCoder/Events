import './cursor.css';

export class Cursor {

    renderCursor() {
        const cursor = document.createElement('div');
        const container = document.querySelector('.container');
        container.appendChild(cursor);
        cursor.classList.add('custom-cursor');

        container.addEventListener('mousemove', (e) => {

            cursor.style.left = `${e.clientX - 75}px`;
            cursor.style.top = `${e.clientY - 50}px`;
        })
    }
}