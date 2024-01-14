import {Page, expect, test} from '@playwright/test'
import { BrowserWrapper } from '../infra/ui/brwoser-wrapper'
import { OnSale } from '../logic/ui/OnSale';
import { NavBar } from '../logic/ui/NavBar';
import * as fs from 'fs';

let browser:BrowserWrapper
let page:Page
const configFile = fs.readFileSync('./configs/ui-urls.json', 'utf-8');
const UI_URLS = JSON.parse(configFile);
test.beforeEach(async()=>{
    browser = new BrowserWrapper()
    page = await browser.getPage(UI_URLS.mainPage);
})
test.afterEach(async()=>{
    await browser.closeBrowser()
})

test('Flow To On Sale Page',async()=>{
    const navbar = new NavBar(page)
    await navbar.flowToOnSale()
    await expect(page).toHaveURL('https://www.terminalx.com/on-sale')
})

test('Validate The Sale',async()=>{
    const navbar = new NavBar(page)
    await navbar.flowToOnSale()
    const onSale = new OnSale(page)
    expect(await onSale.createSale()).toEqual(await onSale.getNewPrice())
})