import { BasePage } from "../../infra/ui/base-page";
import { Locator, Page } from "playwright";



export class AddNewAddressPage extends BasePage {
    private cityAddress: Locator
    private streetAdress: Locator
    private numberAddress: Locator
    private mobileNumber: Locator
    private postcode: Locator
    private saveAddressButton: Locator

    constructor(page: Page) {
        super(page)
        this.cityAddress = page.locator('//input[@data-test-id="qa-customer-address-city"]')
        this.streetAdress = page.locator('//input[@data-test-id="qa-customer-address-street"]')
        this.numberAddress = page.locator('input[name="a_number"]')
        this.mobileNumber = page.locator('input[name="telephone"]')
        this.postcode = page.locator('input[name="postcode"]')
        this.saveAddressButton = page.locator('button[type="submit"].tx-link-a.button-botttom_C2WD.tx-link_29YD.btn_1UzJ.btn-yellow_2tf3')
    }

    fillAddress = async (city_address: string, street_address: string, number_address: string, mobile_address: string, postcode_address: string) => {

        await this.fillCityAddress(city_address)

        await this.fillStreetAdrees(street_address)

        await this.fillNumberAddress(number_address)

        await this.fillMobileAddress(mobile_address)

        await this.fillPostCode(postcode_address)

        await this.clickSaveAddress()
    }

    fillCityAddress = async (city_address: string) => {
        await this.cityAddress.click()
        await this.cityAddress.fill(city_address)
    }

    fillStreetAdrees = async (street_address: string) => {
        await this.streetAdress.click()
        await this.page.waitForTimeout(200)
        await this.streetAdress.fill(street_address)
    }

    fillNumberAddress = async (number_address: string) => {
        await this.numberAddress.click()
        await this.numberAddress.fill(number_address)
    }

    fillMobileAddress = async (mobile_address: string) => {
        await this.mobileNumber.click()
        await this.mobileNumber.fill(mobile_address)
    }

    fillPostCode = async (postcode_address: string) => {
        await this.postcode.click()
        await this.postcode.fill(postcode_address)
    }

    clickSaveAddress = async () => {
        await this.page.waitForTimeout(200)
        await this.saveAddressButton.click()
    }
}