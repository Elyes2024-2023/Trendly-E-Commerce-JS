describe('Voice Search Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display voice search button', () => {
    cy.get('[data-testid="voice-search-button"]').should('be.visible')
  })

  it('should request microphone permission when clicking voice search', () => {
    cy.window().then((win) => {
      cy.stub(win.navigator.mediaDevices, 'getUserMedia').resolves({})
    })
    cy.get('[data-testid="voice-search-button"]').click()
    cy.get('[data-testid="voice-search-modal"]').should('be.visible')
    cy.get('[data-testid="voice-search-status"]').should('contain.text', 'Listening...')
  })

  it('should handle microphone permission denial', () => {
    cy.window().then((win) => {
      cy.stub(win.navigator.mediaDevices, 'getUserMedia').rejects(new Error('Permission denied'))
    })
    cy.get('[data-testid="voice-search-button"]').click()
    cy.get('[data-testid="voice-search-error"]').should('contain.text', 'Microphone access denied')
  })

  it('should process voice input and perform search', () => {
    cy.window().then((win) => {
      cy.stub(win.navigator.mediaDevices, 'getUserMedia').resolves({})
      // Simulate speech recognition result
      const speechResult = { results: [[{ transcript: 'blue shirt' }]] }
      cy.stub(win, 'SpeechRecognition').returns({
        start: () => {},
        onresult: (event: any) => event(speechResult)
      })
    })
    cy.get('[data-testid="voice-search-button"]').click()
    cy.url().should('include', 'search?q=blue%20shirt')
    cy.get('[data-testid="search-results"]').should('be.visible')
  })
})

// © ELYES 2024-2025. All rights reserved.
// Done by ELYES 