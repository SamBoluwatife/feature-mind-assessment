import 'cypress-xpath';
import AutomationExercise from '../pageObject/AutomationExercise';
const automationExercise = new AutomationExercise

describe('Feature Mind Assessment', () => {
    
    beforeEach(() => {
        automationExercise.visitUrl()
        //Verify address
        automationExercise.verifyUrl().should('eq', 'https://www.automationexercise.com/')    
    });
    
    it('Navigate to cart and verify that the cart is empty', ()=> {
        automationExercise.getCartIcon().click()
        automationExercise.getEmptyCartMessage().contains('Cart is empty')
    })
    it('Navigate to product and add 3 random products to cart', ()=> {
        automationExercise.getProductIcon().click()
        //Filter by Tshirt under the Men category
        automationExercise.getMenCategory().click()
        automationExercise.getTshirtCategory().click()
        //1st Product
        automationExercise.getProduct1().click()
        //confirm product has been added to cart
        automationExercise.getAddedToCartMessage().contains('Your product has been added to cart')
        automationExercise.getCloseModalBtn().click()
        //2nd Product
        automationExercise.getProduct2().click()
        //confirm product has been added to cart
        automationExercise.getAddedToCartMessage().contains('Your product has been added to cart')
        automationExercise.getCloseModalBtn().click()
        //3rd Product
        automationExercise.getProduct3().click()
        //confirm added to cart
        automationExercise.getAddedToCartMessage().contains('Your product has been added to cart')
        //view cart
        automationExercise.getViewCartBtn().click()
        //confirm the user is redireced to the cart page
        automationExercise.verifyUrl().should('eq', 'https://www.automationexercise.com/view_cart')
        automationExercise.verifyCartPageHeader().contains('Shopping Cart')
        //confirm items in cart and price
        automationExercise.confirmProductInCart().contains('Men Tshirt')
        automationExercise.confirmProductPrice().contains('Rs. 400')
    })
} )
