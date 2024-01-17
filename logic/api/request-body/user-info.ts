export interface UserInfo {
    data: {
        withBasicDetails: boolean,
        withCartObject: boolean,
        withCartItems: boolean,
        withCartCheckoutDetails: boolean,
        withMultipass: boolean
    }
}

export const buildUserInfoRequest = (withBasicDetails: boolean, withCartObject: boolean, withCartItems: boolean, withCartCheckoutDetails: boolean, withMultipass: boolean): UserInfo => {
    return {
        data: {
            withBasicDetails,
            withCartObject,
            withCartItems,
            withCartCheckoutDetails,
            withMultipass
        }
    }
}