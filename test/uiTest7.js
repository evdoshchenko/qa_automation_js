import {Builder, By, Key, until} from 'selenium-webdriver';

import ChromeDriver from 'chromedriver';
import MainPage from "./pages/mainPage.js";
import ResultsPage from "./pages/resultsPage.js";
import assert from "assert";


describe("", () => {

    it("", async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        let mainPage = new MainPage(driver);
        let resultsPage = new ResultsPage(driver);
        let testParam01 = 'portnov computer school'
        try {
            await mainPage.open();
            await mainPage.typeQuery(testParam01);
            await resultsPage.waitForTitle(testParam01 + ' - Поиск в Google');

            let title = await driver.getTitle();
            assert.ok(title.includes(testParam01));
            let number = await resultsPage.getResultsValue();
            assert.ok(number>100000, "Amount of results " +number +" is less that expected");

        } finally {
            await driver.quit();
        }
    });
});