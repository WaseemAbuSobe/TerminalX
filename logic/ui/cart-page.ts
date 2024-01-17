import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class CartPage extends BasePage {

    private itemName = (itemName: string) => this.page.locator(`//a[@class="tx-link-a name_1GBQ tx-link_29YD" and text()="${itemName}"]`)
    private freeShippingTitle: Locator
    constructor(page: Page) {
        super(page);
        this.freeShippingTitle = page.locator('//div[@class="title_1Fq3"]')
        this.initPage();
    }

    getItemTitleLocator = (itemName: string) => {
        return this.itemName(itemName)
    };

    getFreeShippingTitle = async (): Promise<string> => {
        return await this.freeShippingTitle.innerText()
    }
}
