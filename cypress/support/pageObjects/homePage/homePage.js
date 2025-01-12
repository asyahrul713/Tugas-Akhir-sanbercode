class homePage {

    goToHomePage() {

        cy.visit('https://www.demoblaze.com/index.html')

    }

    clickSignUpMenu() {

        cy.xpath('//*[@id="signin2"]').click()
    }

    verifySignUpMenu() {

        cy.get('.modal-content').should('exist')
    }

    clickLoginMenu() {

        cy.xpath('//*[@id="login2"]').click()
    }

    verifyLoginMenu() {

        cy.get('.modal-content').should('exist')
    }
    
}

module.exports = new homePage();