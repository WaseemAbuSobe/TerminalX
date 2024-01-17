import { Page, expect, test } from '@playwright/test'
import { BrowserWrapper } from '../infra/ui/brwoser-wrapper'
import * as UI_URLS from '../config/ui-urls.json'
import { AddressPage } from '../logic/ui/address-page'
import { AddNewAddressPage } from '../logic/ui/add-new-address-page'

test.describe('Add New Address And Validate ', () => {

    let browser: BrowserWrapper
    let page: Page

    test.beforeEach(async () => {
        browser = new BrowserWrapper()
        await browser.maximizeWindow()
    })

    test.afterEach(async () => { await browser.closeBrowser() })

    test('Add New Address And Validate', async () => {
        const city_address = 'עין קנייא'
        const street_address = 'עין קנייא'
        const number_address = '1234'
        const postcode_address = '1234'
        const phone_number = '0501234567'

        page = await browser.getPage(UI_URLS.addNewAddressPage);
        const addNewAddress = new AddNewAddressPage(page)
        await addNewAddress.fillAddress(city_address,street_address,number_address,phone_number,postcode_address)

        page = await browser.getPage(UI_URLS.myAdressesPage);
        const addressPage = new AddressPage(page)
        expect( await addressPage.checkAddress(city_address,street_address,number_address,phone_number,postcode_address)).toBeTruthy()

    })

})

