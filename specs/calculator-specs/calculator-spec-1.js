let mainPage = require('../../pages/calculator/CalculatorPageV1');

// Set up Chai matchers
/*var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.should();*/


describe('Protractor Test without async. functions', function() {

    beforeEach(function () {
        mainPage.open();
    });

    it('should enter to main page',function () {
        expect(browser.getTitle()).toBe("Super Calculator");
        expect(mainPage.getResult()).toEqual("0");
    });


    it('should divide 6 and 3', function() {
        mainPage.setValues(10, 100);
        mainPage.selectOption(3);
        mainPage.pressSubmit();
        expect(mainPage.getResult()).toEqual('10');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should divide 6 and 3', function() {
        mainPage.setValues(6, 3);
        mainPage.selectOptionBy('/');
        mainPage.pressSubmit();
        expect(mainPage.getResult()).toEqual('2');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });


    it('should show percentage 10 from 100', function() {
        mainPage.setValues(10, 100).selectOption(3).pressSubmit();
        expect(mainPage.getResult()).toEqual('10');
        expect(browser.getTitle()).toEqual('Super Calculator');

    });

    it('should show percentage 20 from 200', function() {
        var result = mainPage.setValues(10, 100)
            .selectOption(3)
            .pressSubmit().getResult();
        expect(result).toEqual('10');
        expect(browser.getTitle()).toEqual('Super Calculator');

    });


     describe('Operation tests', function(){


        it('should divide 6 and 3', function() {
            mainPage.calculate(6, 3, '*');
            expect(browser.getTitle()).toEqual('Super Calculator');
            expect(mainPage.getResult()).toEqual('18');
        });

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

        it('should execute several functions', function() {
             mainPage.add(6, 3);
             mainPage.calculate(6, 3, '*');
             expect(browser.getTitle()).toEqual('Super Calculator');
             expect(mainPage.getResult()).toEqual('18');
             expect(mainPage.getResults().get(1).getText()).toBe('9');
             expect(mainPage.getResults().get(0).getText()).toBe('18');
         });


    });



});
