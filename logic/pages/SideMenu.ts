import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";
import { red } from "colors";

export class SideMenu extends BasePage{
    private colorButton:Locator
    private redOption!:Locator
    constructor(page:Page){
        super(page)
        this.colorButton = this.page.locator('.title_ramR:has-text("צבע")')
    }

    public async clickColor(){
        await this.colorButton.click()
    }
    public async clickRedOption(){
        this.redOption = this.page.locator('div[style*="background-color: rgb(255, 0, 0)"]')
        await this.redOption.click()
    }

}