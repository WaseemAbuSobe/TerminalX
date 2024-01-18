import { BasePage } from "../../infra/ui/base-page";
import { Locator, Page } from "playwright";



export class AddressPage extends BasePage {
    private name: Locator
    private lastName: Locator
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
        this.name = this.addressTable.locator('td').nth(0)
        this.lastName = this.addressTable.locator('td').nth(1)
        this.streetAdress = this.addressTable.locator('td').nth(2)
        this.numberAddress = this.addressTable.locator('td').nth(2)
        this.cityAddress = this.addressTable.locator('td').nth(3)
        this.postcode = this.addressTable.locator('td').nth(6)
        this.mobileNumber = this.addressTable.locator('td').nth(7)
        this.initPage()
    }

    getName = async (): Promise<string> => { return (await this.name.innerText()) }

    getLastName = async (): Promise<string> => { return (await this.lastName.innerText()) }

    getNumberOfAddresses = async (): Promise<number> => { return parseInt(await this.numberOfAddresses.innerText()) }

    getStreetAddress = async (): Promise<string> => { return (await this.streetAdress.innerText()) }

    getNumberAddress = async (): Promise<string> => { return (await this.numberAddress.innerText()) }

    getCityAddress = async (): Promise<string> => { return (await this.cityAddress.innerText()) }

    getPostCode = async (): Promise<string> => { return (await this.postcode.innerText()) }

    getMobileNumber = async (): Promise<string> => { return (await this.mobileNumber.innerText()) }

}