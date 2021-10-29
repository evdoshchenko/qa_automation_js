import {Builder, By, Key, until} from 'selenium-webdriver';

import ChromeDriver from 'chromedriver';


describe("", () => {

    it("", async () => {
        let driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('https://www.youtube.com');

            let locator = By.id('search-container');

            let element = await driver.findElement(locator[1]);
            element.sendKeys('webdriver', Key.RETURN);


            await driver.wait(until.titleContains('webdri2ver'), 10000);
        } finally {
            await driver.quit();
        }

    });

});