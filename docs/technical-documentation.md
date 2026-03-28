# Technical Documentation – Assignment 2

## Overview

This project is a responsive personal portfolio website built using:

- HTML5
- CSS3
- JavaScript (Vanilla JS)

No frameworks or backend were used. All functionality is implemented on the client side.

---

## Architecture

The project follows a clear separation of concerns:

- `index.html` → Structure and semantic layout
- `css/styles.css` → Styling, layout, responsiveness, and animations
- `js/script.js` → Interactivity, DOM manipulation, and state handling

---

## Key Technical Features

### 1. Responsive Design

- CSS Grid used for layout (projects, sections)
- Flexbox used for navigation and alignment
- Media queries for tablet and mobile breakpoints
- Mobile navigation menu with toggle behavior

---

### 2. Theme Toggle (Dark / Light Mode)

- Uses `data-theme` attribute on `<html>`
- CSS variables define color schemes
- JavaScript updates theme dynamically
- User preference is stored in `localStorage`

---

### 3. Project Filtering

- Each project card includes `data-category` attributes
- Filter buttons update visible elements dynamically
- Uses DOM manipulation to show/hide projects
- Active filter button is visually highlighted

---

### 4. Project Search

- Search input listens to user typing (`input` event)
- Matches keywords using `data-title` attributes
- Filtering and search can be combined
- Results update instantly without page reload

---

### 5. Data Persistence (localStorage)

- Stores:
  - Selected theme
  - Selected filter
  - Search input value
- Restores state automatically on page load

---

### 6. User Feedback System

- Displays dynamic messages:
  - Number of matching projects
  - “No projects found” state
- Contact form shows validation errors and submission status

---

### 7. Form Validation

- Client-side validation only
- Regex-based email validation
- Real-time validation on input
- Prevents submission if inputs are invalid

---

### 8. Animations and Transitions

- CSS transitions applied to:
  - Project cards (hover + filtering)
  - Buttons and UI elements
- Smooth fade/slide effect when filtering projects

---

## Compatibility

Tested on:
- Google Chrome
- Brave

Responsive behavior verified using browser DevTools.

---

## Performance

- No external libraries or frameworks
- Lightweight assets
- Fast load time due to static structure

---

## Notes

- The project is fully front-end (no backend integration)
- Form submission is simulated and does not send data