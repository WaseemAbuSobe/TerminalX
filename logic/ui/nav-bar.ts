import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class NavBar extends BasePage {
    private menButton: Locator
    private searchByPhotoButton: Locator
    constructor(page: Page) {
        super(page)
        this.initPage()
        this.menButton = page.locator('a[href="/men"]').first()
        this.searchByPhotoButton = page.locator('//button[@data-test-id="qa-header-search-camera-button"]')
    }

    flowToMen = async (): Promise<void> => { await this.menButton.click() }

    openSeachByPhoto = async () => {
        await this.searchByPhotoButton.click()
    }
}