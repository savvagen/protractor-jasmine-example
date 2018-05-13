var person  = require("../../pages/google/user");
var LoginPage = require('../../pages/google/LoginPage');
var AccountPage = require('../../pages/google/AccountPage');
var GmailPage = require('../../pages/google/GmailPage');
var ec = protractor.ExpectedConditions;


describe('User should login', function () {

    var loginPage;
    var accountPage;
    var gmailPage;

    beforeAll(function () {
        loginPage = new LoginPage();
        accountPage = new AccountPage();
        gmailPage = new GmailPage();
    });

    beforeEach(function () {
        var accountPage = loginPage.open().loginAs(person);
        expect(accountPage.accountButton.isDisplayed()).toBe(true);
    });


    it('should login successfully', function () {
        gmailPage.open().writeMessageWithAttachment( person.email , "Test Message", "Hello Savva!", "../../../data/HelloWorld.txt")
    });

});