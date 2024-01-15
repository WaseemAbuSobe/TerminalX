import { Locator, Page } from 'playwright';
import { BasePage } from '../../infra/ui/base-page';
export class OnSalePage extends BasePage{

    private oldPrice!:Locator
    private newPrice!:Locator
    private off!:Locator
    constructor(page:Page){
        super(page)
        this.initPage()
        this.oldPrice = this.page.locator('//*[@id="app-root"]/div[2]/main/div[2]/div/div[3]/div[3]/div[2]/ol/li[1]/div[3]/div[1]/div[1]/div/div[2]')
        this.newPrice = this.page.locator('.listing-product_3mjp').first().locator('.row_2tcG.bold_2wBM.final-price_8CiX')
        this.off = this.page.locator('.listing-product_3mjp').first().locator('a[href="/on-sale?stampa_sale=2058"]')
    }
    public async createSale(){
        const oldPrice:number = await this.getOldPrice()
        const offSale = await this.getOffSale()
        return Number(((oldPrice) - (oldPrice*offSale)).toFixed(2))
    }
    public async getNewPrice():Promise<number>{
        return parseFloat((await this.newPrice.innerText()).replace(/[^\d.]/g, ''))
    }

    private async getOldPrice():Promise<number>{
        return parseFloat((await this.oldPrice.innerText()).replace(/[^\d.]/g, ''))
    }
    private async getOffSale():Promise<number>{
        return parseFloat((await this.off.textContent())?.match(/\d+/)?.[0] || "0")/100
    }

}