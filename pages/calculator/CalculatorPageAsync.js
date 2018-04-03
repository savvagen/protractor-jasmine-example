

var MainPageAsync = function () {

    var firstInput = element(by.model('first'));
    var secondInput = element(by.model('second'));
    var submitButton = element(by.id('gobutton'));
    var result = $("h2.ng-binding");
    var optionDropDown = element.all(by.css("select[ng-model='operator'] option"));


    this.open = async function() {
        await browser.get('/protractor-demo');
        return this
    };

    this.add = async function(firstNumber, secondNumber){
        await firstInput.sendKeys(firstNumber);
        await secondInput.sendKeys(secondNumber);
        await submitButton.click();
    };

    this.devide = async function(firstNumber, secondNumber){
        await firstInput.sendKeys(firstNumber);
        await selectOption(2);
        await secondInput.sendKeys(secondNumber);
        await submitButton.click();
    };

    this.minus = async function(firstNumber, secondNumber){
        await set(firstNumber, secondNumber);
        await selectOption(5);
        await submit();
    };



    this.setValues = async function(firstNumber, secondNumber) {
        await firstInput.sendKeys(firstNumber);
        await secondInput.sendKeys(secondNumber);
    };

    this.submit = async function () {
        await submitButton.click();
    };


    this.selectOption = async function(index){
        await optionDropDown.then(function(options){
            options[index-1].click();
        });
    };

    this.getResult = function() {
        return result.getText()
    };



    //Describe as functions

    async function set(firstNumber, secondNumber){
        await firstInput.sendKeys(firstNumber);
        await secondInput.sendKeys(secondNumber);
    }

    async function selectOption(number){
        await optionDropDown.then(function(options){
            options[number-1].click();
        });
    }

    async function submit(){
        await submitButton.click();
    }

};
module.exports = new MainPageAsync();
