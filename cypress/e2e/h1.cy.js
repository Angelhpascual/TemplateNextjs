/// <reference types="cypress" />

describe('h1 test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the correct text', () => {
    cy.get('h1').should(
      'have.text',
      '🚀 My Eslint, Prettier, Husky and Tailwind Template 🚀',
    )
  })
})
