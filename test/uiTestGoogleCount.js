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
            await driver.wait(until.titleIs('webdriver - Поиск в Google'), 5000);

            let locators = By.className('g');
            let elements = await driver.findElements(locators);

            for (let i = 1; i<=elements.length-2; i++) {
                let searchResultsXPath = "(//div[@class='g'])[position()=" + i +"]";

                let linkLocator = By.xpath(searchResultsXPath + "/following::a[1]");
                let myLink = await driver.findElement(linkLocator).getAttribute("href");

                let captionLocator = By.xpath(searchResultsXPath + "/following::h3[1]");
                let myCaption = await driver.findElement(captionLocator).getText();

                console.log(i + ". " + myCaption + ". Link: " +myLink);
            }

        } finally {
            await driver.quit();
        }

    });

});