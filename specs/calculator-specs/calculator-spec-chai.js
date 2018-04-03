let mainPage = require('../../pages/calculator/CalculatorPageV1');

// Set up Chai matchers
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('Protractor Test without async. functions', function() {

    beforeEach(function () {
        mainPage.open();
    });

    it('should enter to main page',async function () {

        expect(await browser.getTitle()).to.equal("Super Calculator");
        expect(await mainPage.getResult()).to.be.equal('0');
        var result = await mainPage.getResult();
        var title = await browser.getTitle();
        result.should.equal('0');
        //mainPage.getResult().then((result) => { result.should.equal('0') });
        title.should.equal("Super Calculator")
    });


    it('should divide 6 and 3', async function() {
        mainPage.setValues(10, 100);
        mainPage.selectOption(3);
        mainPage.pressSubmit();
        assert.equal(await mainPage.getResult(), '10');
        assert.equal(await browser.getTitle(), 'Super Calculator');
    });

    it('should divide 6 and 3',async function() {
        mainPage.setValues(6, 3);
        mainPage.selectOptionBy('/');
        mainPage.pressSubmit();
        expect(await browser.getTitle()).to.equal("Super Calculator");
        expect(await mainPage.getResult()).to.be.equal('2');

    });



    it('should show percentage 20 from 200',async function() {
        var result = mainPage.setValues(10, 100)
            .selectOption(3)
            .pressSubmit().getResult();
        expect(await browser.getTitle()).to.equal("Super Calculator");
        expect(await result).to.be.equal('10');

    });

    describe('More challenged tests', function(){


        it('should show percentage 10 from 100',async function() {
            mainPage.setValues(10, 100).selectOption(3).pressSubmit();
            expect(await mainPage.getResult()).to.equal('10');
            expect(await browser.getTitle()).to.be.equal('Super Calculator');
            mainPage.getResults().then(async (results) => {
                results.forEach(async result => {
                        assert(await result.isDisplayed());
                        assert(parseInt(await result.getText()) > 5);
                    }
                )})

        });


        it('should execute several functions', async function() {
            mainPage.add(6, 3);
            mainPage.calculate(6, 3, '*');
            expect(await mainPage.getResult()).to.equal('18');
            expect(await browser.getTitle()).to.be.equal('Super Calculator');
            expect(await mainPage.getResults().get(1).getText()).to.be.equal('9');
            expect(await mainPage.getResults().get(0).getText()).to.be.equal('18');
            mainPage.getResults().each(async function(result) {
                assert.isTrue(await result.isDisplayed());
                assert.isNotTrue(await parseInt(result.getText()) > 100);
                assert.isAtLeast(parseInt(await result.getText()), 9, 'Result is greater or equal to 9');
                assert.isAtMost(parseInt(await result.getText()), 18, 'Result is less than or equal to 18');
            })
        });


    });

});


// For more examples visit the Chai API page:
// http://www.chaijs.com/api/assert/