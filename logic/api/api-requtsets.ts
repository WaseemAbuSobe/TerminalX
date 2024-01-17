import { apiPostMethod, makeLoginViaApi } from "../../infra/api/apiRequests"
import apiUrls from "../../config/api-urls.json"
import { UserCredential } from "./request-body/login-api-request"
import { APIRequestContext } from "playwright"
import { CartRequest } from "./request-body/add-to-cart-api-request"
import { Wishlist } from "./request-body/add-to-wishlist-api-request"
import { AccountAddress } from "./request-body/add-new-address-api-request"


export class ApiCalls {

    makeLogin = async (data: UserCredential, request: APIRequestContext) => {
        return await makeLoginViaApi(apiUrls.loginApiUrl, data, request)
    }

    addItemToCart = async (data: CartRequest) => {
        return await apiPostMethod(apiUrls.addToCartApiUrl, data)
    }

    addItemToWishlist = async (data: Wishlist) => {
        return await apiPostMethod(apiUrls.addToWishlistUrl, data)
    }

    addNewAdress = async (data: AccountAddress) => {
        return await apiPostMethod(apiUrls.addNewAddress, data)
    }

}

