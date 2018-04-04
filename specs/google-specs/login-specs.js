
var user  = require("../../pages/google/user");
var loginPage = require("../../pages/google/LoginPage");

describe('User should login', function () {

    beforeAll(function () {
        browser.ignoreSynchronization = true;
    });


    it('should login successfully', function () {
        loginPage.open();
        loginPage.loginAs(user)
    });

});