//const { assert } = require("chai");

describe('Test login functionality of OrangeHRM website', () => {
    it('user should login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();

        let expName = "FirstNameTest LastNameTest";
        cy.get('[class="oxd-userdropdown-name"]').then((x)=>{
            let actName = x.text();
            assert.equal(actName,expName);
        })
    });

    it('should handle hidden elements ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();

        cy.get('[class="oxd-userdropdown-name"]').trigger('mouseover');
        
    });

    it('should verify error message on invalid login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Sanjay');
        cy.get('[name="password"]').type('sanjay123');
        cy.get('[type="submit"]').click();

        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('contain', 'Invalid credentials');
    });
});