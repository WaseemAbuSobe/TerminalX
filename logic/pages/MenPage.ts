import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class MenPage extends BasePage {
    private menLogo: Locator
    constructor(page: Page) {
        super(page)
        this.initPage()
        this.menLogo = page.locator('.universeSelectorLink_1NOl.isActive_1sqk.tx-link_29YD');
    }

    menLogoIsActive = async (): Promise<boolean> => {
        if ((await this.getClassName())?.includes('isActive')) { return true }
        return false
    }

    getClassName = async (): Promise<string | null> => {
        const nameClass: string | null = await this.menLogo.getAttribute('class')
        if (nameClass !== null) { return nameClass }
        return null;
    }
}