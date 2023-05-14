describe('Multiple tests', ()=>{
  const testNameForm = (testData, expectetResult) => 

  function () {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click()
    cy.get('[title="Form Layouts"]').click();

    cy.log('Ввести дані в поле ')
    cy.get('[placeholder="Jane Doe"]').type(testData)
    cy.get('[type="text"]').should('have.value', `${expectetResult}`)
  }
  const testEmailForm = (testData, expectedResult) => 

  function () {

    cy.get('[placeholder="Jane Doe"]').type(testData)
    cy.get('[type="text"]').should('have.value', `${expectetResult}`)

  }
  
  it(`Test1`, testNameForm('Kostiantyn', 'Kostiantyn'))
  it(`Email`, testEmailForm('kostester.kostester@gmail.com', 'kostester.kostester@gmail.com'))

})







// describe.skip('Multiple tests', () => {
//   const tests = [
//     {testData:'Name', expectedResult:'Name'},
//     {testData:'Lastname', expectedResult:'Lastname'},
//     {testData:'Billing address', expectedResult:'Billing address'}
//   ]

//   tests.forEach(({testData, expectedResult}) => {
//     it(`Tests ${testData}`,()=> {
//       cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
//       cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//       cy.get('[title="Forms"]').click().type(testdata[1]).clear()
//       })
//   })

// })