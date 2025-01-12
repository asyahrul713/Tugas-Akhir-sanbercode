class signUpPage {

    inputUsername(username) {

        cy.wait(5000);
        cy.xpath('//input[@id="sign-username"]').type(username)

    }

    inputPassword(password) {

        cy.wait(5000);
        cy.xpath('//input[@id="sign-password"]').type(password)
    }

    clickRegisterButton() {

        cy.xpath('//button[@onclick="register()"]').click()
    }

    verifyRegisterSucces() {

        cy.on('window:alert', (text) => {
        expect(text).to.eq('Sign up successful.')
        })
    }

    verifyFieldRequired() {

        cy.on('window:alert', (text) => {
        expect(text).to.eq('Please fill out Username and Password.')
        })
    }

    verifyUserAlreadyExist() {

        cy.on('window:alert', (text) => {
        expect(text).to.eq('This user already exist.')
        })
    }

}

module.exports = new signUpPage();