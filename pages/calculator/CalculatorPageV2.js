

var CalculatorPage = function () {

    browser.get("/protractor-demo");
};

CalculatorPage.prototype = Object.create({}, {


    firstInput: { get: function () { return element(by.model('first')) }},
    secondInput: { get: function () { return element(by.model('second')) }},
    submitButton: { get: function () { return element(by.id('gobutton')) }} ,
    result: { get: function () { return $("h2.ng-binding") }} ,
    optionDropDown: {get: function () { return element.all(by.css("select[ng-model='operator'] option")) }},
    results: { get: function () { return $$(".table tbody tr td:nth-child(3)") }},
    options: {get: function () { return $("select[ng-model='operator']") }},


    setValues: {value: function (first, second) {
            this.firstInput.sendKeys(first);
            this.secondInput.sendKeys(second);
    }},

    pressSubmit: {value: function () {
        return this.submitButton.click();
    }},

    selectOption: { value: function (index) {
        return this.optionDropDown.then(function (options) {
            options[index].click();
        })
    }},

    selectOptionBy: { value: function (option) {
        return this.options.element(by.cssContainingText('option', option)).click();
    }},

    getResult: {value: function () {
        return this.result.getText();
    }},


    calculate: {value: function (first, second, option) {
        this.setValues(first,second);
        this.selectOptionBy(option);
        this.pressSubmit();
    }},

    add: {value: function (first, second) {
        this.setValues(first,second);
        this.selectOption(0);
        this.pressSubmit();
    }},

    devide: {value: function (first, second) {
        this.setValues(first,second);
        this.selectOption(1);
        this.pressSubmit();
    }},

    percent: {value: function (first, second) {
        this.setValues(first,second);
        this.selectOption(2);
        this.pressSubmit();
    }},

    multiply: {value: function (first, second) {
        this.setValues(first,second);
        this.selectOption(3);
        this.pressSubmit();
    }},


});

module.exports = CalculatorPage;