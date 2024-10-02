//your JS code here. If required.
let angle = 0; // Initial angle

function rotateLine() {
    angle = (angle + 2) % 360; // Increase angle by 2 degrees and keep it within 0-359 degrees
    const line = document.getElementById('line');
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Rotate the line
}

// Rotate the line every 20 milliseconds
setInterval(rotateLine, 20);
