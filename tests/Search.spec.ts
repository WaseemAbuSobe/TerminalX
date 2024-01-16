import {test, expect} from '@playwright/test';
import {BrowserWrapper} from '../infra/ui/brwoser-wrapper';

import {SearchPage} from '../logic/ui/searchPage';

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



    
 })




  





