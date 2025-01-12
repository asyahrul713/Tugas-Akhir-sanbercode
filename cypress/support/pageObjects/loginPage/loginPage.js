class loginPage {

    inputUsername(username) {

        cy.wait(5000);
        cy.xpath('//*[@id="loginusername"]').type(username)

    }

    inputPassword(password) {

        cy.wait(5000);
        cy.xpath('//*[@id="loginpassword"]').type(password)
    }

    clickLoginButton() {

        cy.wait(5000);
        cy.xpath('//button[@onclick="logIn()"]').click()
    }

    verifyLoginSucces() {

        cy.wait(5000);
        cy.xpath('//*[@id="nameofuser"]').should('be.visible')
    }

    verifyWrongPassword() {

        cy.on('window:alert', (text) => {
        expect(text).to.eq('Wrong password.')
        })
    }

    verifyUserNotRegistered() {

        cy.on('window:alert', (text) => {
        expect(text).to.eq('User does not exist.')
        })
    }

    verifyFieldRequired() {

        cy.on('window:alert', (text) => {
            expect(text).to.eq('Please fill out Username and Password.')
          })
    }

}

module.exports = new loginPage();