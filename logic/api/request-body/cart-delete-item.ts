export interface CartDeleteItem{
    data: {
        cart_item_id: number,
        skip_collect: number,
        withMultipass: boolean
    }
}
export const buildCartDeleteItemRequest = (itemId: number) => {
    return {
        data: {
            cart_item_id: itemId,
            skip_collect: 0,
            withMultipass: false
        }
    }
}