describe('Product Tests', () => {
  beforeEach(() => {
    cy.visit('/products')
  })

  it('should display product listing page', () => {
    cy.get('[data-testid="product-grid"]').should('be.visible')
    cy.get('[data-testid="product-card"]').should('have.length.at.least', 1)
  })

  it('should filter products by category', () => {
    cy.get('[data-testid="category-filter"]').click()
    cy.get('[data-testid="category-option"]').first().click()
    cy.get('[data-testid="product-card"]').should('have.length.at.least', 1)
  })

  it('should sort products by price', () => {
    cy.get('[data-testid="sort-select"]').select('price-asc')
    cy.get('[data-testid="product-price"]').then($prices => {
      const prices = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')))
      expect(prices).to.equal(prices.sort((a, b) => a - b))
    })
  })

  it('should navigate to product details page', () => {
    cy.get('[data-testid="product-card"]').first().click()
    cy.url().should('include', '/products/')
    cy.get('[data-testid="product-title"]').should('be.visible')
    cy.get('[data-testid="product-price"]').should('be.visible')
    cy.get('[data-testid="product-description"]').should('be.visible')
  })

  it('should add product to cart from listing page', () => {
    cy.get('[data-testid="add-to-cart-button"]').first().click()
    cy.get('[data-testid="cart-count"]').should('have.text', '1')
  })
})

// © ELYES 2024-2025. All rights reserved.
// Done by ELYES 