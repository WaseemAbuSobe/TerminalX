import { test, expect } from "@playwright/test";
import { BrowserWrapper } from "../infra/ui/brwoser-wrapper";
import { ApiCalls } from "../logic/api/api-requtsets";
import uiUrls from "../config/ui-urls.json"
import productConfig from "../config/products.json"
import { buildCartRequest } from "../logic/api/request-body/add-to-cart-api-request";
import { CartPage } from "../logic/ui/cart-page";


test.describe("Shopping Cart Tests", async () => {

    let browser: BrowserWrapper;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
    });
    test.afterEach(async () => {
        browser.closeBrowser()
    })
    test('add to cart', async () => {
        const data = buildCartRequest(productConfig.product1.sku, productConfig.product1.quantity)
        const apiCall = new ApiCalls()
        await apiCall.addItemToCart(data)
        const page = await browser.getPage(uiUrls.cartPageUrl)
        const cartPage = new CartPage(page)
        await expect(cartPage.getItemTitleLocator(productConfig.product1.name)).toBeVisible()
    });

})
