/// <reference types="cypress"/>

describe("verfiying iterating over elements using each cmd " ,() => {

    it("Scenario1 - log infromation of all hair care products  ",()=> {

        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path']").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {

           cy.log("Index :" +index + ":"+$el.text())
           
          })
    })
    it("Scenario2 - added spefic elements into cart  ",()=> {

        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path']").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.text() .includes ('Curls to straight Shampoo')) {
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).click()
            } else {
              // do something else
            }
          })
    })
    it.only("Scenario3 - user command methos in command.js file  ",()=> {

      cy.visit("https://automationteststore.com/")
      cy.get("a[href*='product/category&path']").contains("Hair Care").click()
        // custom commands
      cy.Selectproduct('Curls to straight Shampoo')
  })
})