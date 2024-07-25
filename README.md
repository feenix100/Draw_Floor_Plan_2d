---

# 2D Floor Plan Generator Javascript Web App

## Overview

This web app allows users to draw a 2D floor plan of a house or building. Click and drag the mouse to draw a square. It provides a simple and interactive way to visualize floor plans directly in the browser.

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

