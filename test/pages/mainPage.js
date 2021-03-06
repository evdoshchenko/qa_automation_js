import {By, Key} from "selenium-webdriver";

export default  class MainPage {

    driver;
    queryInputByName = By.name('q');
    queryInputById = By.id('q');

    constructor(driver) {
        this.driver = driver;
    }

    async open() {
        await this.driver.get('http://www.google.com/ncr');
    }

    async typeQuery(queryValue) {
        await this.driver.findElement(this.queryInputByName).sendKeys(queryValue, Key.RETURN);
    }
}

