var ec = protractor.ExpectedConditions;

var AccountPage = function() {


};

AccountPage.prototype = Object.create({}, {

    accountButton: { get: (button) => {
        button = $('a[aria-label*=\'(genchevskiy.test@gmail.com)\']');
        browser.wait(ec.visibilityOf(button), browser.timeout );
        return button }},




});

module.exports = AccountPage;
