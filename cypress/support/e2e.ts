/// <reference types="cypress" />

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests from command log
const app = window.top;
if (app) {
  app.document.addEventListener('DOMContentLoaded', () => {
    const style = app.document.createElement('style');
    style.innerHTML = `
      .command-name-request,
      .command-name-xhr {
        display: none;
      }
    `;
    app.document.head.appendChild(style);
  });
}

// © ELYES 2024-2025. All rights reserved.
// Done by ELYES

// Prevent TypeScript errors when accessing the "cy" object
declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom commands here
      login(email: string, password: string): Chainable<void>;
      logout(): Chainable<void>;
      addToCart(): Chainable<void>;
      removeFromCart(): Chainable<void>;
      checkout(): Chainable<void>;
    }
  }
}

// Prevent uncaught exception from failing tests
Cypress.on('uncaught:exception', (err: Error) => {
  // returning false here prevents Cypress from failing the test
  console.error('Uncaught exception:', err);
  return false;
});

// Prevent unhandled promise rejection from failing tests
Cypress.on('unhandled:rejection', (err: Error) => {
  // returning false here prevents Cypress from failing the test
  console.error('Unhandled rejection:', err);
  return false;
}); 