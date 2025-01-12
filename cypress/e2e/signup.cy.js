const homePage = require('../support/pageObjects/homePage/homePage');
const signUpPage = require('../support/pageObjects/signUpPage/signUpPage');
const { faker } = require('@faker-js/faker');

describe('Sign Up', () => {

  beforeEach(() => {

    homePage.goToHomePage();
    homePage.clickSignUpMenu();
  })
  it('Sign Up dengan data yang valid', () => {
    signUpPage.inputUsername(faker.person.firstName() + "123");
    signUpPage.inputPassword("syahrul99");
    signUpPage.clickRegisterButton();
    signUpPage.verifyRegisterSucces(); 
  })
  it('Sign Up dengan mengosongkan semua field', () => {
    signUpPage.clickRegisterButton();
    signUpPage.verifyFieldRequired();
  })
  it('Sign Up dengan data yang sudah terdaftar', () => {
    signUpPage.inputUsername("Syahrul911");
    signUpPage.inputPassword("syahrul911");
    signUpPage.clickRegisterButton();
    signUpPage.verifyUserAlreadyExist();
  })
})