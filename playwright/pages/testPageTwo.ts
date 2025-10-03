import { Page, Locator } from '@playwright/test';

export class TestPageTwo {

    readonly page: Page;
    readonly pageTwoInfo: Locator;
    readonly goBackButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTwoInfo = page.locator('#root > div > div:nth-child(1)')
        this.goBackButton = page.locator('#root > div > div:nth-child(2) > button > span.MuiButton-label')    
    }
}
