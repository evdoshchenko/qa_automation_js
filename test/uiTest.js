import {Builder, By, Key, until} from 'selenium-webdriver';

import ChromeDriver from 'chromedriver';


describe("", function() {
    this.timeout(10000);
    it("", async function() {
        let driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('http://www.google.com/ncr');

            let locator = By.name('q');

            let element = await driver.findElement(locator);
            element.sendKeys('webdriver', Key.RETURN);


            await driver.wait(until.titleIs('webdriver - Поиск в Google'), 2000);
        } finally {
            await driver.quit();
        }

    });

});