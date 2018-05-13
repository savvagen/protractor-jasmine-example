var searchPage = require('../../pages/google/SearchPage');


describe('Search tests', function () {

    beforeAll(function () {
        //browser.ignoreSynchronization = true;
    });


    beforeEach(function () {
        searchPage.open()
    });

    it('should searchfor Selenium Webdriver', function () {
        searchPage.search("Selenium WebDriver");
        expect(searchPage.searchResults.count()).toEqual(10)
    });


});