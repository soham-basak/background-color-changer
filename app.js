const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red', 'green', 'blue', 'yellow', 'pink', 'violet'];

body.style.backgroundColor = 'red';

button.addEventListener('click', colorChange);

function colorChange() {
    const colorIndex = parseInt(Math.random() * color.length);

    body.style.backgroundColor = color[colorIndex];
}