
import {Builder, By, Key, until} from 'selenium-webdriver';

import ChromeDriver from 'chromedriver';


describe("", function() {
    this.timeout(10000);

    it("", async function() {
        let driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('https://the-internet.herokuapp.com/login');

            let locator02 = By.id('username');
            let locator03 = By.id('password');

            let element02 = await driver.findElement(locator02);
            element02.sendKeys('tomsmith');

            let element03 = await driver.findElement(locator03);
            element03.sendKeys('SuperSecretPassword!', Key.RETURN);


            let success = By.className('flash success');
            let element04 = await driver.findElement(success);

            await driver.wait(until.elementIsEnabled(element04));
            // let success = By.id('flash');
            // let element04 = await driver.findElement(success);

            // await driver.wait(until.elementTextContains(element04, 'You logged into a secure area!'));
        } finally {
            await driver.quit();
        }

    });

});