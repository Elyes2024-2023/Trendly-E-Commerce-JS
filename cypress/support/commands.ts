/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to login with email and password
     * @example cy.login('user@example.com', 'password123')
     */
    login(email: string, password: string): Chainable<void>

    /**
     * Custom command to logout
     * @example cy.logout()
     */
    logout(): Chainable<void>
  }
}

// Custom commands for Cypress

// Login command
Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/login')
  cy.get('[data-testid="email-input"]').type(email)
  cy.get('[data-testid="password-input"]').type(password)
  cy.get('[data-testid="login-button"]').click()
  cy.url().should('not.include', '/login')
})

// Logout command
Cypress.Commands.add('logout', () => {
  cy.get('[data-testid="user-menu"]').click()
  cy.get('[data-testid="logout-button"]').click()
})

// Add to cart command
Cypress.Commands.add('addToCart', () => {
  cy.visit('/products')
  cy.get('[data-testid="product-card"]').first().within(() => {
    cy.get('[data-testid="add-to-cart-button"]').click()
  })
  cy.get('[data-testid="cart-count"]').should('have.text', '1')
})

// Remove from cart command
Cypress.Commands.add('removeFromCart', () => {
  cy.visit('/cart')
  cy.get('[data-testid="cart-item"]').first().within(() => {
    cy.get('[data-testid="remove-from-cart-button"]').click()
  })
  cy.get('[data-testid="cart-empty"]').should('be.visible')
})

// Checkout command
Cypress.Commands.add('checkout', () => {
  cy.visit('/cart')
  cy.get('[data-testid="checkout-button"]').click()
  cy.url().should('include', '/checkout')
  cy.get('[data-testid="shipping-form"]').should('be.visible')
  cy.get('[data-testid="payment-form"]').should('be.visible')
  cy.get('[data-testid="place-order-button"]').click()
  cy.url().should('include', '/order-confirmation')
})

// © ELYES 2024-2025. All rights reserved.
// Done by ELYES 