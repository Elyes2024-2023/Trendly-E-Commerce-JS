describe('Search Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display search input', () => {
    cy.get('[data-testid="search-input"]').should('be.visible')
  })

  it('should search for products', () => {
    const searchTerm = 'shirt'
    cy.get('[data-testid="search-input"]').type(searchTerm)
    cy.get('[data-testid="search-button"]').click()
    cy.url().should('include', `search?q=${searchTerm}`)
    cy.get('[data-testid="search-results"]').should('be.visible')
    cy.get('[data-testid="product-card"]').should('have.length.at.least', 1)
  })

  it('should show no results message for invalid search', () => {
    const invalidSearch = 'xyzabc123'
    cy.get('[data-testid="search-input"]').type(invalidSearch)
    cy.get('[data-testid="search-button"]').click()
    cy.get('[data-testid="no-results"]').should('be.visible')
    cy.get('[data-testid="no-results"]').should('contain.text', 'No results found')
  })

  it('should show search suggestions while typing', () => {
    cy.get('[data-testid="search-input"]').type('sh')
    cy.get('[data-testid="search-suggestions"]').should('be.visible')
    cy.get('[data-testid="suggestion-item"]').should('have.length.at.least', 1)
  })

  it('should clear search input', () => {
    cy.get('[data-testid="search-input"]').type('test')
    cy.get('[data-testid="clear-search"]').click()
    cy.get('[data-testid="search-input"]').should('have.value', '')
  })
})

// © ELYES 2024-2025. All rights reserved.
// Done by ELYES 