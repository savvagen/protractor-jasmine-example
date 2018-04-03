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
        element(by.model('first')).sendKeys(10);
        $("select[ng-model='operator']").element(by.cssContainingText('option', '%')).click();
        // The same action
        // $("select[ng-model='operator']").element(by.css("option[value='MODULO']")).click();
        element(by.model('second')).sendKeys(100);
        element(by.id('gobutton')).click();
        expect(element(by.binding('latest')).getText()).toEqual('10');
    });


});