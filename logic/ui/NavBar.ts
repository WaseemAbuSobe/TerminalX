import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class NavBar extends BasePage{
    private onSaleButton:Locator
    private menButton:Locator
    constructor(page:Page){
        super(page)
        this.initPage()
        this.onSaleButton = this.page.locator('a[href="/on-sale"]')
        this.menButton = this.page.locator('a[href="/men"]')
    }
    public async flowToOnSale(){
        await this.onSaleButton.click()
    }

    public async flowToMen(){
        await this.menButton.click()
    }
}