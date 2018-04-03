

var MainPage = function () {

    var firstInput = element(by.model('first'));
    var secondInput = element(by.model('second'));
    var submitButton = element(by.id('gobutton'));
    var result = $("h2.ng-binding");
    var optionDropDown = element.all(by.css("select[ng-model='operator'] option"));
    var options = $("select[ng-model='operator']");
    var results = $$(".table tbody tr td:nth-child(3)");

    this.open = function() {
        browser.get('/protractor-demo');
        return this
    };


    this.setValues = function(firstNumber, secondNumber) {
        firstInput.sendKeys(firstNumber);
        secondInput.sendKeys(secondNumber);
    };

    this.selectOption = function(index){
        optionDropDown.get(index).click()
    };

    this.selectOptionBy = function(option){
        options.element(by.cssContainingText('option', option)).click();
    };

    this.pressSubmit = function () {
        submitButton.click();
    };

    this.getResult = function() {
        return result.getText()
    };

    this.getResults = function () {
        return results;
    };



    // This functions are returning this module

    this.setValues = function(firstNumber, secondNumber) {
        firstInput.sendKeys(firstNumber);
        secondInput.sendKeys(secondNumber);
        return this
    };

    this.selectOption = function(index){
        optionDropDown.then(function(options){
            options[index-1].click();
        });
        return this
    };

    this.pressSubmit = function () {
        submitButton.click();
        return this
    };



    // This function can be used only in the methods

    function selectOption(index){
        optionDropDown.then(function(options){
            options[index-1].click();
        });
    }

    function selectOptionBy(option){
        options.element(by.cssContainingText('option', option)).click();
    }

    this.minus = function(firstNumber, secondNumber){
        firstInput.sendKeys(firstNumber);
        selectOption(5);
        secondInput.sendKeys(secondNumber);
        submitButton.click();
    };

    this.add = function(firstNumber, secondNumber){
        firstInput.sendKeys(firstNumber);
        selectOption(1);
        secondInput.sendKeys(secondNumber);
        submitButton.click();
    };

    this.calculate = function (first, second, option) {
        firstInput.sendKeys(first);
        selectOptionBy(option);
        secondInput.sendKeys(second);
        submitButton.click();
    };




};
module.exports = new MainPage();
