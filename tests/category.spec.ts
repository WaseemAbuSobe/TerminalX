import { Page, expect, test } from '@playwright/test'
import { BrowserWrapper } from '../infra/ui/brwoser-wrapper'
import { NavBar } from '../logic/ui/NavBar';
import * as UI_URLS from '../config/ui-urls.json'
import { JacketForMenPage } from '../logic/ui/JacketForMenPage';
import { SideMenu } from '../logic/ui/SideMenu';


test.describe('Flow To Jacket For Men Page And Sort Jackets To red And Validate', () => {
    let browser: BrowserWrapper
    let page: Page

    test.beforeEach(async () => {
        browser = new BrowserWrapper()
        page = await browser.getPage(UI_URLS.websiteUrl);
        await browser.maximizeWindow()
    })

    test.afterEach(async () => {
        await browser.closeBrowser()
    })

    test('Flow To Jacket Category', async () => {
        const navbar = new NavBar(page)
        const jacketForMenPage = new JacketForMenPage(page)
        await navbar.flowToJacketCategory()
        await expect(page).toHaveURL(UI_URLS.jacketPage)
        expect(await jacketForMenPage.getTitle()).toEqual("ג'קטים")
    })

    test('Sort To Red Color And Validate', async () => {
        const navbar = new NavBar(page)
        await navbar.flowToJacketCategory()
        const sideMenu = new SideMenu(page)
        await sideMenu.clickColor()
        await sideMenu.clickRedOption()
        const jacketForMenPage = new JacketForMenPage(page)
        for (let i = 0; i < await jacketForMenPage.getTotalProducts(); i++) {
            expect(await jacketForMenPage.checkColor(i)).toBeTruthy()
        }
    })
})