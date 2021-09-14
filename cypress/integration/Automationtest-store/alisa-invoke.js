/// <reference types="cypress"/>

describe("alisa and invoke  " ,() => {

    it("Scenario1 - validate a specific hair care products  ",()=> {

        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path']").contains("Hair Care").click()
        
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productname')
        cy.get('@productname').its('length').should('be.gt',5)
        // one more way  assertion 
        cy.get('@productname').should('include','Seaweed Conditioner')

    })

    it("Scenario2 -  Task -validate home page with how many tproducts length 16" +
        " add to cart product icon verify", ()=> {

        cy.visit("https://automationteststore.com/")
       
        cy.get('.thumbnail').as('noofprodcts')
        cy.get('@noofprodcts').should('have.length',16)
            // find looks inside get locato
       cy.get('@noofprodcts').find('.productcart').invoke('attr','title').should('include','Add to Cart')
       
    })
    it.only("Scenari3 -  cal the pricess", ()=> {

    cy.visit("https://automationteststore.com/")
   
    cy.get('.thumbnail').as('noofprodcts')
    // cy.get('@noofprodcts').find('.oneprice').each(($el,index,$list) => {

    //     cy.log($el.text())
    // })

     cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemprice')
     cy.get('.thumbnail').find('.pricenew').invoke('text').as('itemnewprice')
     var itemstotal =0;
    
     cy.get('@itemprice').then($linkText => {
        var itemprice  =$linkText.split('$')
        var itemtotalprice =0;
        var i;
        for(i=0;i<itemprice.length;i++){
            cy.log(itemprice[i])
            itemtotalprice +=Number(itemprice[i])
        }
        // total price in  'itemtotalprice' passing that price into another variable 

        itemstotal += itemtotalprice;
        cy.log('total price :',+itemtotalprice)
    })
       
    cy.get('@itemnewprice').then($linkText => {
        var saleitem =0;
        var itemnewprice  =$linkText.split('$')
        var i;
        for(i=0;i<itemnewprice.length;i++){
            cy.log(itemnewprice[i])
            saleitem +=Number(itemnewprice[i])
        }
        itemstotal += saleitem;
        cy.log('total sale price :'+saleitem)
    })
    .then(() => {

        cy.log("total prices of the products in homepage: "+itemstotal)
        expect(itemstotal).to.equals(616.7)
    })
})
  
})
