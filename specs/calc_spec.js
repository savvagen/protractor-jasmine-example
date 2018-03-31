describe('Protractor Calculator Demo Tests', function() {

    beforeEach(function() {
        browser.get('/protractor-demo');
    });

    /*afterEach(function () {
        browser.restart()
    });*/

    /*afterAll(function () {
       browser.close();
    });*/



    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });



    it('should add one and two', function() {
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        element(by.id('gobutton')).click();
        expect(element(by.binding('latest')).getText()).toEqual('3');
    });


});