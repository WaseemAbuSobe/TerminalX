import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class JacketForMenPage extends BasePage {
    private title: Locator
    private totalProducts: Locator
    private colorTitle: Locator

    constructor(page: Page) {
        super(page)
        this.title = this.page.locator('h1').first()
        this.totalProducts = this.page.locator('span[data-test="search-totals"]')
        this.colorTitle = this.page.locator('//li[@class="listing-product_3mjp"]//div[@title="אדום : צבע"]')
    }

    getTitle = async (): Promise<string> => { return await this.title.innerText() }

    getTotalProducts = async (): Promise<number> => { return Number(await this.totalProducts.innerText()) }

    checkColor = async (index: number): Promise<boolean> => {
        try {
            const colorTitleAtIndex = this.colorTitle.nth(index);
            await colorTitleAtIndex.waitFor({ state: 'visible' });
            return true;
        } catch (error) {
            console.error(`Error checking color at index ${index}: ${error}`);
            return false;
        }
    }

}