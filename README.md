# Ferocia Calculator

A simple compound interest calculator built with **Next.js**, **TypeScript**, and **Material UI**.

## Tech Stack

- **Framework**: Next.js (App Router, TypeScript)
- **UI**: MUI (Material UI)
- **Testing**: Jest, React Testing Library

---

## How It Works

The app uses the compound interest formula:

A = P × (1 + r/n)^(nt)

Where:
- **A** = Final amount
- **P** = Start amount
- **r** = Annual interest rate (decimal)
- **n** = Number of compounding periods per year (based on frequency)
- **t** = Term in years

If "Interest Paid" is set to **maturity**, the calculator uses **simple interest** (not compounding during the term).

---

## Getting Started

Follow the steps below to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/jose-guerrerog/ferocia-calculator.git
cd ferocia-calculator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Running Tests

```bash
npm test
```

Tests are located in `src/__tests__/` and cover both the interest calculation logic and UI rendering.

---

## Deployed Version

You can try the live version here:  
👉 [https://ferocia-calculator.vercel.app](https://ferocia-calculator.vercel.app)