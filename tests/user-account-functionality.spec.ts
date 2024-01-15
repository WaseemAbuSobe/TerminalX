import { test, Page } from "@playwright/test";
import { BrowserWrapper } from "../infra/ui/brwoser-wrapper";
import uiUrls from "../config/ui-urls.json"

let browser: BrowserWrapper;
let page :Page

test.describe("Acoount Fanctuonality Tests",async () => {
    test.beforeAll(async () => {
        browser = new BrowserWrapper();
    });
    
    test.only('Login Test', async () => {
        page = await browser.getPage(uiUrls.websiteUrl)
        browser.maximizeWindow()
        await page.waitForTimeout(5000)
    });
})