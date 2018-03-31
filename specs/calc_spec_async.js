let mainPage = require('../pages/MainPageAsync');

// Set up Chai matchers
/*var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.should();*/


describe('Protractor Test with async. functions', function() {

    beforeEach(async function () {
        await mainPage.open();
    });

    it('should enter to main page',async function () {
        expect(browser.getTitle()).toBe("Super Calculator");
        expect(await mainPage.getResult()).toEqual("0");
    });


    describe('Commands tests', function(){

        it('should add 1 and 3',async function() {
            //await mainPage.setValues(1, 3).pressSubmit;
            await mainPage.typeValues(1,3);
            await mainPage.submit();
            expect(await mainPage.getResult()).toEqual('4');
            expect(browser.getTitle()).toEqual('Super Calculator');

        });

        it('should add 1 and 4',async function() {
            await mainPage.setValues(1,4);
            await mainPage.pressSubmit();
            expect(await mainPage.getResult()).toEqual('5');
            expect(browser.getTitle()).toEqual('Super Calculator');
        });

        it('should show percentage 10 from 100',async function() {
            await mainPage.setValues(10,100);
            await mainPage.selectOption(3);
            await mainPage.pressSubmit();
            expect(await mainPage.getResult()).toEqual('10');
            expect(browser.getTitle()).toEqual('Super Calculator');

        });


    });


    describe('Operation tests', function(){

        it('should add 1 and 5',async function() {
            await mainPage.add(1, 5);
            expect(await mainPage.getResult()).toEqual('6');
            expect(browser.getTitle()).toEqual('Super Calculator');

        });

        it('should divide 10 and 5', async function() {
            await mainPage.devide(10, 5);
            expect(await mainPage.getResult()).toEqual('2');
            expect(browser.getTitle()).toEqual('Super Calculator');

        });

        it('should minus 10 and 5', async function() {
            await mainPage.minus(10, 5);
            expect(await mainPage.getResult()).toEqual('5');
            expect(browser.getTitle()).toEqual('Super Calculator');

        });


    });








});
