# Playwright + Cucumber BDD Framework

A Behavior-Driven (BDD) test automation framework using **Playwright**, **TypeScript**, and **Cucumber**.  
Supports Gherkin feature files, page object models, hooks, and reusable step definitions.

## 📁 Project Structure

features/        # Gherkin .feature files
steps/           # Step definitions
pages/           # Page Object Models
support/         # Hooks, World, utilities
playwright.config.ts
cucumber.mjs     # Cucumber runner config


## 🚀 Running Tests

Install dependencies:

npm install

Run all tests:

npm test

Run with UI:

npm run test:headed


## 🧪 Example

See `features/example.feature` and `steps/example.steps.ts` for a working sample scenario.

---

This project is part of my SDET portfolio demonstrating BDD-style automation with Playwright.
