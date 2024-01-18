import { test, expect, Page } from "@playwright/test";
import { BrowserWrapper } from "../infra/ui/brwoser-wrapper";
import uiUrls from "../config/ui-urls.json"
import { Header } from "../logic/ui/header";
import user from "../config/user-credentials.json"


test.describe("Acoount Fanctuonality Tests",async () => {
    let browser: BrowserWrapper;
    let page: Page
    test.beforeEach(async () => {
        browser = new BrowserWrapper();
    });

    test.afterEach(async () => {
        await browser.closeBrowser()
    });

    test('User Login Test', async () => {
        const page = await browser.getPage(uiUrls.websiteUrl)
        const header = new Header(page)
        expect(await header.getLoggedinUserName()).toBe(user.name)
    });

})