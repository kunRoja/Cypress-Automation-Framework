/// <reference types="cypress"/>

describe("Webdriver uni wedisite - Actions model " ,() => {

    it("Scenario1 - scrollintoview into action modules",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force : true})
     
    });
    it("Scenario2 - drag and drop ",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force : true})
     
        cy.get('#draggable').trigger('mousedown',{which: 1}) // clcik on centre of element 
        
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true}) // mouseup and focus helps us to release 

    });
    it("Scenario3 - double click  ",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force : true})
     
        cy.get('#double-click').dblclick();
       
    });
    it.only("Scenario3 - should able to hold down the left mouse click  button on agive element  ",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force : true})
     
        cy.get('#click-box').trigger('mousedown' ,{which: 1}).then(($element) =>{
            expect($element).to.have.css('background-color','rgb(0, 255, 0)')
        });
       
    });


})