/// <reference types="cypress"/>

describe("cypress web security " ,() => {

    // error cypress will not support
    it("Scenario1 - navgating between two web sites  ",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.visit("https://automationteststore.com/")
    })

    // error 
    it("Scenario2 -user should able to login into application succesfully  ",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#automation-test-store').invoke('removeAttr','target').click()
    })
    
    // this disable the web security  by pass chromeWebSecurity : flase 
    it("Scenario3 -user should able to login into application succesfully  ",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#automation-test-store').invoke('removeAttr','target').click()
    })
})
