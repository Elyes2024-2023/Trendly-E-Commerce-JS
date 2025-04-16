describe('Checkout Tests', () => {
  beforeEach(() => {
    cy.login('test@example.com', 'password123')
    cy.addToCart() // Custom command to add a product to cart
    cy.visit('/checkout')
  })

  it('should display checkout form', () => {
    cy.get('[data-testid="checkout-form"]').should('be.visible')
    cy.get('[data-testid="shipping-address"]').should('be.visible')
    cy.get('[data-testid="payment-method"]').should('be.visible')
  })

  it('should validate required fields', () => {
    cy.get('[data-testid="submit-order"]').click()
    cy.get('[data-testid="name-error"]').should('be.visible')
    cy.get('[data-testid="email-error"]').should('be.visible')
    cy.get('[data-testid="address-error"]').should('be.visible')
    cy.get('[data-testid="payment-error"]').should('be.visible')
  })

  it('should fill shipping information', () => {
    cy.get('[data-testid="name-input"]').type('John Doe')
    cy.get('[data-testid="email-input"]').type('john@example.com')
    cy.get('[data-testid="address-input"]').type('123 Main St')
    cy.get('[data-testid="city-input"]').type('New York')
    cy.get('[data-testid="state-input"]').type('NY')
    cy.get('[data-testid="zip-input"]').type('10001')
    cy.get('[data-testid="phone-input"]').type('1234567890')
  })

  it('should select payment method', () => {
    cy.get('[data-testid="credit-card-option"]').click()
    cy.get('[data-testid="card-number"]').type('4242424242424242')
    cy.get('[data-testid="card-expiry"]').type('1225')
    cy.get('[data-testid="card-cvc"]').type('123')
  })

  it('should complete order successfully', () => {
    // Fill shipping info
    cy.get('[data-testid="name-input"]').type('John Doe')
    cy.get('[data-testid="email-input"]').type('john@example.com')
    cy.get('[data-testid="address-input"]').type('123 Main St')
    cy.get('[data-testid="city-input"]').type('New York')
    cy.get('[data-testid="state-input"]').type('NY')
    cy.get('[data-testid="zip-input"]').type('10001')
    cy.get('[data-testid="phone-input"]').type('1234567890')

    // Fill payment info
    cy.get('[data-testid="credit-card-option"]').click()
    cy.get('[data-testid="card-number"]').type('4242424242424242')
    cy.get('[data-testid="card-expiry"]').type('1225')
    cy.get('[data-testid="card-cvc"]').type('123')

    // Submit order
    cy.get('[data-testid="submit-order"]').click()
    cy.url().should('include', '/order-confirmation')
    cy.get('[data-testid="order-success"]').should('be.visible')
    cy.get('[data-testid="order-number"]').should('exist')
  })
})

// © ELYES 2024-2025. All rights reserved.
// Done by ELYES 