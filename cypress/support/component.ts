// Import commands.js using ES2015 syntax:
import './commands'

// Import global styles
import '../../styles/globals.css'

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

// Prevent TypeScript errors when accessing the "cy" object
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      // Add custom commands here
      login(email: string, password: string): Chainable<void>
      logout(): Chainable<void>
    }
  }
}

// © ELYES 2024-2025. All rights reserved.
// Done by ELYES 