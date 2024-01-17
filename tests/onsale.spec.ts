import { Page, expect, test } from '@playwright/test'
import { BrowserWrapper } from '../infra/ui/brwoser-wrapper'
import { OnSalePage } from '../logic/ui/on-sale-page';
import { NavBar } from '../logic/ui/nav-bar';
import * as UI_URLS from '../config/ui-urls.json'



test.describe('Validate The Sale', () => {
    let browser: BrowserWrapper
    let page: Page

    test.beforeEach(async () => {
        browser = new BrowserWrapper()
        
    })
    
    test.afterEach(async () => {
        await browser.closeBrowser()
    })

    test('Validate The Sale', async () => {
        page = await browser.getPage(UI_URLS.onSalePage);
        const onSale = new OnSalePage(page)
        expect(await onSale.createSale()).toEqual(await onSale.getNewPrice())
    })
})



