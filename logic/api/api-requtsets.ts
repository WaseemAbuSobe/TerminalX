import { apiPostMethod } from "../../infra/api/apiRequests"
import apiUrls from "../../config/api-urls.json"
import { UserCredential } from "./request-body/login"
import { APIRequestContext } from "playwright"
import { CartRequest } from "./request-body/cart"
import { Wishlist } from "./request-body/wishlist"
import { AccountAddress } from "./request-body/account-address"
import { UserInfo } from "./request-body/user-info"
import { CurrentUserInfoResponse } from "./response-body/current-user-info"
import { ResponseWrapper } from "../../infra/api/response-wrapper"
import { WishlistResponse } from "./response-body/wishlist-response"
import { WishListDeleteItem } from "./request-body/wishlist-delete-item"
import { CartDeleteItem } from "./request-body/cart-delete-item"



export class ApiCalls {

    makeLogin = async (data: UserCredential, request: APIRequestContext) => {
        return await apiPostMethod(apiUrls.loginApiUrl, data, request)
    }

    addItemToCart = async (data: CartRequest) => {
        return await apiPostMethod(apiUrls.addToCartApiUrl, data)
    }

    addItemToWishlist = async (data: Wishlist): Promise<ResponseWrapper<WishlistResponse>> => {
        return await apiPostMethod(apiUrls.addToWishlistUrl, data)
    }

    addNewAdress = async (data: AccountAddress) => {
        return await apiPostMethod(apiUrls.addNewAddress, data)
    }

    getUserInfo = async (data: UserInfo): Promise<ResponseWrapper<CurrentUserInfoResponse>> => {
        return await apiPostMethod(apiUrls.CurrentUserInfo, data)
    }

    deleteItemFromCart = async (data: CartDeleteItem) => {
        return await apiPostMethod(apiUrls.deleteCartItem, data)
    }

    deleteItemFromWishlist = async (data: WishListDeleteItem) => {
        return await apiPostMethod(apiUrls.deleteWishListItem, data)
    }


}

