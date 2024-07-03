class AutomationExercise{
    
    visitUrl(){
        return cy.visit('https://www.automationexercise.com/')
    }

    verifyUrl(){
        return cy.url()
    }

    getCartIcon(){
        return cy.get("header[id='header'] li:nth-child(3) a:nth-child(1)")
    }

    getEmptyCartMessage(){
        return cy.get("#empty_cart")
    }

    getProductIcon(){
        return cy.xpath("(//ul[@class='nav navbar-nav']//li//a[@href='/products'])")
    }

    getMenCategory(){
        return cy.xpath("//a[normalize-space()='Men']")
    }

    getTshirtCategory(){
        return cy.get("a[href='/category_products/3']")
    }

    getProduct1(){
        return cy.xpath("(//a[@href='javascript:void();'][normalize-space()='Add to cart'])[1]")
    }

    getAddedToCartMessage(){
        return cy.get(".modal-body")
    }

    getCloseModalBtn(){
        return cy.get(".btn.btn-success.close-modal.btn-block")
    }

    getProduct2(){
        return cy.xpath("(//a[@href='javascript:void();'][normalize-space()='Add to cart'])[3]")
    }

    getProduct3(){
        return cy.xpath("(//a[@href='javascript:void();'][normalize-space()='Add to cart'])[5]")
    }

    getViewCartBtn(){
        return cy.get("p[class='text-center'] a")
    }

    verifyCartPageHeader(){
        return cy.get(".active")
    }

    confirmProductInCart(){
        return cy.get("tr[id='product-2'] td[class='cart_description']")
    }

    confirmProductPrice(){
        return cy.get("tr[id='product-2'] td[class='cart_price'] p")
    }
}
export default AutomationExercise
