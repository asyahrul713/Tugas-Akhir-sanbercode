const homePage = require('../support/pageObjects/homePage/homePage');
const loginPage = require('../support/pageObjects/loginPage/loginPage');
const checkoutPage = require('../support/pageObjects/checkoutPage/checkoutPage');
const { faker } = require('@faker-js/faker');


describe('Checkout Product', () => {

    beforeEach(() => {
  
      homePage.goToHomePage();
      checkoutPage.clickNameOfProduct();
      checkoutPage.verifyDirectDetailProductPage();
      checkoutPage.clickButtonAddToCart();
      checkoutPage.verifyProductAdded();
    })

    it('Verifikasi Checkout Product Dengan Mengisi Semua Field ', () => {
        checkoutPage.clickButtonCart();
        checkoutPage.verifyDirectCartPage();
        checkoutPage.clickButtonPlaceOrder();
        checkoutPage.verifyPopupPlaceOrder();
        checkoutPage.inputName(faker.person.fullName());
        checkoutPage.inputCountry(faker.location.country());
        checkoutPage.inputCity(faker.location.city());
        checkoutPage.inputCreditCard(faker.finance.creditCardNumber());
        checkoutPage.inputMonth(faker.date.month());
        checkoutPage.inputYear('2024');
        checkoutPage.clickButtonPurchase();
        checkoutPage.verifyChekoutSucces();
    })

    it('Verifikasi Checkout Product Dengan Mengosongkan Semua Field ', () => {
      checkoutPage.clickButtonCart();
      checkoutPage.verifyDirectCartPage();
      checkoutPage.clickButtonPlaceOrder();
      checkoutPage.verifyPopupPlaceOrder();
      checkoutPage.clickButtonPurchase();
      checkoutPage.verifyFieldRequiredForCheckout();
    })

    it('Verifikasi Checkout Product Dengan Hanya Mengisi Field Name Dan Creditcard', () => {
      checkoutPage.clickButtonCart();
      checkoutPage.verifyDirectCartPage();
      checkoutPage.clickButtonPlaceOrder();
      checkoutPage.verifyPopupPlaceOrder();
      checkoutPage.inputName(faker.person.fullName());
      checkoutPage.inputCreditCard(faker.finance.creditCardNumber());
      checkoutPage.clickButtonPurchase();
      checkoutPage.verifyChekoutSucces();
    })

    it('Verifikasi Checkout Product Dengan Hanya Mengosongkan Field Name Dan Creditcard', () => {
      checkoutPage.clickButtonCart();
      checkoutPage.verifyDirectCartPage();
      checkoutPage.clickButtonPlaceOrder();
      checkoutPage.verifyPopupPlaceOrder();
      checkoutPage.inputCountry(faker.location.country());
      checkoutPage.inputCity(faker.location.city());
      checkoutPage.inputMonth(faker.date.month());
      checkoutPage.inputYear('2024');
      checkoutPage.clickButtonPurchase();
      checkoutPage.verifyFieldRequiredForCheckout();
    })

})