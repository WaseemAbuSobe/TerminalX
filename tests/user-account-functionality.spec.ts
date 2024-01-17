import { test, expect } from "@playwright/test";
import { BrowserWrapper } from "../infra/ui/brwoser-wrapper";
import uiUrls from "../config/ui-urls.json"
import { Header } from "../logic/ui/header";
import user from "../config/user-credentials.json"
import { buildAddressRequest } from "../logic/api/request-body/add-new-address-api-request";
import { ApiCalls } from "../logic/api/api-requtsets";


test.describe("Acoount Fanctuonality Tests",async () => {
    let browser: BrowserWrapper;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
    });

    test.afterEach(async () => {
        browser.closeBrowser()
    });

    test('Login Test', async () => {
        const page = await browser.getPage(uiUrls.websiteUrl)
        const header = new Header(page)
        expect(await header.getLoggedinUserName()).toBe(user.name)
    });

    test.only('Account Add New Adress',async () => {
        const {firstname,lastname,postcode,telephone,city,country_id} = {...user.address}
        const {streetName,streetNumber,homeNumber} = {...user.address.street}
        const data = buildAddressRequest(firstname,lastname,postcode,telephone,city,country_id,{streetName,streetNumber,homeNumber})
        const apiCall = new ApiCalls();
        await apiCall.addNewAdress(data)
        //assert
        
    })

})