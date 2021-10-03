// untitled.spec.js created with Cypress

describe('Text Suit', () => {

    it('TC1', () => {
      cy.visit('https://arielkiell.wixsite.com/interview')

    // Click on item 4
      cy.get('._3g4hn > :nth-child(4)').click()

    //Click on Black color
     cy.get(':nth-child(2) > .RadioButton2814944650__icon > .Popover791185158__root > .Popover791185158__popoverElement > .ColorPickerItem1936504531__radioOuter > .ColorPickerItem1936504531__radioInner', { timeout: 20000 })
     .should('be.visible').click()
    
    //Select 3 items
     cy.get('._2uERl > input').clear().type('3').blur()

    //Click on "Add to Cart" Button
     cy.contains("Add to Cart").should('be.visible').click()
     cy.get('button[class="buttonnext1472800972__root Focusable3907780744__root Button3423134372__root Button3423134372--fullWidth StatesButton828051268__root AddToCartButton3061789056__addToCartButton"]').click()
     
     //	 //Click on the Button (View cart)
     cy.get('[@id=widget-view-cart-button').click()

     //Get the Total Price
     cy.get('#total-sum').invoke('text').then((text1)=>{
        const num = text1;
        price = new Number(num);
        expect(price).to.eq("75")
     })

    })


  })
