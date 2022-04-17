// WRITE TESTS HERE

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });
  it('should has 13 goods', () => {
    cy.get('button').contains('all').click()
    cy.get('li')
    .should(($li) => {
      expect($li).to.have.length(13)
      return 'a'
    });
  });

  it('should has 5 goods', () => {
    cy.get('button').contains(5).click()
    cy.get('li')
    .should(($li) => {
      expect($li).to.have.length(5)
      return 'a'
    });
  });

  it('should has red goods', () => {
    cy.get('button').contains('red').click()
    cy.get('.goods').should('contain', 'Potato')
    cy.get('.goods').should('contain', 'Ice cream')
    cy.get('.goods').should('contain', 'Fish')
    cy.get('.goods').should('contain', 'Garlic')
    cy.get('.goods').should('contain', 'Dumplings')
    
  })
});
