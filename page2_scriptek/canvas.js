const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Négyzet rajzolása
function drawSquare() {
    // Véletlenszerű pozíciók és színek
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = 50; // Négyzet mérete
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FF9E33'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Négyzet rajzolása
    ctx.fillStyle = randomColor;
    ctx.fillRect(x, y, size, size);
}

// Vászon törlése
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}