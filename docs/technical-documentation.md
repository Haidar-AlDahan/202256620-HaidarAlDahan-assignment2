# Technical Documentation – Assignment 1

## Overview

This project is a static personal portfolio website built using:

- HTML5
- CSS3
- JavaScript (Vanilla JS)

No frameworks or backend were used.

---

## Architecture

The project follows a simple separation of concerns:

- `index.html` → Structure and content
- `css/styles.css` → Styling and responsive layout
- `js/script.js` → Interactivity and dynamic behavior

---

## Key Technical Features

### 1. Responsive Design

- CSS Grid for layout structure
- Flexbox for navigation and alignment
- Media queries for tablet and mobile breakpoints

### 2. Theme Toggle

- Uses `data-theme` attribute on `<html>`
- CSS variables control theme colors


### 3. Form Validation

- Client-side validation
- Regex-based email validation
- Real-time input feedback
- Prevents submission if invalid

---

## Compatibility

Tested on:
- Chrome
- Brave

Responsive behavior verified using browser DevTools.

---

## Performance

- No external libraries
- Lightweight and fast initial load
