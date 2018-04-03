

function CalculatorPage(browser) {

    var firstInput = element(by.model('first'));
    var secondInput = element(by.model('second'));
    var submitButton = element(by.id('gobutton'));
    var result = $("h2.ng-binding");
    var optionDropDown = element.all(by.css("select[ng-model='operator'] option"));
    var options = $("select[ng-model='operator']");


    this.open = allure.createStep("Open Main Page", function(){
        return browser.get('/protractor-demo');
    });


    this.setValues = allure.createStep("Set values: {0} and {1}", function(firstNumber, secondNumber) {
        firstInput.sendKeys(firstNumber);
        secondInput.sendKeys(secondNumber);
    });


    this.selectOption = allure.createStep("Select option: {0}", function(index){
        optionDropDown.then(function(options){
            options[index-1].click();
        });
    });

    this.selectOptionBy = allure.createStep("Select option: {0}", function(option){
        options.element(by.cssContainingText('option', option)).click();
    });

    this.pressSubmit = allure.createStep("Submit results", function() {
        submitButton.click();
    });


    this.getResult = function() {
        return result.getText()
    };



    function selectOption(index){
        optionDropDown.then(function(options){
            options[index-1].click();
        });
    }

    function selectOptionBy(option){
        options.element(by.cssContainingText('option', option)).click();
    }

    this.minus = allure.createStep("Execute: {0} minus {1}", function(firstNumber, secondNumber){
        firstInput.sendKeys(firstNumber);
        selectOption(5);
        secondInput.sendKeys(secondNumber);
        submitButton.click();
    });

    this.add = allure.createStep("Execute: {0} plus {1}", function(firstNumber, secondNumber){
        firstInput.sendKeys(firstNumber);
        selectOption(1);
        secondInput.sendKeys(secondNumber);
        submitButton.click();
    });

    this.calculate = allure.createStep("Execute: {0} {1} {2}", function(firstNumber, option, secondNumber){
        firstInput.sendKeys(firstNumber);
        selectOptionBy(option);
        secondInput.sendKeys(secondNumber);
        submitButton.click();
    });

}

module.exports = {
    CalculatorPage
};