/// <reference types="cypress"/>

describe("Webdriver uni wedisite - dropdowns model " ,() => {

    it("Scenario1 - selecting spefic values form dropdown list",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force : true})
      
      // 1st way
       cy.get('#dropdowm-menu-1').select('Python')
       cy.get('#dropdowm-menu-2').select('testng').should('have.value','testng')
       cy.get('#dropdowm-menu-3').select('CSS')

     
        cy.get('#dropdowm-menu-2').select('maven').should('have.value','maven')
         cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    });

    it.only("Scenario2 - selecting spefic values form Auto suggested dropdown list",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click({force : true})
      
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list >*').each(($el,index,$list) => {

            const prod = $el.text();
            const produtname = 'Avacado'
            if(prod === produtname){
                $el.click();
                cy.get('#submit-button').click();
                cy.url().should('include','Avacado')

            }
        }).then(() =>{
                cy.get('#myInput').type('g')
                cy.get('#myInputautocomplete-list >*').each(($el,index,$list) => {

                    const prod = $el.text();
                    const produtname = 'Grapes'
                    if(prod === produtname){
                        $el.click();
                        cy.get('#submit-button').click();
                        cy.url().should('include','Grapes')

                    }
                })
        })
    });
})