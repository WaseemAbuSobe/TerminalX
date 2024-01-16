import { Locator, Page } from 'playwright';
import { BasePage } from '../../infra/ui/base-page';
export class OnSalePage extends BasePage {

    private oldPrice: Locator
    private newPrice: Locator
    private off: Locator

    constructor(page: Page) {
        super(page)
        this.initPage()
        this.oldPrice = this.page.locator('.row_2tcG.strikethrough_t2Ab.regular-price_35Lt')
        this.newPrice = this.page.locator('.row_2tcG.bold_2wBM.final-price_8CiX')
        this.off = this.page.locator('//div[@class="left_1yUs rtl_1_TU"]//a')
    }

    createSale = async (): Promise<number> => {
        const oldP: number = await this.getOldPrice()
        const offS: number = await this.getOffSale()
        return Number(((oldP) - (oldP * offS)).toFixed(2))
    }
    
    getOffSale = async (): Promise<number> => { return parseFloat((await this.off.first().textContent())?.match(/\d+/)?.[0] || "0") / 100 }

    getNewPrice = async (): Promise<number> => { return parseFloat((await this.newPrice.first().innerText()).replace(/[^\d.]/g, '')) }

    getOldPrice = async (): Promise<number> => { return parseFloat((await this.oldPrice.first().innerText()).replace(/[^\d.]/g, '')) }

}