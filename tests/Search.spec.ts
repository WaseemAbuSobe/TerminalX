import {test, expect, Page} from '@playwright/test';
import {BrowserWrapper} from '../infra/ui/brwoser-wrapper';

import {SearchPage} from '../logic/ui/searchPage';
import productPhoto from '../config/product-photos.json'
import {websiteUrl} from '../config/ui-urls.json';
import * as query from '../config/query.json';
import { NavBar } from '../logic/ui/nav-bar';
import { SearchByPhotoPopup } from '../logic/ui/search-by-photo-popup';
import { ProductPage } from '../logic/ui/product-page';



test.describe('search test', ()=>{
    let browserWrapper : BrowserWrapper;
    let searchPage : SearchPage;

    test.beforeAll(async()=>{
        browserWrapper = new BrowserWrapper();
    })
    
    test.afterEach(async()=>{
        await browserWrapper.closeBrowser();
    })

    test("Perform Search By Photo",async () => {
        const page = await browserWrapper.getPage(websiteUrl);
        const navBar = new NavBar(page);
        await navBar.openSeachByPhoto()
        const searchPhotoPopup = new SearchByPhotoPopup(page)
        await searchPhotoPopup.uploadPhoto(productPhoto.product1.photoPath)
        await searchPhotoPopup.goToRandomProduct()
        const productPage = new ProductPage(page)
        expect(await productPage.getProductName()).toContain(productPhoto.product1.productType)
        expect(await productPage.getProductColor()).toBe(productPhoto.product1.productColor)
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
        expect(await searchPage.checkTypeFilter(query.filteringByHat)).toBeTruthy();
    });
    
 })




  





