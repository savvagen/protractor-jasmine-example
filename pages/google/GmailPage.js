var ec = protractor.ExpectedConditions;
var messageForm = require('../../pages/google/modules/MessageForm');

var GmailPage = function () {

    this.newMessageButton = element(by.xpath("//div[contains(text(), 'НАПИСАТЬ')]"));
    this.successMessage = element(by.xpath("/html/body/div[7]/div[3]/div/div[1]/div[5]/div[1]/div/div[3]/div/div/div[2]"));

    this.open = function () {
        browser.get("https://gmail.com");
        return this;
    };

    this.writeMessage = function (to, subject, message) {
        this.newMessageButton.click();
        messageForm.writeMessage(to, subject, message);
        browser.wait(ec.visibilityOf(this.successMessage), 5000);
    };


    this.writeMessageWithAttachment = function (to, subject, message, filePath) {
        this.newMessageButton.click();
        messageForm.writeMessageWithAttachment(to, subject, message, filePath);
        browser.wait(ec.visibilityOf(this.successMessage), 5000);
    }



};
module.exports = GmailPage;

