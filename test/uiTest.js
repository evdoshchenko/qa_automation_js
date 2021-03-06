import {Builder, By, Key, until} from 'selenium-webdriver';

import ChromeDriver from 'chromedriver';


describe("", () => {

    it("", async () => {
        let driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('http://www.google.com/ncr');

            let locator = By.name('q');

            let element = await driver.findElement(locator);
            element.sendKeys('webdriver', Key.RETURN);
            // element.sendKeys('webdriver');
            // element.Key.RETURN;


            await driver.wait(until.titleIs('webdriver - Поиск в Google'), 5000);
        } finally {
            await driver.quit();
        }

    });

});