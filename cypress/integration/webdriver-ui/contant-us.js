/// <reference types="cypress"/>

const cypress = require("cypress");

//const { data } = require("cypress/types/jquery");

describe("Webdriver uni wedisite - contacts us form module " ,() => {

    before(function() {
      cy.fixture('example').then(function(data){

       // this.data =data;
     globalThis.data = data;
      })
      });

      beforeEach(function (){

        cy.visit(cypress.env("webdriverui_homepage")+"/Contact-Us/contactus.html")
      });

    it("Scenario1 -user should able to login into application succesfully  ",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us > .thumbnail').click()
    })

 it.only("Scenario2 -user should able to create a new contact us form succesfully  ",()=> {
       cy.visit("www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type("testing")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })

    it("Secnior3 -user should not able to create a new contact us form succesfully  ",()=> {
        cy.visit("www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus')
        cy.get('[name="first_name"]').type("roja")
        cy.get('[name="last_name"]').type("kunala")
       // cy.get('[name="email"]').type("rojakun@gmail.com")
        cy.get('textarea.feedback-input').type("testing")
        cy.get('[type="submit"]').click()
        cy.get('body').contains("Error: all fields are required")

    })


    it("Scenario4 -new window navgation will open in same page ",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr','target').click({force : true})
    })

})
