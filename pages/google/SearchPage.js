var ec = protractor.ExpectedConditions;



var url = "https://google.com";
var title = "Google";

var SearchPage = function () {



};

SearchPage.prototype = Object.create({},{


    searchField: { get: function (el) {
        el = element(by.name('q'));
        browser.wait(ec.visibilityOf(el), 5000);
        return el
    }},

    searchResults: { get: function () {  return element.all(by.css(".srg .g"));  }},


    open: { value: function () {
            browser.waitForAngularEnabled(false);
            browser.get(url);
            return this
        }
    },

    search: { value: function (text) {
            this.searchField.sendKeys(text, protractor.Key.ENTER)
        }
    }







});

module.exports = new SearchPage();