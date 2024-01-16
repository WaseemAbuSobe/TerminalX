import {test, expect, Page} from '@playwright/test';
import {BrowserWrapper} from '../infra/ui/brwoser-wrapper';

import {SearchPage} from '../logic/ui/searchPage';

import {websiteUrl} from '../config/ui-urls.json';
import * as query from '../config/query.json';



test.describe('search test', ()=>{
    let browserWrapper : BrowserWrapper;
    let page : Page;
    let searchPage : SearchPage;

    test.beforeAll(async()=>{
        browserWrapper = new BrowserWrapper();
    })
    
    test.afterEach(async()=>{
        await browserWrapper.closeBrowser();
    })


    test('Perform search on TerminalX ', async () => {
        const page = await browserWrapper.getPage(websiteUrl);
        searchPage = new SearchPage(page);
        await searchPage.clickSearchIcon();
        await searchPage.typeSearch(query.brandSearch);
        await page.keyboard.press('Enter');
        expect(await searchPage.getProductListItemsText(query.brandSearch)).toBeTruthy();
    
        
    });

    test('Perform search from LOW PRICE to high PRICE', async () => {
        const page = await browserWrapper.getPage(websiteUrl);
        searchPage = new SearchPage(page);
        await searchPage.clickSearchIcon();
        await searchPage.typeSearch(query.brandSearch);
        await page.keyboard.press('Enter');
        expect(await searchPage.isSortedLowToHigh()).toBeTruthy();
        
    });


    test('Perform search from High PRICE to Low PRICE', async () => {
        const page = await browserWrapper.getPage(websiteUrl);
        searchPage = new SearchPage(page);
        await searchPage.clickSearchIcon();
        await searchPage.typeSearch(query.brandSearch);
        await page.keyboard.press('Enter');
        expect(await searchPage.isSortedHighToLow()).toBeTruthy();  
    });

    test('Perform filtering by item type', async () => {
        const page = await browserWrapper.getPage(websiteUrl);
        searchPage = new SearchPage(page);
        await searchPage.clickSearchIcon();
        await searchPage.typeSearch(query.brandSearch);
        await page.keyboard.press('Enter');
        expect(await searchPage.checkSizeFilter(query.filteringByHat)).toBeTruthy();
    
        
    });
    
 })




  





