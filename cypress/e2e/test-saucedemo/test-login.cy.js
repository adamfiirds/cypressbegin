describe('template spec', () => {
  it('login-success', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include','https://www.saucedemo.com/inventory.html')
  })
  it('login-failed with no username', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
  })
  it('login-failed with no password', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Password is required')
  })
})