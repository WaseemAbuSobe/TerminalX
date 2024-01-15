import { Locator, Page, ElementHandle  } from '@playwright/test';
import { BasePage } from '../../infra/ui/base-page';


export class SearchPage extends BasePage {

     // LOCATORS
    private readonly searchIcon: Locator;
    private readonly searchInput: Locator ;
    private readonly searchClick: Locator;
    private readonly productList: Locator;
   
    constructor(page:Page){
        super(page)
        this.searchIcon = page.locator('.search-button_1ENs')
        this.searchInput = page.getByPlaceholder('חפשו שם של מותג, מוצרים ועוד...')
        this.searchClick = page.locator('.qa-search-box-submit-button')
        this.productList = page.locator('.product-list_yyTm')
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
}
    
    
    
    
    



 
