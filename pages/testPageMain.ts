import { Page, Locator } from '@playwright/test';

export class TestPageMain {
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly searchField: Locator;
    readonly createChartButton: Locator;
    readonly nameSort: Locator;
    readonly dateCreatedSort: Locator;
    readonly dateModifiedSort: Locator;
    readonly listNameLineOne: Locator;
    readonly listNameLineTwo: Locator;
    readonly listNameLineThree: Locator;
    readonly listNameLineFour: Locator;
    readonly listNameLineFive: Locator;
    readonly listDateCreatedLineOne: Locator;
    readonly listDateCreatedLineTwo: Locator;
    readonly listDateCreatedLineThree: Locator;
    readonly listDateCreatedLineFour: Locator;
    readonly listDateCreatedLineFive: Locator;
    readonly listDateModifiedLineOne: Locator;
    readonly listDateModifiedLineTwo: Locator;
    readonly listDateModifiedLineThree: Locator;
    readonly listDateModifiedLineFour: Locator;
    readonly listDateModifiedLineFive: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('#root > div > div.MuiToolbar-root.MuiToolbar-regular.MuiToolbar-gutters > div > div > div:nth-child(2) > h5')
        this.searchField = page.locator('#root > div > div.MuiToolbar-root.MuiToolbar-regular.MuiToolbar-gutters > div > div > div:nth-child(1) > div > div > input')
        this.createChartButton = page.locator('#root > div > div.MuiToolbar-root.MuiToolbar-regular.MuiToolbar-gutters > div > div > div:nth-child(3) > button > span.MuiButton-label')
        this.nameSort = page.locator('#root > div > div.root > div.MuiGrid-root.header.MuiGrid-container.MuiGrid-align-items-xs-center.MuiGrid-justify-content-xs-space-between > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6 > p > button > span.MuiButton-label');
        this.dateCreatedSort = page.locator('#root > div > div.root > div.MuiGrid-root.header.MuiGrid-container.MuiGrid-align-items-xs-center.MuiGrid-justify-content-xs-space-between > div:nth-child(2) > p > button > span.MuiButton-label');
        this.dateModifiedSort = page.locator('#root > div > div.root > div.MuiGrid-root.header.MuiGrid-container.MuiGrid-align-items-xs-center.MuiGrid-justify-content-xs-space-between > div:nth-child(3) > p > button > span.MuiButton-label');
        this.listNameLineOne = page.locator('#root > div > div.root > div:nth-child(2) > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6 > p');
        this.listNameLineTwo = page.locator('#root > div > div.root > div:nth-child(3) > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6 > p');
        this.listNameLineThree = page.locator('#root > div > div.root > div:nth-child(4) > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6 > p');
        this.listNameLineFour = page.locator('#root > div > div.root > div:nth-child(5) > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6 > p');
        this.listNameLineFive = page.locator('#root > div > div.root > div:nth-child(6) > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6 > p');
        this.listDateCreatedLineOne = page.locator('#root > div > div.root > div:nth-child(2) > div:nth-child(2) > p');
        this.listDateCreatedLineTwo = page.locator('#root > div > div.root > div:nth-child(3) > div:nth-child(2) > p');
        this.listDateCreatedLineThree = page.locator('#root > div > div.root > div:nth-child(4) > div:nth-child(2) > p');
        this.listDateCreatedLineFour = page.locator('#root > div > div.root > div:nth-child(5) > div:nth-child(2) > p');
        this.listDateCreatedLineFive = page.locator('#root > div > div.root > div:nth-child(6) > div:nth-child(2) > p');
        this.listDateModifiedLineOne = page.locator('#root > div > div.root > div:nth-child(2) > div:nth-child(3) > p');
        this.listDateModifiedLineTwo = page.locator('#root > div > div.root > div:nth-child(3) > div:nth-child(3) > p');
        this.listDateModifiedLineThree = page.locator('#root > div > div.root > div:nth-child(4) > div:nth-child(3) > p');
        this.listDateModifiedLineFour = page.locator('#root > div > div.root > div:nth-child(5) > div:nth-child(3) > p');
        this.listDateModifiedLineFive = page.locator('#root > div > div.root > div:nth-child(6) > div:nth-child(3) > p');
    }

    async goto() {
        await this.page.goto('http://localhost:3000');
    }
}
