import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class NavBar extends BasePage{
    private onSaleButton:Locator
    constructor(page:Page){
        super(page)
        this.initPage()
        this.onSaleButton = this.page.locator('a[href="/on-sale"]')
    }
    public async flowToOnSale(){
        await this.onSaleButton.click()
    }
}