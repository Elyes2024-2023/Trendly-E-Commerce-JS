/// <reference types="cypress" />

describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to login page', () => {
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('include', '/login');
  });

  it('should show validation errors for empty form', () => {
    cy.visit('/login');
    cy.get('button[type="submit"]').click();
    cy.get('[data-testid="email-error"]').should('be.visible');
    cy.get('[data-testid="password-error"]').should('be.visible');
  });

  it('should show validation error for invalid email', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.get('[data-testid="email-error"]').should('be.visible');
  });

  it('should login successfully with valid credentials', () => {
    cy.login('user@trendly.com', 'user123');
    cy.get('[data-testid="user-menu"]').should('be.visible');
  });

  it('should show error message for invalid credentials', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('wrong@example.com');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    cy.get('[data-testid="login-error"]').should('be.visible');
  });

  it('should logout successfully', () => {
    cy.login('user@trendly.com', 'user123');
    cy.logout();
    cy.get('[data-testid="login-button"]').should('be.visible');
  });

  it('should redirect to dashboard after login', () => {
    cy.login('user@trendly.com', 'user123');
    cy.url().should('include', '/dashboard');
  });

  it('should remember user session', () => {
    cy.login('user@trendly.com', 'user123');
    cy.reload();
    cy.get('[data-testid="user-menu"]').should('be.visible');
  });
}); 