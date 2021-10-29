import {Builder, By, Key, until} from 'selenium-webdriver';

import ChromeDriver from 'chromedriver';
import assert from "assert";


describe("checkboxes", () =>  {
    it("should be interactive", async () =>  {
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('https://the-internet.herokuapp.com/checkboxes');

            let locator = By.xpath("//input[@type='checkbox']");

            let checkboxes = await driver.findElements(locator);

            let firstCheckBox = checkboxes[0];
            let secondCheckBox = checkboxes[1]
            // await firstCheckBox.click();


            let isChecked = await secondCheckBox.getAttribute("checked");

            if (isChecked) {
                await secondCheckBox.click();
            }

            assert.strictEqual(await secondCheckBox.getAttribute("checked"), null);

            console.log('xpath find all checkboxes');

        } finally {
            await driver.quit();
        }

    });

});