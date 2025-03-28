import './cursor.css';

export class Cursor {

    renderCursor() {
        const cursor = document.createElement('div');
        const container = document.querySelector('.container');
        container.appendChild(cursor);
        cursor.classList.add('custom-cursor');

        container.addEventListener('mousemove', (e) => {

            cursor.style.left = `${e.pageX - 75}px`;
            cursor.style.top = `${e.pageY - 50}px`;
        })
    }
}