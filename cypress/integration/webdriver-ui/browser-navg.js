/// <reference types="cypress"/>

describe(" validate web browser navigations  " ,() => {

    it("Scenario1 - navgating between back and forword pages , refresh  ",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr','target').click({force : true})
        cy.url().should('include','contactus')
        // using go cmd  - we can navg back and forwoard 
        cy.go('back')
        cy.reload() // reload(true) - this will reload the page without catches 

        cy.go('forward')
        cy.url().should('include','contactus')

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr','target').click({force :true})
        cy.url().should('include','Login-Portal')
        cy.go('back')

    })

    it.only("Scenario2 -  Task navgating between back and forword pages , refresh  ",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr','target').click({force : true})
        cy.url().should('include','contactus')
        // using go cmd  - we can navg back and forwoard 
        cy.go('back')
        cy.reload() // reload(true) - this will reload the page without catches 

        cy.go('forward')
        cy.url().should('include','contactus')

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr','target').click({force :true})
        cy.url().should('include','Login-Portal')
        cy.go('back')

        cy.get('#to-do-list').invoke('removeAttr','target').click({force :true})
        cy.url().should('include','To-Do-List')
        cy.go('back')
        
    })

})