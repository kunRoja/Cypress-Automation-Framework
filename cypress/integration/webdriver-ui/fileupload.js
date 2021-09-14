/// <reference types="cypress"/>
describe("Webdriver uni wedisite - file upload " ,() => {


   
    it("upload a file " ,()=>{
      
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#file-upload').invoke('removeAttr','target').click({force : true})
       
        cy.fixture("download.png","base64").then(fileContent =>{
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName:  "download.png",
                    mimeType: "image/png"

                },
                {
                    uploadType : "input"
                }
               

            )
        })
        cy.get('#submit-button').click();
         
    });

}) 
it("upload no file " ,()=>{
      
    cy.visit("http://www.webdriveruniversity.com/")
    cy.get('#file-upload').invoke('removeAttr','target').click({force : true})
   
 
    cy.get('#submit-button').click();
     
});