/// <reference types="cypress"/>

describe("Webdriver uni wedisite - checkboxs model " ,() => {

    beforeEach(function() {
        cy.visit("http://www.webdriveruniversity.com/")
        
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force : true})
     
        cy.log(" runs before each test in this block")
      });

    it("Scenario1 - checxboxs - checking box",()=> {
     
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force : true})
       // cy.get('#checkboxes > :nth-child(1) > input').click()
      // 1st way
       cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')


       // 2nd way using alisa 
       cy.get('#checkboxes > :nth-child(1) > input').as('optional1')
        cy.get('@optional1').check()
        cy.get('@optional1').check().should('be.checked')

            
    });

    it("Scenario2 - Task checxboxs - unchecking box",()=> {
        // cy.visit("http://www.webdriveruniversity.com/")
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force : true})
      
        //1st way
       //cy.get(':nth-child(5) > input').uncheck().should('not.be.checked')


       // 2nd way using alisa 
       cy.get(':nth-child(5) > input').as('optional3')
        cy.get('@optional3').uncheck()
        cy.get('@optional3').uncheck().should('not.be.checked')
            
    });
    it("Scenario3 - Task checxboxs - multpile checking box",()=> {
        // cy.visit("http://www.webdriveruniversity.com/")
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force : true})

        cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"])          
    });

    it("Scenario4 - radio buttons",()=> {
        // cy.visit("http://www.webdriveruniversity.com/")
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force : true})

        cy.get("input[value='green']").check()      // 1 way - 1st radio button
        
        cy.get('#radio-buttons').find("input[type='radio']").first().check() // 2nd way - 1st radio button

        cy.get('#radio-buttons').find("input[type='radio']").eq(0).check() // 3rd way -1st radio buttonby passing index form 0 

    });
    it.only("Scenario5 - radio buttons",()=> {
        // cy.visit("http://www.webdriveruniversity.com/")
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force : true})

    //   cy.get("input[value='lettuce']").should('not.be.checked')
    //   cy.get("input[value='pumpkin']").should('be.checked')

      cy.get("input[value='lettuce']").check().should('be.checked')
      cy.get("input[value='pumpkin']").should('not.be.checked')

      cy.get("input[value='cabbage']").should('be.disabled')

    });
})