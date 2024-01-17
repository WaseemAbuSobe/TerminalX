import { ResponseWrapper } from "../../../infra/api/response-wrapper";
import { CurrentUserInfoResponse } from "../response-body/current-user-info";

export class UserInfo {

    private data: CurrentUserInfoResponse;
    constructor(res: ResponseWrapper<CurrentUserInfoResponse>) {
        this.data = res.data;
    }


    getItemsInCart() {
        return this.data.data.currentUserInfo.cart_object.items;
    }

    getNewestItemId() {
        return this.data.data.currentUserInfo.cart_object.items[this.getNumberOfItemsInCart() - 1].id;
    }

    getItemIdBySku(sku: string) {
        return Number(this.getItemBySku(sku)?.id);
    }

    getItemBySku(sku: string) {
        for (let i = 0; i < this.getNumberOfItemsInCart(); i++) {
            if (sku.includes(this.getItemsInCart()[i].product.sku))
                return this.getItemsInCart()[i];
        }
        console.error(`Can't Find Item With sku = ${sku}`);
    }

    getNumberOfItemsInCart() {
        return this.data.data.currentUserInfo.cart_object.items.length;
    }

}