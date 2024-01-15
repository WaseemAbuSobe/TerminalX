import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class JacketForMenPage extends BasePage{
    private title:Locator
    private products:Locator
    private totalProducts:Locator

    constructor(page:Page){
        super(page)
        this.title = this.page.locator('h1').first()
        this.products = this.page.locator('.product-list_yyTm')
        this.totalProducts = this.page.locator('span[data-test="search-totals"]')
    }

    public async getTitle():Promise<string>{ 
        return await this.title.innerText()
    }

    public async countProductsInThePage():Promise<number>{
        return this.products.locator('li').count()
    }

    public async getTotalProducts():Promise<number>{
        return Number(await this.totalProducts.innerText())
    }

    public async goToNthProduct(index:number){
        await this.products.locator('li').nth(index).click()
    }

    public async getColor():Promise<boolean>{
        const theColor = this.page.locator('.label-dynamic_3Y3S')
        if(await theColor.innerText()==='חמרה' || await theColor.innerText()==='אדום'){return true}
        return false
    }

}