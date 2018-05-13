var ec = protractor.ExpectedConditions;
var AccountPage = require('./AccountPage');

var LoginPage = function () {

	var emailField = element(by.name('identifier'));
	var emailNext = $('#identifierNext');
	var passwordField = element(by.name('password'));
	var passwordNext = $('#passwordNext');

	this.open = function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://accounts.google.com');
        return this
	};

	this.loginAs = function (user) {
		emailField.sendKeys(user.email, protractor.Key.ENTER);
		browser.wait(ec.visibilityOf(passwordField), 5000);
		passwordField.sendKeys(user.password);
        passwordNext.click();
        return new AccountPage();
	};

};

module.exports = LoginPage;