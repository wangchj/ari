# Ari

Ari is an application for practicing mental arithmetics written in React and
Redux.

## Getting Started

To start the app, run the following commands:

```
npm install
npm run server
```

The app can be viewed at http://localhost:8080.

## Design

Operations

  - ADD
    - Easy:   1 digit + 2 digits
    - Medium: 2 digits + 2 digits
    - Hard:   3 digits + 2 digits
  - SUB
    - Easy:   2 digits - 1 digit
    - Medium: 2 digits - 2 digits
    - Hard:   3 digits - 3 digits
    - Special mode: borrow
  - MUL
    - Easy:   1 digit * 2 digits (1 - 15)
    - Medium: 2 digits * 2 digits
    - Hard:   3 digits * 3 digits
  - DIV
    - This is reverse of MUL
  - MIX

Presentation
  - VER
  - HOR
  - AUD
  - MIX

Options
  - How many questions, default 20
