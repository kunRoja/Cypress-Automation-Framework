/// <reference types="cypress"/>

describe("Automation test store  wedisite - contacts us form modules    " ,() => {

    it("Scenario1 -user should able to create new contact us from succesfully  ",()=> {
        cy.visit("https://automationteststore.com/")
        // first getting fixed_wapper in results we are finding productname
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
      
    })
    
    it("Scenario2 -user should able to get the text  ",()=> {
        cy.visit("https://automationteststore.com/")
        // first getting fixed_wapper in results we are finding productname
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeadertext){

            console.log("item text:" +itemHeadertext.text())
        })
        //console.log("text")
      
    })

})