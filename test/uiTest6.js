import {Builder, By, Key, until} from 'selenium-webdriver';

import ChromeDriver from 'chromedriver';


describe("", () => {

    it("", async () => {
        let driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('https://evdoshchenko.com');

            let locator = By.partialLinkText('Danil');

            let element = await driver.findElement(locator);
            await element.click();

            let title = await driver.getTitle();
            console.log(title);
            console.log('step');

            // await driver.manage().window().minimize();
            // await driver.wait(until.titleContains('Document'),5000);

            // await driver.wait(until.titleIs('Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro'), 10000);
        } finally {
            await driver.quit();
        }

    });

});