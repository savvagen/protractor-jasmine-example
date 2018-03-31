

describe('Google test_jasmine', function() {

    beforeEach(function(){
        //### To ignore and to switch off sinchronization for Angular waiting
        browser.ignoreSynchronization = true;
        browser.get('https://google.com')
    });


    /*afterEach(function(){
        browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
                return new Buffer(png, 'base64')
            }, 'image/png')();
        })
    });*/




    it('should search', function () {
        browser.element(by.css("input[name='q']")).sendKeys('Selenium WebDriver!', protractor.Key.ENTER);

        $$("div.srg div.g").count().then(function (amount) {
            expect(amount).toBe(10);
        });
        browser.element.all(by.css(".srg .g")).get(0).$("h3 > a").getText().then(function (text) {
            expect(text).toEqual("Selenium WebDriver");
        });

        expect(element.all(by.css(".srg .g")).count()).toEqual(10);
        expect(element.all(by.css(".srg .g")).first().$("h3 > a").getText()).toMatch(/Selenium WebDriver/);
        expect($$(".srg .g").get(0).$("h3 > a").getText()).toEqual("Selenium WebDriver");

    });



    it('should search with ctrl+v', function () {
        browser.element(by.css("input[name='q']"))
            .sendKeys(
                'Selenium WebDriver!',
                protractor.Key.chord(protractor.Key.CONTROL, "a"),
                protractor.Key.chord(protractor.Key.CONTROL, "c"));
        browser.get('https://google.com');
        browser.element(by.css("input[name='q']"))
            .sendKeys(
                protractor.Key.chord(protractor.Key.CONTROL, "v"));
        expect($("input[name='q']").getAttribute('value')).toEqual('Selenium WebDriver!');
    });


});