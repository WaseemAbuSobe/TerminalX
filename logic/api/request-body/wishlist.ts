export interface Wishlist {
    data: {
        sku: string;
    };
}

export const buildWishlistRequest = (sku: string): Wishlist => {
    return {
        data: {
           sku:sku
        }
    };
};