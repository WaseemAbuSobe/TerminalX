import { Locator, Page } from 'playwright';
import { BasePage } from '../../infra/ui/base-page';
export class OnSale extends BasePage {

    private oldPrice!: Locator
    private newPrice!: Locator
    private off!: Locator
    constructor(page: Page) {
        super(page)
        this.initPage()
        this.oldPrice = this.page.locator('//*[@id="app-root"]/div[2]/main/div[2]/div/div[3]/div[3]/div[2]/ol/li[1]/div[3]/div[1]/div[1]/div/div[2]')
        this.newPrice = this.page.locator('//*[@id="app-root"]/div[2]/main/div[2]/div/div[3]/div[3]/div[2]/ol/li[1]/div[3]/div[1]/div[1]/div/div[1]')
        this.off = this.page.locator('//*[@id="app-root"]/div[2]/main/div[2]/div/div[3]/div[3]/div[2]/ol/li[1]/div[3]/div[1]/div[1]/a')
    }
    public async createSale() {
        const oldPrice: number = parseFloat((await this.oldPrice.innerText()).replace(/[^\d.]/g, ''))
        const offSale = parseFloat((await this.off.textContent())?.match(/\d+/)?.[0] || "0") / 100
        return Number(((oldPrice) - (oldPrice * offSale)).toFixed(2))
    }
    public async getNewPrice() {
        const newPrice: number = parseFloat((await this.newPrice.innerText()).replace(/[^\d.]/g, ''))
        return newPrice
    }

    getRegularPrice = async (): Promise<number> => {
        return 1
    }
    
    getSaPrice = async (): Promise<number> => {
        return 1
    }
}