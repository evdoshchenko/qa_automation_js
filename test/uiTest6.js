import {Builder, By, Key, until} from 'selenium-webdriver';

import ChromeDriver from 'chromedriver';


describe("", function() {
    this.timeout(10000);
    it("", async function() {
        let driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('https://evdoshchenko.com');

            let locator = By.partialLinkText('Danil');

            let element = await driver.findElement(locator);
            element.click();
            await driver.manage().window().minimize();
            await driver.wait(until.titleContains('Document'),5000);

            // await driver.wait(until.titleIs('Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro'), 10000);
        } finally {
            await driver.quit();
        }

    });

});