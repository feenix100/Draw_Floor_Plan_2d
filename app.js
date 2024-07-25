function resizeCanvas() {
    const canvas = document.getElementById('floorPlan');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawFloorPlan(); // Redraw the floor plan when the canvas is resized
}

function drawFloorPlan() {
    const canvas = document.getElementById('floorPlan');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate maximum dimensions as 75% of the canvas size
    const maxWidth = canvas.width * 0.75;
    const maxHeight = canvas.height * 0.75;

    // Get user inputs
    const inputWidth = parseInt(document.getElementById('width').value, 10);
    const inputHeight = parseInt(document.getElementById('height').value, 10);

    // Constrain dimensions to fit within 75% of canvas size
    const width = isNaN(inputWidth) ? maxWidth : Math.min(inputWidth, maxWidth);
    const height = isNaN(inputHeight) ? maxHeight : Math.min(inputHeight, maxHeight);

    // Draw the floor plan based on the constrained dimensions
    ctx.beginPath();
    ctx.rect((canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Update the drawing whenever the input fields change
document.getElementById('width').addEventListener('input', drawFloorPlan);
document.getElementById('height').addEventListener('input', drawFloorPlan);

// Resize the canvas when the window is resized
window.addEventListener('resize', resizeCanvas);

// Initial canvas size and drawing
resizeCanvas();
