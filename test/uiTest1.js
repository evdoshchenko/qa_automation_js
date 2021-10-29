import {Builder, By, Key, until} from 'selenium-webdriver';

import ChromeDriver from 'chromedriver';


describe("", ()=> {
    this.timeout(10000);
    it("", async ()=> {
        let driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('http://www.google.com/ncr');

            let locator = By.name('q');
            let locator02 = By.id('result-stats');
            let locator03 = By.className('class name');

            let locator04 = By.linkText('Elemental Selenium');
            let locator05 = By.partialLinkText('Elemental');

            let element = await driver.findElement(locator02);
            element.sendKeys('webdriver', Key.RETURN);



            let locator06 = By.tagName('a');
            let elementsArray = await driver.findElements(locator06);
            let firstLink = elementsArray[0];

            let location07= By.xpath('');
            let location08= By.xpath('/html/body/div[1]/div[2]/div[2]/div[1]/form/div[1]/div/div[1]/div/div/input[1]');
            let location09= By.xpath('//form/div[1]/div/div[1]/div/div/input[1]');
            let location10= By.xpath('//*[@name=\'username\']');
            let location11= By.xpath('//*[@name=\'username\'][@id=\'password\']');

            let location13= By.xpath('*[@attribute_name1=\'attribute_value1\' and @attribute_name2=\'attribute_value2’]');
            let location14= By.xpath('*[@attribute_name1=\'attribute_value1\' or @attribute_name2=\'attribute_value2]');
            let location15= By.xpath('*[contains(@attribute_name,\'attribute_value\')]');
            let location16= By.xpath('*[starts-with(@attribute_name,\'attribute_value\')]');
            let location17= By.xpath('*[text()=\'Log In\']\n');
            let location18= By.xpath('//input[@type=\'text\'])[last()]');
            let location19= By.xpath('(//input[@type=\'text\'])[2]');
            let location21= By.xpath('*[@id=\'FirstName\']/following::input[@type=\'text\']');
            let location22= By.xpath('*[@id=\'LastName\']//preceding::input[@type=\'text\']');

            await driver.wait(until.titleIs('webdriver - Google Search'), 10000);
        } finally {
            await driver.quit();
        }

    });

});