

var LoginPage = function () {



    var emailField = element(by.name('identifier'));
    var emailNext = $("#identifierNext");
    var passwordField = element(by.name('password'));
    var passwordNext = $("#passwordNext");

    this.open = function () {
        browser.get("https://accounts.google.com")
    };

    this.loginAs = function (user) {
        emailField.sendKeys(user.email, protractor.Key.ENTER);
        passwordField.sendKeys(user.password);
        passwordNext.click();
    }

};
module.exports = new LoginPage();