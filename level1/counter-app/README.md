# Counter App

A clean, interactive counter application built with **HTML**, **CSS**, and **Vanilla JavaScript**. This project demonstrates core DOM manipulation concepts, event handling, and dynamic UI updates.

---

## Features

- **Increment / Decrement** — Adjust the counter by +1 or -1
- **Reset** — Restore the counter to zero instantly
- **Non-Negative Constraint** — The decrement button is automatically disabled at zero, preventing negative values
- **Dynamic Color Feedback** — Counter text turns green for positive values and black at zero
- **Button Animations** — Hover opacity transition and scale-down effect on click

---

## Tech Stack

- **HTML5** — Semantic markup and structure
- **CSS3** — Flexbox layout, transitions, and responsive card design
- **JavaScript (ES6)** — DOM selection, event listeners, and conditional styling

---

## Project Structure

```
counter-app/
├── index.html      # App markup with counter display and control buttons
├── styles.css      # Layout, theming, and button animations
├── script.js       # Counter logic, event handling, and dynamic styling
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```bash
git https://github.com/SAMCOM-07/codveda-tasks.git
```

### 2. Navigate into the project folder

```bash
cd level1/counter-app
```

### 3. Open in your browser

Open `index.html` directly in any modern browser — no build tools or dependencies required.

---

## How It Works

1. DOM elements are selected via `getElementById`
2. Event listeners are attached to the Increment (+), Decrement (-), and Reset buttons
3. A shared `updateCounter()` function syncs the display after every action
4. The counter text color updates conditionally — **green** for positive values, **black** at zero
5. The decrement button is disabled when the count reaches zero to enforce a non-negative constraint

---

## Learning Objectives

- DOM selection and manipulation (`getElementById`, `textContent`)
- Event handling with `addEventListener`
- Conditional logic for dynamic styling
- Disabling/enabling interactive elements programmatically
- CSS transitions and transform animations

---

## Author

**Samuel Shonde** — Frontend Developer (Intern)

---

## License

This project is part of the **Codveda Internship** program and is open-source for learning and practice.