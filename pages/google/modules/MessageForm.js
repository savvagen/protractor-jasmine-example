var ec = protractor.ExpectedConditions;
var path = require('path');


var MessageForm = function () {

    var messageForm = $("div[role='dialog']");
    var addressField = element(by.name("to"));
    var subjectField = element(by.name("subjectbox"));
    var messageField = $("div[role='textbox']");
    var fileDataField = $("input[name='Filedata']");
    var attachment =  $("input[name='attach']");
    var attachedFile = $("div[aria-label^='Прикрепленный файл']");

    this.submitMessage = function(){
        messageForm.element(By.xpath("//tbody/tr/td[1]/div/div[@role='button']")).click();
    };

    this.writeMessage = function(to,subject, message){
        browser.wait(ec.visibilityOf(addressField), 5000);
        addressField.sendKeys(to);
        subjectField.sendKeys(subject, protractor.Key.TAB);
        messageField.sendKeys(message);
        this.submitMessage();
    };

    this.writeMessageWithAttachment = function(to,subject, message, filePath){
        var absolutePath = path.resolve(__dirname, filePath);
        browser.wait(ec.visibilityOf(addressField), 5000);
        addressField.sendKeys(to);
        subjectField.sendKeys(subject, protractor.Key.TAB);
        messageField.sendKeys(message);
        fileDataField.sendKeys(absolutePath);
        browser.wait(ec.visibilityOf(attachedFile, 5000));
        this.submitMessage();
    }

};

module.exports = new MessageForm();