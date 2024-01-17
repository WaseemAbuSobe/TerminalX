import { Page, expect, test } from '@playwright/test'
import { BrowserWrapper } from '../infra/ui/brwoser-wrapper'
import { NavBar } from '../logic/ui/nav-bar';
import * as UI_URLS from '../config/ui-urls.json'
import { MenPage } from '../logic/ui/men-page';

test.describe('Flow To Men Page And Validate', () => {
    let browser: BrowserWrapper
    let page: Page

    test.beforeEach(async () => {
        browser = new BrowserWrapper()
        page = await browser.getPage(UI_URLS.websiteUrl);
    })

    test.afterEach(async () => {
        await browser.closeBrowser()
    })

    test('Flow To Men Page', async () => {
        const navbar = new NavBar(page)
        await navbar.flowToMen()
        await expect(page).toHaveURL(UI_URLS.menPage)
    })

    test('Validate the men Page', async () => {
        const navbar = new NavBar(page)
        await navbar.flowToMen()
        const menPage = new MenPage(page)
        expect(await menPage.menLogoIsActive()).toBeTruthy()
    })
})