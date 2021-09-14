/// <reference types="cypress"/>

describe("verfiying varables and cypress cmd and jquery cmds " ,() => {

    it("Scenario1 -Navg to specific product pages succesfully  ",()=> {

        cy.visit("https://automationteststore.com/")
        const makeuplink = cy.get("a[href*='product/category&path']").contains("Makeup").click()
        const skincarelink = cy.get("a[href*='product/category&path']").contains("Skincare")
        skincarelink.click();
    })

    it("Scenario2 -Navg to specific product pages succesfully  ",()=> {

        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path']").contains("Makeup").click()
        // below two styles will fail bec of const and log 
        // const header = cy.get("h1 .maintext");
        // cy.log(header)
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text())

        // some what is correct but no text found
        // const header = cy.get("h1 .maintext").then(function(headertext){
        //     cy.log("header text :"+headertext.text())
        // })
       
        // correct appraoch $headertext is parameter and passesd int ht varibale const then printing
        cy.get("h1 .maintext").then(($headertext) => {
            const ht = $headertext.text()
            cy.log("founded text: "+ht)
            expect(ht).is.eq('Makeup')

        })
    })
        
        it.only("Scenario3  -Checking cypress cmd and chaginig  ",()=> {

            cy.visit("https://automationteststore.com/index.php?rt=content/contact")

            // Cypress cmd and changing
            cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')

            //Jquery approach 
            cy.contains('#ContactUsFrm','Contact Us Form').then(text => {
                const fntext = text.find('#field_11').text()
                expect(fntext).to.contain('First name')
                // or
               // expect(fntext).is.eq('First name')
            })
            
            //EMbedded cmd 
            cy.get('#field_11').then(fntext => {
                cy.log(fntext.text())
                // with jquery - without text() 
                cy.log(fntext) // thihs not get the text of it

            })

            
        })

})