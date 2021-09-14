/// <reference types="cypress"/>
describe("Webdriver uni wedisite - data tables model " ,() => {


    beforeEach(() =>{

        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#data-table').invoke('removeAttr','target').click({force : true})
    });

    it("cal total ages ",()=> {
        var userdetails = [];
        let numb =0;
        cy.get('#thumbnail-1 td').each(($el,index,$list) =>{
            userdetails[index] = $el.text();

        }).then(()=>{
            var i;
            for(i =0;i<userdetails.length;i++){
                if(Number(userdetails[i])){
                    numb +=Number (userdetails[i])// this onlr bring the numbers 
                }
            
                //cy.log(userdetails[i])
            }
            cy.log(numb)
           expect(numb).to.eq(322)
        })
    });

    it("cal the age for passed string" ,()=>{
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el,index,$list) =>{
            const text = $el.text();
            if(text.includes("Woods")){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age){

                    const userage = age.text();
                    expect(userage).to.eq("80");
                })
            }
        })
    });
    
})