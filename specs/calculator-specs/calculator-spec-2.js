var CalculatorPage = require("../../pages/calculator/CalculatorPageV2");

describe('Protractor Test with async. functions', function () {

    var page;

    beforeEach(function () {
        page = new CalculatorPage();
    });


    it('should percentage 10 from 100', function () {
        page.percent(10, 100);
        page.calculate(10, 2, '/');
        expect(browser.getTitle()).toBe('Super Calculator');
        expect(page.getResult()).toEqual('5');
        expect(page.results.get(1).getText()).toEqual('10');
        expect(page.results.count()).toEqual(2);
        page.results.then((elements) => {
            // Gives array of elements
            elements.forEach((element) =>{
                element.isDisplayed();
                element.getText().then((text)=>{expect(parseInt(text) > 4).toEqual(true)})
            })
        })
    });

    // The same using Await
    it('should percentage 10 from 100', async function () {
        page.percent(10, 100);
        page.calculate(10, 2, '/');
        expect(browser.getTitle()).toBe('Super Calculator');
        expect(page.getResult()).toEqual('5');
        expect(page.results.get(1).getText()).toEqual('10');
        expect(page.results.count()).toEqual(2);
        await page.results.each( async (element) => {
            console.log(await element.getText());
            expect(parseInt(await element.getText()) > 4).toEqual(true);
        });
    });


    it('should add 1 and 5', function () {
        page.setValues(10, 100);
        page.selectOptionBy("%");
        page.pressSubmit();
        expect(browser.getTitle()).toBe('Super Calculator');
        expect(page.getResult()).toEqual('10');
        expect(page.results.get(0).getText()).toEqual('10');
    });

    it('should miltiply 5 and 10', function () {
        page.calculate(5, 10, '*');
        expect(page.getResult()).toEqual('50');
        expect(page.results.get(0).getText()).toEqual('50');
        expect(page.results.each( (result) => {
            // Gives each element
            result.getText().then((text)=> {console.log(text)});
        }));
    });


    describe('Test other options', function () {


        it('should add 1 and 5', function () {
            page.add(1, 5);
            expect(browser.getTitle()).toBe('Super Calculator');
            expect(page.getResult()).toEqual('6');
            expect(page.results.get(0).getText()).toEqual('6');
        });


        it('should multiply 2 and 5', function () {
            page.multiply(2, 5);
            expect(browser.getTitle()).toBe('Super Calculator');
            expect(page.getResult()).toEqual('10');
            expect(page.results.get(0).getText()).toEqual('10');
        });


        it('should percentage 10 from 100', async function () {
            page.percent(10, 100);
            page.calculate(10, 2, '/');
            expect(browser.getTitle()).toBe('Super Calculator');
            expect(page.getResult()).toEqual('5');
            expect(page.results.get(1).getText()).toEqual('10');
            expect(page.results.count()).toEqual(2);
            page.results.each((result) => {
                result.getText().then(function(text){ expect(parseInt(text) > 1).toEqual(true) });
            });

            /*page.results.count().then(function (count) {
                console.log(count)
            });
            page.results.first().getText().then(function (text) {
                console.log(text)
            })*/
            // This is the same
            console.log(await page.results.count());
            console.log(await page.results.first().getText());
        });
    });



});