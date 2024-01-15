import { Locator, Page, ElementHandle  } from '@playwright/test';
import { BasePage } from '../../infra/ui/base-page';


export class SearchPage extends BasePage {

     // LOCATORS
    private readonly searchIcon: Locator;
    private readonly searchInput: Locator ;
    private readonly searchClick: Locator;
    private readonly productList: Locator;
    private readonly sortField :Locator;
    private readonly sortedPrice :Locator;
    private readonly sortedItems :Locator;
   
    constructor(page:Page){
        super(page)
        this.searchIcon = page.locator('.search-button_1ENs')
        this.searchInput = page.getByPlaceholder('חפשו שם של מותג, מוצרים ועוד...')
        this.searchClick = page.locator('.qa-search-box-submit-button')
        this.productList = page.locator('.product-list_yyTm')
        this.sortField = page.locator('.select_zdc5 rtl_62yk')
        this.sortedPrice = page.locator('.select_zdc5 rtl_62yk :text-is("מחיר: מהנמוך לגבוה")')
        this.sortedItems = page.locator('.product-list_yyTm')
        this.initPage()
    }
    async clickSearchIcon() {
        await this.searchIcon.click();
    }

    async SearchClick() { 
        await this.searchClick.click();
    }

    async typeSearch(query: string) {
        await this.searchInput.fill(query);
      }

    async getProductListItemsText(query: string) {
        for (let i = 0; i < 3; i++) {
            if(!this.productList.locator(".right_1o65", { hasText: query }).nth(i)) {
               return false;
            }  
        }
        return true;
    }

    async clickSortFieldButton(){
        await this.sortField.click();
    }
    

    async clickSortedPriceButton(){
        await this.sortedPrice.click();
    }

    async navigateToSortedItems(){
        await this.clickSortFieldButton();
        await this.clickSortedPriceButton();
    }


    async isSortedLowToHigh(){
        for (let i = 0; i < await this.sortedItems.count() - 1; i++) {
            if (this.sortedItems.nth(i) > this.sortedItems.nth(i + 1)) {
                return false; 
            }
        }
        return true; 

    }
}
    
    
    
    
    



 
