/// <reference types="cypress"/>
describe("Webdriver uni wedisite - date picker " ,() => {


    // beforeEach(() =>{

    //     cy.visit("http://www.webdriveruniversity.com/")
    //     cy.get('#datepicker').invoke('removeAttr','target').click({force : true})
    //})

    it("current date function " ,()=>{
      
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#datepicker').invoke('removeAttr','target').click({force : true})
         let date = new Date()
         date.setDate(date.getDate())
         cy.log(date.getDate())

         let date2 = new Date();
         date2.setDate(date2.getDate()+5 )
         cy.log(date2.getDate())
         
    });

    it.only("current date function " ,()=>{
      
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#datepicker').invoke('removeAttr','target').click({force : true})
        
        var date = new Date()
        date.setDate(date.getDate() + 365) // we can add + any numbers

        var featuretyear  = date.getFullYear();
       // var featuremonth = date.getMonth();
       var featuremonth = date.toLocaleString("default",{month : "long"})
        var featurdate = date.getDate();
        cy.log(""+featuretyear +" " +featuremonth +" "+featurdate)

        function  selectmonthAndyear(){

            cy.get('#datepicker >input').click()
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{

                if(!currentDate.text().includes(featuretyear)){
                    cy.get('.next').first().click()
                    selectmonthAndyear();
                }
            }).then(()=>{

                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{

                    if(!currentDate.text().includes(featuretyear)){
                        cy.get('.next').first().click()
                        selectmonthAndyear();
                    }
                })
    
            })
        }

        function selectfurrutDay(){
            
            cy.get('[class="day"]').contains(featurdate).click()
        }
            selectmonthAndyear();
            selectfurrutDay();
    });
    
})