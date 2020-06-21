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
    - 1: 1 digit + 1 digits
    - 2: 1 digit + 2 digits
    - 3: 2 digits + 2 digits
    - 4: 3 digits + 2 digits
  - SUB
    - 1: 1 digits - 1 digit
    - 2: 2 digits - 1 digits
    - 3: 2 digits - 2 digits
    - 4: 3 digits - 3 digits
  - MUL
    - 1: Mostly 1 digit * 1 digits (1 - 12)
    - 2: Mostly 1 digit * 2 digits
    - 3: 2 digits * 2 digits (11 - 19)
    - 4: 2 digits * 2 digits (15 - 99)
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
