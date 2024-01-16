import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class NavBar extends BasePage {
    private onSaleButton: Locator
    private searchByPhoto: Locator
    constructor(page: Page) {
        super(page)
        this.onSaleButton = page.locator('a[href="/on-sale"]')
        this.searchByPhoto = page.locator('//button[@data-test-id="qa-header-search-camera-button"]')
        this.initPage()
    }
    public async flowToOnSale() {
        await this.onSaleButton.click()
    }

    openSeachByPhoto =async () => {
        await this.searchByPhoto.click()
    }
}