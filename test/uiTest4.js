import {Builder, By, Key, until} from 'selenium-webdriver';

import ChromeDriver from 'chromedriver';


describe("", ()=> {

    it("", async ()=> {
        let driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('http://www.google.com/ncr');

            let locator = By.name('q');
            let locator02 = By.id('result-stats');
            let locator03 = By.className('class name');

            let locator04 = By.linkText('Elemental Selenium');
            let locator05 = By.partialLinkText('Elemental');

            let element = await driver.findElement(locator02);
            element.sendKeys('webdriver', Key.RETURN);



            let locator06 = By.tagName('a');
            let elementsArray = await driver.findElements(locator06);
            let firstLink = elementsArray[0];

            await driver.wait(until.titleIs('webdriver - Google Search'), 10000);
        } finally {
            await driver.quit();
        }

    });

});