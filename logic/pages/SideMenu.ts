import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class SideMenu extends BasePage {
    private colorButton: Locator
    private redOption: Locator
    
    constructor(page: Page) {
        super(page)
        this.colorButton = this.page.locator('.title_ramR:has-text("צבע")')
        this.redOption = this.page.locator('div[style*="background-color: rgb(255, 0, 0)"]')
    }

    clickColor = async (): Promise<void> => { await this.colorButton.click() }

    clickRedOption = async (): Promise<void> => { await this.redOption.click() }
}