import { test, expect } from "@playwright/test";
import { BrowserWrapper } from "../infra/ui/brwoser-wrapper";
import { ApiCalls } from "../logic/api/api-requtsets";
import uiUrls from "../config/ui-urls.json"
import productConfig from "../config/products.json"
import { buildWishlistRequest } from "../logic/api/request-body/add-to-wishlist-api-request";
import { WishlistPage } from "../logic/ui/wishlist-page";


test.describe.only("Wishlist Cart Tests", async () => {

    let browser: BrowserWrapper;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
    });
    test.afterEach(async () => {
        browser.closeBrowser()
    })
    test('add item wishlist', async () => {
        const data = buildWishlistRequest(productConfig.product1.sku)
        const apiCall = new ApiCalls()
        await apiCall.addItemToWishlist(data)


        const page = await browser.getPage(uiUrls.wishlistPage)
        await page.waitForTimeout(5000)
        const wishlist = new WishlistPage(page)
        await expect(wishlist.getItemTitleLocator(productConfig.product1.name)).toBeVisible()
    });

})
