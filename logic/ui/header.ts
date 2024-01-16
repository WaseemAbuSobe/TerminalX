import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class Header extends BasePage {
    private loggedinUsername: Locator

    constructor(page: Page) {
        super(page)
        this.loggedinUsername = page.locator('//span[@class="profile-button-new-menu-underline_1fv_"]')
        this.initPage()
    }

    getLoggedinUserName = async (): Promise<string> => {
        return await this.loggedinUsername.innerText()
    }
}