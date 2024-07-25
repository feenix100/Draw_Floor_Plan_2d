---

# 2D Floor Plan Drawing Web App

## Overview

This web app allows users to draw a 2D floor plan by entering the dimensions of rooms, closets, and doors. The app automatically adjusts the drawing based on the input values and ensures that the dimensions fit within 75% of the window size. It provides a simple and interactive way to visualize floor plans directly in the browser.

## Features

- **Dynamic Drawing**: Automatically updates the floor plan based on the dimensions entered by the user.
- **Responsive Canvas**: The drawing area adjusts to fit the entire window, with constraints to ensure the drawing does not exceed 75% of the window size.
- **Real-Time Updates**: The floor plan redraws in real-time as dimensions are entered or changed.

## How to Use

1. **Enter Dimensions**:
   - Input the dimensions for different elements like rooms, closets, and doors.
   - The dimensions are specified in pixels and should be positive numbers.

2. **View the Floor Plan**:
   - The app will automatically draw the floor plan on the canvas based on the entered dimensions.
   - The drawing will be centered and scaled to fit within 75% of the window size.

3. **Adjust Dimensions**:
   - As you change the dimensions in the input fields, the floor plan will automatically update to reflect the new values.

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2D Floor Plan Drawer</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        #container {
            position: absolute;
            top: 20px;
            left: 20px;
            z-index: 1;
        }
        #floorPlan {
            background-color: #f0f0f0;
            display: block;
        }
        input {
            margin: 5px;
        }
    </style>
</head>
<body>
    <div id="container">
        <h1>2D Floor Plan Drawer</h1>
        <div>
            <label for="width">Width (px):</label>
            <input type="number" id="width" min="1">
            <label for="height">Height (px):</label>
            <input type="number" id="height" min="1">
        </div>
    </div>
    <canvas id="floorPlan"></canvas>
    <script src="app.js"></script>
</body>
</html>
```

## JavaScript Functionality

```javascript
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
```

## How It Works

1. **Canvas Initialization**: The canvas is resized to fill the entire window, and the drawing is adjusted accordingly.
2. **Drawing Function**: The `drawFloorPlan` function calculates the maximum allowed dimensions (75% of the canvas size) and constrains the user inputs to fit within these bounds. It then draws a rectangle representing the floor plan.
3. **Real-Time Updates**: Input fields trigger the drawing function on every change, ensuring the floor plan is updated immediately as dimensions are adjusted.
4. **Responsive Design**: The canvas and drawing automatically adjust when the window size changes.

## Future Enhancements

- **Multiple Rooms**: Support for drawing multiple rooms, closets, and doors.
- **Interactive Elements**: Allow users to drag and drop elements on the floor plan.
- **Custom Styling**: Enable users to customize colors and line styles.

---

