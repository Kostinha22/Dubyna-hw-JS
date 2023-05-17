describe.only('Multiple tests', () => {

    beforeEach(()=>{
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click()
    cy.get('[title="Form Layouts"]').click();
    })
  
    const testNameForm = (testData, expectetResult, testEmail, expectedEmail) => 
  
    function () {
      cy.log('Ввести дані в поле ')
      cy.get('[placeholder="Jane Doe"]').type(testData)
      cy.get('[type="text"]').should('have.value', `${expectetResult}`)
      cy.get('input[type="text"][placeholder="Email"]').type(testEmail).should('have.value', `${expectedEmail}`)
      cy.get('span.custom-checkbox:first-of-type' ).eq(0).click()
      cy.get('button[type="submit"][status="primary"]').eq(0).click()
      
    }
  
  
    
    it(`Name`, testNameForm('Kostiantyn', 'Kostiantyn', 'kostesster.kostester@gmail.com', 'kostesster.kostester@gmail.com'))
    
  
   
  
  })
  