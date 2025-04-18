const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function drawSquare() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = 50;
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FF9E33'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    ctx.fillStyle = randomColor;
    ctx.fillRect(x, y, size, size);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}