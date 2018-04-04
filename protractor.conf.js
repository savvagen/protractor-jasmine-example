var AllureReporter = require('jasmine-allure-reporter');
const { SpecReporter } = require('jasmine-spec-reporter');




exports.config = {


    //Running from Selenoid

    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // capabilities: {
    //     'browserName': 'chrome',
    //     'version': '63.0',
    //     'enableVNC': true,
    //     'enableVideo': true,
    //     'videoName': 'protractor-test.mp4',
    //     'name': 'protractor-test.mp4',
    //     'screenResolution': '1960x1280x24',
    //
    //     framework: "jasmine",
    //     getPageTimeout: 10000,
    //     allScriptsTimeout: 10000,
    //     baseUrl: 'http://juliemr.github.io',
    //     specs: ['./specs/calculator-specs-spec-allure.js']
    // },


    // Or run selenoid in parallel

    // multiCapabilities: [{
    //     'browserName': 'chrome',
    //     'version': '63.0',
    //     'enableVNC': true,
    //     'enableVideo': true,
    //     'videoName': 'protractor-test.mp4',
    //     'screenResolution': '1960x1280x24',
    //     specs: ['demo-spec.js']
    // },{
    //     'browserName': 'firefox',
    //     'version': '57.0',
    //     'enableVNC': true,
    //     'enableVideo': true,
    //     'screenResolution': '1960x1280x24',
    //     specs: ['demo-spec.js']
    // }],


    //Running from Selenium grid (standalone server)

    seleniumAddress: "http://localhost:4444/wd/hub",
    seleniumPort: '4444',
    // seleniumServerJar: './drivers/selenium-server-standalone-3.11.0.jar',
    // cleadirectConnect: true,
    // chromeDriver: './drivers/chromedriver',
    // geckoDriver: './drivers/geckodriver',


    // capabilities: {
    //     "browserName": "chrome",
    //     maxInstances: 2,
    //     specs: ['demo-spec.js', 'calculator-specs-spec-1.js']
    // },


    //You can use both "count" as well "maxInstances"

    // multiCapabilities: [{
    //         "browserName": "chrome",
    //         shardTestFiles: true,
    //         maxInstances: 1,
    //         specs: ['./specs/calculator-spec-async.js'],
    //     },
    //     {
    //         "browserName": "firefox",
    //         "count": 1,
    //         specs: ['./specs/calculator-spec-async.js'],
    //     }],

    capabilities: {
        "browserName": "chrome",
        "count": 1,
        //specs: ["./specs/google-specs/google_*.js"]
    },

    framework: "jasmine",

    getPageTimeout: 10000,
    allScriptsTimeout: 10000,
    baseUrl: 'https://juliemr.github.io',

    specs: ['./specs/calculator-specs/calculator-spec-allure.js'],
    suites: {
        calculator: ['specs/calculator-specs/*-spec-1.js', 'specs/calculator-specs/*-spec-2.js'],
        google: ['specs/google-specs/google_*.js']
    },

    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 20000,
        print: function() { }
    },


    onPrepare: function () {
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            });
        });
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
        browser.driver.manage().window().setSize(1920, 1080);
        browser.ignoreSynchronization = false
    },

    onCleanUp: function () {
    }

};






// ---------- Protractor tutorials
// https://www.protractortest.org/#/tutorial
// http://stepansuvorov.com/blog/2014/02/angularjs-protractor/
// https://kurapov.ee/rus/lab/quality_control/frontend/
// https://makeomatic.ru/blog/2015/01/17/Protractor_testing2/
// Waiters: https://dou.ua/forums/topic/20115/
// https://eclipsesource.com/blogs/2014/03/27/mocks-in-jasmine-tests/
// https://www.protractortest.org/#/debugging
// ---------- Start with Type Script
// https://code.tutsplus.com/tutorials/getting-started-with-end-to-end-testing-in-angular-using-protractor--cms-29318
// http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html
// ---------- Integration with Mocha and Chai
// http://www.protractortest.org/#/frameworks
// https://mochajs.org/
//
//
//
// Узнать новенькое
// http://automated-testing.info/t/napisanie-testov-na-js-protractor-vopros-udobstva/10690/13
// CodeceptJs Framework --- https://codecept.io/angular/
//
// ---- Supertest library for REST API
// https://github.com/WebDevelopmentClub/book/wiki/Mocha,-Karma-and-Protractor-tests
//
// ---------- Webdriver IO -----------
// http://webdriver.io/
//
//
// Mocha
// https://github.com/allure-examples/mocha-allure-example/blob/master/test/webdriver-io.spec.js
// https://github.com/allure-examples/mocha-allure-example