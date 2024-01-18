import { test, expect, Page } from "@playwright/test";
import { BrowserWrapper } from "../infra/ui/brwoser-wrapper";
import { ApiCalls } from "../logic/api/api-requtsets";
import uiUrls from "../config/ui-urls.json"
import productConfig from "../config/products.json"
import { buildCartRequest } from "../logic/api/request-body/cart";
import { CartPage } from "../logic/ui/cart-page";
import user from "../config/user-credentials.json"
import { buildUserInfoRequest } from "../logic/api/request-body/user-info";
import { UserInfo } from "../logic/api/response-handler/user-info";
import { buildCartDeleteItemRequest } from "../logic/api/request-body/cart-delete-item";


test.describe("Shopping Cart Tests", async () => {

    let browser: BrowserWrapper;
    let itemId: number;
    let userinfo: UserInfo;
    let itemSku: string;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
    });

    test.afterEach(async () => {
        const { withBasicDetails, withCartObject, withCartItems, withCartCheckoutDetails, withMultipass } = { ...user.info }
        const data = buildUserInfoRequest(withBasicDetails, withCartObject, withCartItems, withCartCheckoutDetails, withMultipass)
        const apiCall = new ApiCalls();
        const response = await apiCall.getUserInfo(data)
        userinfo = new UserInfo(response);
        itemId = userinfo.getItemIdBySku(itemSku);
        const deleteItemData = buildCartDeleteItemRequest(itemId);
        await apiCall.deleteItemFromCart(deleteItemData)
        await browser.closeBrowser()
    })
    
    test('Add Item To Cart Via Api And Validate Via Api', async () => {
        const data = buildCartRequest(productConfig.product1.sku, productConfig.product1.quantity)
        itemSku = productConfig.product1.sku
        const apiCall = new ApiCalls()
        const response = await apiCall.addItemToCart(data)
        const page = await browser.getPage(uiUrls.cartPageUrl)
        const cartPage = new CartPage(page)
        await expect(cartPage.getItemTitleLocator(productConfig.product1.name)).toBeVisible()
    });

    test('Free Shipping Above 149₪', async () => {
        const data = buildCartRequest(productConfig.product2.sku, productConfig.product2.quantity)
        itemSku = productConfig.product2.sku
        const apiCall = new ApiCalls()
        await apiCall.addItemToCart(data)
        const page = await browser.getPage(uiUrls.cartPageUrl)
        const cartPage = new CartPage(page)
        expect(await cartPage.getFreeShippingTitle()).toBe("מגיע לך משלוח חינם!")
    });

})


