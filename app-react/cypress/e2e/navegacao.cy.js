describe('Navegação e tecnologias', () => {
  it('navega para tecnologias e interage com o laboratório', () => {
    cy.visit('/')

    cy.contains('a', 'Tecnologias').click()
    cy.url().should('include', '/tecnologias')

    cy.contains('Laboratório de tecnologias').should('be.visible')

    cy.contains('Mostrar tecnologias').click()
    cy.contains('HTML').should('be.visible')

    cy.contains('Adicionar Git e GitHub').click()
    cy.contains('Tecnologias cadastradas: 5').should('be.visible')
    cy.contains('Git e GitHub').should('be.visible')
  })
})