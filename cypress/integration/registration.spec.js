describe('Testing registration and login', () => {
  it('Can register a new account', () => {
    cy.visit('http://localhost:9876/register');
    cy.get('[data-cy=name-registration]').type('Jimmy Pesto');
    cy.get('[data-cy=email-registration]').type('test1@test.com');
    cy.get('[data-cy=password-registration]').type('Passoword123');
    cy.get('[data-cy=register').click();
    cy.url().should('include', '/home/');
  });

  it('Can login to registered account', () => {
    cy.visit('http://localhost:9876/');
    cy.get('[data-cy=email-login]').type('test1@test.com');
    cy.get('[data-cy=password-login]').type('Passoword123');
    cy.get('[data-cy=login-button').click();
    cy.url().should('include', '/home/');
  });
});
