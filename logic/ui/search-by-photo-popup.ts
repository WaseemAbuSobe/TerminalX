import { Locator, Page } from "playwright";
import { BasePage } from "../../infra/ui/base-page";

export class SearchByPhotoPopup extends BasePage {
    private uploadPhotoButton: Locator
    private productsList: Locator

    constructor(page: Page) {
        super(page)
        this.uploadPhotoButton = page.locator('//button[@data-action-type="open-camera"]')
        this.productsList = page.locator('//div[@class="containerstyled__Container--5waejy cETMyK syte-results-container"]//div[@role="img"]')
        this.initPage()
    }

    uploadPhoto = async (path: string) => {
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.clickUploadButton()
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(path)
    }

    clickUploadButton = async () => {
        await this.uploadPhotoButton.click()
    }

    goToRandomProduct = async () => {
        await this.productsList.nth(0).waitFor({ state: 'visible'})
        const randomIndex:number = this.getRandomInt(0,await this.productsList.count())
        await this.productsList.nth(randomIndex).click()
    }

    getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    } 
}