import {Page, expect, test} from '@playwright/test'
import { BrowserWrapper } from '../infra/ui/brwoser-wrapper'
import { OnSale } from '../logic/ui/OnSale';

let browser:BrowserWrapper
let page:Page
test.beforeEach(async()=>{
    browser = new BrowserWrapper()
    page = await browser.getPage('https://www.terminalx.com/');
})
test.afterEach(async()=>{
    await browser.closeBrowser()
})

test('Flow To On Sale Page',async()=>{
    const onSale = new OnSale(page)
    await onSale.flowToOnSalePage()
    await expect(page).toHaveURL('https://www.terminalx.com/on-sale')
})

test('Validate The Sale',async()=>{
    const onSale = new OnSale(page)
    await onSale.flowToOnSalePage()
    expect(await onSale.createSale()).toEqual(await onSale.getNewPrice())
})