var ec = protractor.ExpectedConditions;

var timeout = protractor.timeout;

var Conditions = function () {

    this.waitToBeVisible = function (element) {
        browser.wait(ec.visibilityOf(element), timeout);
    };
    this.waitToClickable = function (element) {
        browser.wait(ec.elementToBeClickable(element), timeout);
    };

};

module.exports = [
    new Conditions()
];