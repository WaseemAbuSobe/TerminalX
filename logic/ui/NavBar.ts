import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class NavBar extends BasePage {
    private onSaleButton: Locator
    private menButton: Locator
    private jacketForMen: Locator

    constructor(page: Page) {
        super(page)
        this.initPage()
        this.onSaleButton = this.page.locator('a[href="/on-sale"]')
        this.menButton = this.page.locator('a[href="/men"]').first()
        this.jacketForMen = this.page.locator('a[href="/men/jackets-coats/jackets"]')
    }

    flowToOnSale = async (): Promise<void> => { await this.onSaleButton.click() }

    flowToMen = async (): Promise<void> => { await this.menButton.click() }

    flowToJacketCategory = async (): Promise<void> => {
        await this.menButton.hover()
        this.initPage()
        await this.jacketForMen.click()
    }
}