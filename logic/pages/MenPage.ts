import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class MenPage extends BasePage{
    private menLogo:Locator
    constructor(page:Page){
        super(page)
        this.initPage()
        this.menLogo = page.locator('a[href="men"].universeSelectorLink_1NOl.isActive_1sqk.tx-link_29YD[wz_dt_ref="true"]');
    }
    public async menLogoIsActive(): Promise<boolean>{
        if(this.menLogo){
            return true
        }
        return false
    }
}