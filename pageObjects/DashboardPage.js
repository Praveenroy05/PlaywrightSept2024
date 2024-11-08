class DashboardPage{

    constructor(page){
        this.page = page;
        this.products = page.locator("div.card-body")
        this.addToCartSuccessMessage = page.locator("#toast-container")
        this.viewPageProductName = page.locator("div h2")
    }


    async searchProductAndAddToCart(productName){
        await this.products.first().waitFor()
        const countOfProducts = await this.products.count()     
        for(let i=0; i<countOfProducts; i++){ 
            const productText = await this.products.nth(i).locator("b").textContent()
            if(productText === productName) {
                await this.products.nth(i).locator("button .fa-shopping-cart").click() 
                break;
            }
            
        }
    }

    async searchProductAndViewDetails(productName){
        await this.products.first().waitFor()
        const countOfProducts = await this.products.count()     
        for(let i=0; i<countOfProducts; i++){ 
            const productText = await this.products.nth(i).locator("b").textContent()
            if(productText === productName) {
                await this.products.nth(i).locator("button .fa-eye").click() 
                break;
            }
            
        }
    }


}

module.exports = {DashboardPage}