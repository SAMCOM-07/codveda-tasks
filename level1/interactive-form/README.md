# Interactive Registration Form

A responsive client-side registration form built with **HTML**, **CSS**, and **Vanilla JavaScript**. Features real-time validation, a dynamic password strength indicator, and toast notifications — all without external dependencies.

---

## Features

- **Required Field Validation** — All fields are validated on submit with inline error messages
- **Email Format Check** — Regex-based validation ensures a properly formatted email address
- **Phone Number Validation** — Accepts exactly 11 digits with a max-length constraint on the input
- **Password Strength Indicator** — Real-time strength bar and label (Weak / Medium / Strong) based on length, casing, digits, and special characters
- **Confirm Password Match** — Validates that both password fields are identical
- **Minimum Password Length** — Enforces a 6-character minimum
- **Success Toast** — Animated slide-in alert on successful submission with 3-second auto-dismiss
- **Form Reset** — Clears all fields and resets the strength indicator after successful submission
- **Clean, Responsive UI** — Centered card layout with focus states and hover/active button animations

---

## Tech Stack

- **HTML5** — Semantic form structure with labeled inputs
- **CSS3** — Grid layout, box-shadow card, transitions, and nested selector styling
- **JavaScript (ES6)** — DOM manipulation, event handling, regex validation, and dynamic class toggling

---

## Project Structure

```
interactive-form/
├── index.html      # Registration form markup with alert banner
├── styles.css      # Card layout, strength bar styles, and responsive design
├── script.js       # Validation logic, password strength checker, and form handlers
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
cd level1/interactive-form
```

### 3. Open in your browser

Open `index.html` directly in any modern browser — no build tools or dependencies required.

---

## How It Works

1. On form submit, `preventDefault()` blocks the default browser behavior
2. Each field is validated individually with `setError()` / `setSuccess()` helper functions
3. Inline error messages appear below invalid fields and clear on correction
4. The password field listens for `input` events to update the strength bar in real time:
   - **Weak** (red, 33%) — 2 or fewer criteria met
   - **Medium** (orange, 66%) — 3–4 criteria met
   - **Strong** (green, 100%) — All 5 criteria met (length ≥ 8, lowercase, uppercase, digit, special character)
5. If all error spans are empty after validation, the success alert slides in, the form resets, and the strength indicator clears

---

## Validation Rules

| Field              | Rule                                              |
| ------------------ | ------------------------------------------------- |
| Full Name          | Required — cannot be empty                        |
| Email Address      | Required — must match a valid email pattern        |
| Phone Number       | Required — must be exactly 11 digits               |
| Password           | Must be at least 6 characters                      |
| Confirm Password   | Must match the Password field                      |

---

## Learning Objectives

- DOM selection and manipulation (`getElementById`, `querySelector`)
- Form event handling (`submit`, `input`)
- Client-side validation with regex (`isValidEmail`, `isValidPhone`)
- Dynamic class toggling for visual feedback
- Reusable `setError()` / `setSuccess()` patterns for scalable form validation

---

## Author

**Samuel Shonde** — Frontend Developer (Intern)

---

## License

This project is part of the **Codveda Internship** program and is open-source for learning and practice.