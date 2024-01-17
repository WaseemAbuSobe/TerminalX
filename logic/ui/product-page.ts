import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class ProductPage extends BasePage {
    private productName: Locator
    private productColor: Locator

    constructor(page: Page) {
        super(page)
        this.productName = page.locator('//h1[@data-test-id="qa-pdp-name"]')
        this.productColor = page.locator('//span[@class="label-dynamic_3Y3S"]')
        this.initPage()
    }

    getProductName = async (): Promise<string> => {
        return await this.productName.innerText()
    }

    getProductColor = async (): Promise<string> => {
        return await this.productColor.innerText()
    }
}