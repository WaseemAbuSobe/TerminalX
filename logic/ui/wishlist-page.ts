import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class WishlistPage extends BasePage {

    private itemName = (itemName: string) => this.page.locator(`//div[@class="right_1o65"]//a[text()="${itemName}"]`)
    
    constructor(page: Page) {
        super(page);
        this.initPage();
    }

    getItemTitleLocator =  (itemName: string) => {
        return this.itemName(itemName)
    };
}
