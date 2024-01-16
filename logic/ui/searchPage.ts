import { Locator, Page, ElementHandle  } from '@playwright/test';
import { BasePage } from '../../infra/ui/base-page';


export class SearchPage extends BasePage {

     // LOCATORS
    private readonly searchIcon: Locator;
    private readonly searchInput: Locator ;
    private readonly searchClick: Locator;
    private readonly productList: Locator;
    private readonly sortField :Locator;
    private readonly sortFieldSelect : Locator;

   
    constructor(page:Page){
        super(page)
        this.searchIcon = page.locator('.search-button_1ENs')
        this.searchInput = page.getByPlaceholder('חפשו שם של מותג, מוצרים ועוד...')
        this.searchClick = page.locator('.qa-search-box-submit-button')
        this.productList = page.locator('.product-list_yyTm')
        this.sortField = page.locator('.select_zdc5 rtl_62yk')
        this.sortFieldSelect = page.locator('select[name="sortField"]');
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
      

    async selectPriceAscendingOption(){
        await this.sortFieldSelect.selectOption('price_asc');
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


    async isSortedHighToLow(){
        await this.sortFieldSelect.selectOption('price_desc');
        for (let i = 0; i < await this.sortFieldSelect.count() - 1; i++) {
            if (this.sortFieldSelect.nth(i) > this.sortFieldSelect.nth(i + 1)) {
                return false; 
            }
        }
        return true; 
    }


    async isSortedLowToHigh(){
        await this.sortFieldSelect.selectOption('price_asc');
        for (let i = 0; i < await this.sortFieldSelect.count() - 1; i++) {
            if (this.sortFieldSelect.nth(i) > this.sortFieldSelect.nth(i + 1)) {
                return false; 
            }
        }
        return true; 
    }

    
  
  

   
}
    
    
    
    
    



 
