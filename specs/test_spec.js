const { CalculatorPage } = require("../pages/CalculatorPage");


describe('Protractor Test without async. functions', function() {


    let mainPage;

    beforeAll(function () {
        mainPage = new CalculatorPage(browser)
    });

    beforeEach(function () {
        mainPage.open();
    });



    it('should enter to main page',function () {
        expect(browser.getTitle()).toBe("Super Calculator");
        expect(mainPage.getResult()).toEqual("0");
    });

    it('should divide 6 and 3', function() {
        mainPage.setValues(6, 3);
        mainPage.selectOption(2);
        mainPage.pressSubmit();
        expect(mainPage.getResult()).toEqual('2');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });


    describe('Operation tests', function(){

        it('should add 1 and 5',function() {
            mainPage.add(1, 5);
            expect(mainPage.getResult()).toEqual('6');
            expect(browser.getTitle()).toEqual('Super Calculator');

        });

        it('should minus 1 and 5',function() {
            mainPage.minus(10, 5);
            expect(mainPage.getResult()).toEqual('5');
            expect(browser.getTitle()).toEqual('Super Calculator');

        });


    });




});