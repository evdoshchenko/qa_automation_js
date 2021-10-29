import {Builder, By, Key, until} from 'selenium-webdriver';

import ChromeDriver from 'chromedriver';


describe("", () => {

    it("", async function()  {
        let driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('http://www.google.com/ncr');

            let locationWithName = By.xpath('//*[@name=\'q\']');
            let element = await driver.findElement(locationWithName);
            element.sendKeys('Portnov School', Key.RETURN);

            await driver.wait(until.titleIs('Portnov School - Поиск в Google'), 10000);
        } finally {
            await driver.quit();
        }

    });

});