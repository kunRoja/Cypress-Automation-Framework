/// <reference types="cypress"/>

describe("Automation test store  wedisite - contacts us form module " ,() => {

    it("Scenario1 -user should able to create new contact us from succesfully  ",()=> {
        cy.visit("https://automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type("arjun")
        cy.get('#ContactUsFrm_email').type("kunnn2gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("testing")
        cy.get('.col-md-6 > .btn').click()
       // cy.get('.mb40 > :nth-child(3)').contains("Your enquiry has been successfully sent to the store owner!")
        
       cy.get('.mb40 > .btn').click
    })

    it("Scenario2 -user should not able to create new contact us from succesfully  ",()=> {
        cy.visit("https://automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type("arjun")
        cy.get('#ContactUsFrm_email').type("kunnn@gmail.com")
      //  cy.get('#ContactUsFrm_enquiry').type("testing")
        cy.get('.col-md-6 > .btn').click()

     cy.get('.element_error').contains("Enquiry: is required field! Enquiry must be between 10 and 3000 characters!")
    })

    it("Scenario3 -user should not able to create new contact us from succesfully  ",()=> {
        //cy.viewport(1024,)
        cy.visit("https://automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type("arjun")
        cy.get('#ContactUsFrm_email').type("kunnn@gmail.com")
      cy.get('#ContactUsFrm_enquiry').type("testing")
      cy.get('.col-md-1 > .btn').click()
      cy.get('.info_links_footer > :nth-child(5) > a').click()
      cy.get('#ContactUsFrm_first_name').type("arjun")
      cy.get('#ContactUsFrm_email').type("kunnn@gmail.com")
      cy.get('#ContactUsFrm_email').should('have.attr','name','email')
    cy.get('#ContactUsFrm_enquiry').type("testing")
    cy.get('.col-md-6 > .btn').click();
   // cy.get('p')
  // cy.xpath("//div[@class='contentpanel']//section//p[2]") .contains("Your enquiry has been successfully sent to the store owner!")
    
  cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    
    //cy.get('.mb40 > .btn').click()

   
    })

    // using jquery and promises cmd to get the text of the element 
    it.only("Scenario4 -user should able to get the text succesfully  ",()=> {
      cy.visit("https://automationteststore.com/")
      cy.get("a[href$='contact']").click().then(function(linktext){
        cy.log("item text: "+linktext.text())
      })
      // cy.get('#ContactUsFrm_first_name').type("arjun")
      // cy.get('#ContactUsFrm_email').type("kunnn2gmail.com")
      // cy.get('#ContactUsFrm_enquiry').type("testing")
      // cy.get('.col-md-6 > .btn').click()
     
  })
})