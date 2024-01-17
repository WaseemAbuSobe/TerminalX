import { BasePage } from "../../infra/ui/base-page";
import { Locator, Page } from "playwright";



export class AddressPage extends BasePage {

    private numberOfAddresses: Locator
    private addressTable: Locator
    private cityAddress: Locator
    private streetAdress: Locator
    private numberAddress: Locator
    private mobileNumber: Locator
    private postcode: Locator

    constructor(page: Page) {
        super(page)
        this.numberOfAddresses = page.locator('//div[@class="addresses-count_3U4L rtl_1w0V"]')
        this.addressTable = page.locator('tr')
        this.streetAdress = this.addressTable.locator('td').nth(2)
        this.numberAddress = this.addressTable.locator('td').nth(2)
        this.cityAddress = this.addressTable.locator('td').nth(3)
        this.postcode = this.addressTable.locator('td').nth(6)
        this.mobileNumber = this.addressTable.locator('td').nth(7)
    }

    checkAddress = async (city_address: string, street_address: string, number_address: string, mobile_address: string, postcode_address: string) :Promise<boolean> => {
        await this.addressTable.first().waitFor({state:"visible"})
        const loops = await this.getNumberOfAddresses()
        for (let i = 1; i < loops; i++) {
            this.addressTable = this.page.locator('tr').nth(i)
            if (
                (await this.getCityAddress()).includes(city_address) && (await this.getStreetAddress()).includes(street_address) &&
                (await this.getNumberAddress()).includes(number_address) && (await this.getMobileNumber()).includes(mobile_address) &&
                (await this.getPostCode()).includes(postcode_address) ) { return true }
        }
        return false
    }

    getNumberOfAddresses = async (): Promise<number> => { return parseInt(await this.numberOfAddresses.innerText()) }

    getStreetAddress = async (): Promise<string> => { return (await this.streetAdress.innerText()) }

    getNumberAddress = async (): Promise<string> => { return (await this.numberAddress.innerText()) }

    getCityAddress = async (): Promise<string> => { return (await this.cityAddress.innerText()) }

    getPostCode = async (): Promise<string> => { return (await this.postcode.innerText()) }

    getMobileNumber = async (): Promise<string> => { return (await this.mobileNumber.innerText()) }

}