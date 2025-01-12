const homePage = require('../support/pageObjects/homePage/homePage');
const loginPage = require('../support/pageObjects/loginPage/loginPage');


describe('login', () => {

  beforeEach(() => {
  
      homePage.goToHomePage();
      homePage.clickLoginMenu();
    })
    it('Login dengan data yang valid', () => {
        loginPage.inputUsername("Syahrul911");
        loginPage.inputPassword("syahrul911");
        loginPage.clickLoginButton();
        loginPage.verifyLoginSucces();
      })
      it('Login dengan password yang salah', () => {
        loginPage.inputUsername("Syahrul911");
        loginPage.inputPassword("syahrul");
        loginPage.clickLoginButton();
        loginPage.verifyWrongPassword();
      })
      it('Login dengan user not registered', () => {
        loginPage.inputUsername("Syahrul007");
        loginPage.inputPassword("syahrul007");
        loginPage.clickLoginButton();
        loginPage.verifyUserNotRegistered();
      })
      it('Login dengan mengosongkan field', () => {
        loginPage.clickLoginButton();
        loginPage.verifyFieldRequired();
      })
})