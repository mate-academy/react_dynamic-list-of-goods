// WRITE TESTS HERE

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  const page = {
    clickBtn(value) {
      return cy.get('button')
        .contains(`${value}`)
        .click()
    }
  };

  it('should have 13 goods', () => {
   page.clickBtn('all');
    cy.get('li')
      .should(($li) => {
      expect($li).to.have.length(13);
    });
  });

  it('should have 5 goods', () => {
    page.clickBtn(5);
    cy.get('li')
      .should(($li) => {
     expect($li).to.have.length(5);
    });
  });

  it('should have red goods', () => {
  page.clickBtn('red');
    cy.get('.goods')
      .should('contain', 'Potato')
      .and('contain', 'Ice cream')
      .and('contain', 'Fish')
      .and('contain', 'Garlic')
      .and('contain', 'Dumplings');
  });

  it ('should be a new request to the server on [all goods] button click', () => {
    cy.intercept('*goods*', cy.spy().as('apiCall'));
    cy.visit('/');
    page.clickBtn('all');
    cy.get('@apiCall')
      .its('callCount')
      .should('equal', 1);
  })

  it ('should be a new request to the server on [first 5 goods] button click', () => {
    cy.intercept('*goods*', cy.spy().as('apiCall'));
    cy.visit('/');
    page.clickBtn(5);
    cy.get('@apiCall')
      .its('callCount')
      .should('equal', 1);
    });

    it ('should be a new request to the server on [red goods] button click', () => {
      cy.intercept('*goods*', cy.spy().as('apiCall'));
      cy.visit('/');
      page.clickBtn('red');
      cy.get('@apiCall')
        .its('callCount')
        .should('equal', 1);
      });
});
