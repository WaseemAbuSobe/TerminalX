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

    
    const performSearch = async () => {
        const page = await browserWrapper.getPage(websiteUrl);
        const searchPage = new SearchPage(page);
        await browserWrapper.maximizeWindow();
        await searchPage.clickSearchIcon();
        await searchPage.typeSearch(brandSearch);
        await page.keyboard.press('Enter');
        return searchPage;
    };

    test('Perform search on TerminalX ', async () => {
        const searchPage = await performSearch();
         expect(await searchPage.getProductListItemsText(brandSearch)).toBeTruthy();
    
        
    });

    test('Perform search from LOW PRICE to high PRICE', async () => {
        const searchPage = await performSearch();
        expect(await searchPage.isSortedLowToHigh()).toBeTruthy();
        
    });

    //test('Perform Total Search', async () => {
      //  const searchPage = await performSearch();
        //expect(searchPage.productListCount).toBe(searchPage.expectedCount);
        
    //});
 })



  





