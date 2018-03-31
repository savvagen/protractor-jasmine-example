let mainPage = require('../pages/MainPage');

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
        mainPage.setValues(6, 3);
        mainPage.selectOption(2);
        mainPage.pressSubmit();
        expect(mainPage.getResult()).toEqual('2');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });


    it('should show percentage 10 from 100', function() {
        mainPage.setValues(10, 100).selectOption(3).pressSubmit();
        expect(mainPage.getResult()).toEqual('10');
        expect(browser.getTitle()).toEqual('Super Calculator');

    });

    it('should minus 6 and 3', function() {
        mainPage.setValues(6, 3);
        mainPage.selectOption(5);
        mainPage.pressSubmit();
        expect(mainPage.getResult()).toEqual('3');
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
