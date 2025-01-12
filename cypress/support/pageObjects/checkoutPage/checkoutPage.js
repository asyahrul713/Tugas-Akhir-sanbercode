class checkoutPage {

    clickNameOfProduct() {

        cy.wait(5000);
        cy.contains('Samsung galaxy s6').click()

    }

    verifyDirectDetailProductPage() {

        cy.xpath('//*[@onclick="addToCart(1)"]').should('be.visible')
    }

    verifyProductAdded() {

        cy.window().then((win) => {
            const alertStub = cy.stub(win,'alert').as('alertStub');
            cy.get('@alertStub').should('be.calledWith','Product added');
        });
    }

    verifyFieldRequiredForCheckout() {

        cy.on('window:alert', (text) => {
            expect(text).to.eq('Please fill out Name and Creditcard.')
        })
    }

    clickButtonAddToCart() {

        cy.xpath('//*[@onclick="addToCart(1)"]').click()
    }

    clickButtonCart() {

        cy.xpath('//*[@id="cartur"]').click()
    }

    verifyDirectCartPage() {

        cy.xpath('//*[@id="tbodyid"]').should('be.visible')
    }

    clickButtonPlaceOrder() {

        cy.contains('Place Order').click()
    }

    verifyPopupPlaceOrder() {

        cy.xpath('//*[@id="orderModalLabel"]').should('be.visible')
    }

    clickButtonPurchase() {

        cy.wait(5000);
        cy.xpath('//*[@onclick="purchaseOrder()"]').click()
    }

    inputName(name) {

        cy.wait(5000);
        cy.xpath('//*[@id="name"]').type(name)
    }

    inputCountry(country) {

        cy.wait(5000);
        cy.xpath('//*[@id="country"]').type(country)
    }

    inputCity(city) {

        cy.wait(5000);
        cy.xpath('//*[@id="city"]').type(city)
    }

    inputCreditCard(creditcard) {

        cy.wait(5000);
        cy.xpath('//*[@id="card"]').type(creditcard)
    }

    inputMonth(month) {

        cy.wait(5000);
        cy.xpath('//*[@id="month"]').type(month)
    }

    inputYear(year) {

        cy.wait(5000);
        cy.xpath('//*[@id="year"]').type(year)
    }

    verifyChekoutSucces() {

        cy.xpath('/html/body/div[10]/h2').contains('Thank you for your purchase!')
    }


}

module.exports = new checkoutPage();