import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class NavBar extends BasePage {
    private menButton: Locator
    constructor(page: Page) {
        super(page)
        this.initPage()
        this.menButton = this.page.locator('a[href="/men"]').first()
    }

    flowToMen = async (): Promise<void> => { await this.menButton.click() }
}