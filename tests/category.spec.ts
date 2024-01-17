import { Page, expect, test } from '@playwright/test'
import { BrowserWrapper } from '../infra/ui/brwoser-wrapper'
import { NavBar } from '../logic/ui/nav-bar';
import * as UI_URLS from '../config/ui-urls.json'
import { JacketForMenPage } from '../logic/ui/jacket-for-men-page';
import { SideMenu } from '../logic/ui/side-menu';


test.describe('Sort Jackets To red And Validate', () => {
    let browser: BrowserWrapper
    let page: Page

    test.beforeEach(async () => {
        browser = new BrowserWrapper()
        await browser.maximizeWindow()
    })

    test.afterEach(async () => {await browser.closeBrowser()})

    test('Sort To Red Color And Validate', async () => {
        page = await browser.getPage(UI_URLS.jacketPage);
        const sideMenu = new SideMenu(page)
        await sideMenu.clickColor()
        await sideMenu.clickRedOption()
        const jacketForMenPage = new JacketForMenPage(page)
        for (let i = 0; i < await jacketForMenPage.getTotalProducts(); i++) {
            expect(await jacketForMenPage.checkColor(i)).toBeTruthy()
        }
    })
})