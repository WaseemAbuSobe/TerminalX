import { Page, expect, test } from '@playwright/test'
import { BrowserWrapper } from '../infra/ui/brwoser-wrapper'
import * as UI_URLS from '../config/ui-urls.json'
import { AddressPage } from '../logic/ui/address-page'
import user from "../config/user-credentials.json"
import { ApiCalls } from "../logic/api/api-requtsets";
import { buildAddressRequest } from "../logic/api/request-body/account-address";

test.describe('Add New Address And Validate ', () => {

    let browser: BrowserWrapper
    let page: Page

    test.beforeEach(async () => {
        browser = new BrowserWrapper()
        page = await browser.getPage(UI_URLS.myAdressesPage);
    })

    test.afterEach(async () => { await browser.closeBrowser() })

    test('Add New Address Via Api And Validate Via Ui', async () => {
        const {firstname,lastname,postcode,telephone,city,country_id} = {...user.address}
        const {streetName,streetNumber,homeNumber} = {...user.address.street}
        const data = buildAddressRequest(firstname,lastname,postcode,telephone,city,country_id,{streetName,streetNumber,homeNumber})
        const apiCall = new ApiCalls();
        await apiCall.addNewAdress(data)
        const addressPage = new AddressPage(page)
        await page.reload()
        expect(await addressPage.getFirstName()).toBe(firstname)
        expect(await addressPage.getLastName()).toBe(lastname)
        expect(await addressPage.getCityAddress()).toBe(city)
        expect(await addressPage.getStreetAddress()).toBe(`${streetName}, ${streetNumber}, ${homeNumber}`)
        expect(await addressPage.getMobileNumber()).toBe(telephone)
        expect(await addressPage.getPostCode()).toBe(postcode)
    })

})

