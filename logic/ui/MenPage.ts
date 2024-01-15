import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class MenPage extends BasePage{
    private menLogo:Locator
    constructor(page:Page){
        super(page)
        this.initPage()
        this.menLogo = this.page.locator('a[href="men"]')
    }
    public async menLogoIsActive(): Promise<boolean>{
        const menLogoHandle = await this.menLogo.elementHandle();
        const classAttribute = await menLogoHandle?.getAttribute('class');
        return classAttribute?.includes('isActive') || false;
    }
    public async getUrl():Promise<string>{
        return this.page.url()
    }
}