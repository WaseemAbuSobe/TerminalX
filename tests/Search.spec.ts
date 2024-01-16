import {test, expect} from '@playwright/test';
import {BrowserWrapper} from '../infra/ui/brwoser-wrapper';
import {SearchPage} from '../logic/pages/searchPage';

import {websiteUrl} from '../config/ui-urls.json';

import {brandSearch} from '../config/brandSearch.json'

test.describe('search test', ()=>{
    let browserWrapper : BrowserWrapper;

    test.beforeAll(async()=>{
        browserWrapper = new BrowserWrapper();
    })

    test.beforeEach(async()=>{
        await browserWrapper.maximizeWindow();
    })
    
    test.afterEach(async()=>{
        await browserWrapper.closeBrowser();
    })


    test('Perform search on TerminalX ', async () => {
        const searchPage = await performSearch();
         expect(await searchPage.getProductListItemsText(brandSearch)).toBeTruthy();
    
        
    });

    test('Perform search from LOW PRICE to high PRICE', async () => {
        const searchPage = await performSearch();
        expect(await searchPage.isSortedLowToHigh()).toBeTruthy();
        
    });



  





