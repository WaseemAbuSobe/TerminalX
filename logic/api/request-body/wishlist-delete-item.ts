export interface WishListDeleteItem{
    data: {
        id: number
    }
}
export const buildWishlistDeleteItemRequest = (itemId: number) => {
    return {
        data: {
            id: itemId
        }
    }
}

