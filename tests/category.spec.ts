import {Page, expect, test} from '@playwright/test'
import { BrowserWrapper } from '../infra/ui/brwoser-wrapper'
import { NavBar } from '../logic/ui/NavBar';
import * as UI_URLS from '../config/ui-urls.json'
import { JacketForMenPage } from '../logic/pages/JacketForMenPage';
import { SideMenu } from '../logic/pages/SideMenu';


let browser:BrowserWrapper
let page:Page
test.beforeEach(async()=>{
    browser = new BrowserWrapper()
    page = await browser.getPage(UI_URLS.websiteUrl);
    await browser.maximizeWindow()
})
test.afterEach(async()=>{
    await browser.closeBrowser()
})

test('Flow To Jacket Category',async()=>{
    const navbar = new NavBar(page)
    const jacketForMenPage = new JacketForMenPage(page)
    await navbar.flowToJacketCategory()
    await expect(page).toHaveURL(UI_URLS.jacketPage)
    expect(await jacketForMenPage.getTitle()).toEqual("ג'קטים")
})

test('Sort To Red Color And Validate',async()=>{
    const navbar = new NavBar(page)
    const jacketForMenPage = new JacketForMenPage(page)
    const sideMenu = new SideMenu(page)
    await navbar.flowToJacketCategory()
    await sideMenu.clickColor()
    await sideMenu.clickRedOption()
    await page.waitForTimeout(1000)
    for(let i=0;i<await jacketForMenPage.getTotalProducts();i++){
        await jacketForMenPage.goToNthProduct(i)
        await page.waitForTimeout(1000)
        expect(await jacketForMenPage.getColor()).toBeTruthy()
        await page.goBack()
        await page.waitForTimeout(1000)
    }
})