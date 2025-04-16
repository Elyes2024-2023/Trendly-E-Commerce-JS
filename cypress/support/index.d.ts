/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to login with email and password
     * @example cy.login('test@example.com', 'password123')
     */
    login(email: string, password: string): Chainable<void>

    /**
     * Custom command to add a product to cart
     * @example cy.addToCart()
     */
    addToCart(): Chainable<void>

    /**
     * Custom command to remove a product from cart
     * @example cy.removeFromCart()
     */
    removeFromCart(): Chainable<void>
  }
}

// © ELYES 2024-2025. All rights reserved.
// Done by ELYES 