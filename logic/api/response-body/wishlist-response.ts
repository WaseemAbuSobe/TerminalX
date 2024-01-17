export interface WishlistItem {
    id: number;
}

interface Wishlist {
    items_count: number;
    items: WishlistItem[];
}

export interface WishlistResponse {
    data: {
        addProductsToWishlist: {
            changed: number;
            anyWishlist: Wishlist;
        };
    };
}