/// <reference types="cypress"/>

describe(" Handling js alerts  " ,() => {

    it("Scenario1 - confrim js alert contains correct text ",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force : true})
        cy.get('#button1').click()

       // if maunal we want to connect with alert => is call back func
       cy.on('window:alert',(str) =>{
            expect(str).to.equal('I am an alert box!')
       })

    })
    it("Scenario2 - ok and cancel buttons in alerts ",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force : true})
        cy.get('#button4').click()

       // if maunal we want to connect with alert => is call back func
       cy.on('window:alert',(str) =>{
           return true;
       })
       cy.get('#confirm-alert-text').contains('You pressed OK!')
       // by default ok and cancel it will click on ok button

    })
   

 it("Scenario3 - ok and cancel buttons in alerts - clickin on cancel button ",()=> {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force : true})
        cy.get('#button4').click()

        // 1st way to check the text
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('Press a button!')
       })
       // if maunal we want to connect with alert => is call back func
       cy.on('window:confirm',(str) =>{
           return false;// false will click on cancel buttonin alert
       })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
       // by default ok button will click on alert pop up
      

    })


    // it("Scenario4 - ok and cancel buttons in alerts - clickin on cancel button ",()=> {
    //     cy.visit("http://www.webdriveruniversity.com/")
    //     cy.get('#popup-alerts').invoke('removeAttr','target').click({force : true})
   
    //    // 2nd way to check the text
    //    const stub  = cy.stub() // creating a stud - stub is type of storage -it store a result
    //    cy.on('window:alert',stub) // align the stud to an event 
    //     //then is promise 
    //    cy.get('#button4').click().then(() =>{ 
    //         expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    //    }).then(() =>{
    //        // means click on ok in alert pop up
    //        return true;
    //    })
    // //    .then(() =>{
    // //     cy.get('#confirm-alert-text').contains('You pressed OK!')
    // //    })
    // });

})