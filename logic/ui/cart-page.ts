import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class CartPage extends BasePage {

    private itemName = (itemName: string) => this.page.locator(`//a[@class="tx-link-a name_1GBQ tx-link_29YD" and text()="${itemName}"]`)

    constructor(page: Page) {
        super(page);
        this.initPage();
    }

    getItemTitleLocator =  (itemName: string) => {
        return this.itemName(itemName)
    };
}
