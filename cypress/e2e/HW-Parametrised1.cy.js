describe('template spec', () => { 

  before(()=>{
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

    cy.log('Visit the website sanitarskyi')
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
    // cy.get('[placeholder="Jane Doe"]').type('Hello');
    
  })

  it('Test1', () => {
    // cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

    // cy.log('Visit the website sanitarskyi')
    // cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    // cy.get('[title="Forms"]').click();
    // cy.get('[title="Form Layouts"]').click();
    cy.get('[placeholder="Jane Doe"]').type('Hello');
    
  })
})