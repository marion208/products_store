describe('When the cart is empty', () => {
    const getStore = () => cy.window().its('store').its('saveBuying').its('products');
    console.log(getStore);
    it('Homepage opens correctly', () => {
        cy.visit('http://localhost:3000/');
        cy.url().should('eq', 'http://localhost:3000/');
        cy.title().should('eq', 'Shopping');
        cy.window().its('store').invoke('getState').its('saveBuying').its('products').should('have.length', 3);
        cy.window().its('store').invoke('getState').its('saveBuying').its('products').its(0).its('qty_buy').should('eq', 0);
    })
    it('Every product card show a quantity of zero', () => {
        cy.get('.qty_in_cart').eq(0).should('contain.text', '0');
        cy.get('.qty_in_cart').eq(1).should('contain.text', '0');
        cy.get('.qty_in_cart').eq(2).should('contain.text', '0');
    })
    it('The logo cart shows a quantity of zero', () => {
        cy.get('#sum_qty_cart').should('contain.text', '0');
    })
    it('After clicking on the cart logo, it redirects to cart page', () => {
        cy.get('.link_cart').first().click();
        cy.location('pathname').should('eq', '/cart');
    })
    it('The logo cart still shows a quantity of zero', () => {
        cy.get('#sum_qty_cart').should('contain.text', '0');
    })
    it('Shows no product on the cart', () => {
        cy.get('.little_card').should('not.exist');
    })
    it('Total price of the cart is 0', () => {
        cy.get('#total_cost_cart').should('contain.text', '0');
    })
    it('After clicking on the title on the navbar it redirects to the homepage', () => {
        cy.get('.navbar a').first().click();
        cy.location('pathname').should('eq', '/');
    })
})

describe('When trying to remove products while the cart is empty', () => {
    it('Remove a first product', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.icon_input_quantity').eq(0).click();
        cy.get('.qty_in_cart').eq(0).should('contain.text', '0');
        cy.get('#sum_qty_cart').should('contain.text', '0');
    })
    it('Remove a second product', () => {
        cy.get('.icon_input_quantity').eq(2).click();
        cy.get('.qty_in_cart').eq(1).should('contain.text', '0');
        cy.get('#sum_qty_cart').should('contain.text', '0');
    })
    it('Remove a third product', () => {
        cy.get('.icon_input_quantity').eq(4).click();
        cy.get('.qty_in_cart').eq(2).should('contain.text', '0');
        cy.get('#sum_qty_cart').should('contain.text', '0');
    })
    it('On the cart page, we shouldn\'t see any product', () => {
        cy.get('.link_cart').first().click();
        cy.location('pathname').should('eq', '/cart');
        cy.get('#sum_qty_cart').should('contain.text', '0');
        cy.get('.little_card').should('not.exist');
        cy.get('#total_cost_cart').should('contain.text', '0');
    })
})

describe('When fullfilling the cart', () => {
    it('Adding a first product quantity 1', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.icon_input_quantity').eq(1).click();
        cy.get('.qty_in_cart').eq(0).should('contain.text', '1');
        cy.get('#sum_qty_cart').should('contain.text', '1');
        cy.window().its('store').invoke('getState').its('saveBuying').its('products').its(0).its('qty_buy').should('eq', 1);
    })
    it('On the cart page, we see only the product added with the good quantity and the good total', () => {
        cy.get('.link_cart').first().click();
        cy.window().its('store').invoke('dispatch', { type: 'ADD', id: '0' });
        cy.reload();
        cy.get('#sum_qty_cart').should('contain.text', '1');
        cy.get('.little_card').eq(0).should('exist');
        cy.get('.little_card').eq(1).should('not.exist');
        cy.get('.little_card').eq(2).should('not.exist');
        cy.get('.qty_in_cart').eq(0).should('contain.text', '1');
        cy.get('#total_cost_cart').should('contain.text', '120');
    })
    it('Adding a second product quantity 1', () => {
        cy.get('.navbar a').first().click();
        cy.location('pathname').should('eq', '/');
        cy.get('.icon_input_quantity').eq(3).click();
        cy.get('.qty_in_cart').eq(1).should('contain.text', '1');
        cy.window().its('store').invoke('getState').its('saveBuying').its('products').its(1).its('qty_buy').should('eq', 1);
    })
    it('On the cart page, we see only the two product added with the good quantity and the good total', () => {
        cy.get('.link_cart').first().click();
        cy.window().its('store').invoke('dispatch', { type: 'ADD', id: '0' });
        cy.window().its('store').invoke('dispatch', { type: 'ADD', id: '1' });
        cy.reload();
        cy.get('#sum_qty_cart').should('contain.text', '2');
        cy.get('.little_card').eq(0).should('exist');
        cy.get('.little_card').eq(1).should('exist');
        cy.get('.little_card').eq(2).should('not.exist');
        cy.get('.qty_in_cart').eq(0).should('contain.text', '1');
        cy.get('.qty_in_cart').eq(1).should('contain.text', '1');
        cy.get('#total_cost_cart').should('contain.text', '370');
    })
    it('Adding a third product quantity 1', () => {
        cy.get('.navbar a').first().click();
        cy.location('pathname').should('eq', '/');
        cy.get('.icon_input_quantity').eq(5).click();
        cy.get('.qty_in_cart').eq(2).should('contain.text', '1');
        cy.window().its('store').invoke('getState').its('saveBuying').its('products').its(2).its('qty_buy').should('eq', 1);
    })
    it('On the cart page, we see the three product added', () => {
        cy.get('.link_cart').first().click();
        cy.window().its('store').invoke('dispatch', { type: 'ADD', id: '0' });
        cy.window().its('store').invoke('dispatch', { type: 'ADD', id: '1' });
        cy.window().its('store').invoke('dispatch', { type: 'ADD', id: '2' });
        cy.reload();
        cy.get('#sum_qty_cart').should('contain.text', '3');
        cy.get('.little_card').eq(0).should('exist');
        cy.get('.little_card').eq(1).should('exist');
        cy.get('.little_card').eq(2).should('exist');
        cy.get('.qty_in_cart').eq(0).should('contain.text', '1');
        cy.get('.qty_in_cart').eq(1).should('contain.text', '1');
        cy.get('.qty_in_cart').eq(2).should('contain.text', '1');
        cy.get('#total_cost_cart').should('contain.text', '450');
    })
})
describe('When removing products from the cart', () => {
    it('Remove the first product of the cart', () => {
        cy.get('.icon_input_quantity').eq(0).click();
        cy.get('.qty_in_cart').eq(0).should('contain.text', '0');
        cy.get('.qty_in_cart').eq(1).should('contain.text', '1');
        cy.get('.qty_in_cart').eq(2).should('contain.text', '1');
        cy.get('#sum_qty_cart').should('contain.text', '2');
        cy.window().its('store').invoke('getState').its('saveBuying').its('products').its(0).its('qty_buy').should('eq', 0);
    })
    it('On the cart page, we see the two products on the cart', () => {
        cy.reload();
        cy.window().its('store').invoke('dispatch', { type: 'ADD', id: '1' });
        cy.window().its('store').invoke('dispatch', { type: 'ADD', id: '2' });
        cy.reload();
        cy.get('#sum_qty_cart').should('contain.text', '2');
        cy.get('.little_card').eq(0).should('exist');
        cy.get('.little_card').eq(1).should('exist');
        cy.get('.little_card').eq(2).should('not.exist');
        cy.get('.qty_in_cart').eq(0).should('contain.text', '1');
        cy.get('.qty_in_cart').eq(1).should('contain.text', '1');
        cy.get('#total_cost_cart').should('contain.text', '330');
    })
    it('Remove the last product from the cart page', () => {
        cy.get('.icon_input_quantity').eq(2).click();
        cy.get('.little_card').eq(0).should('exist');
        cy.get('.little_card').eq(1).should('exist');
        cy.get('.little_card').eq(2).should('not.exist');
        cy.get('.qty_in_cart').eq(0).should('contain.text', '1');
        cy.get('.qty_in_cart').eq(1).should('contain.text', '0');
        cy.get('#sum_qty_cart').should('contain.text', '1');
        cy.window().its('store').invoke('getState').its('saveBuying').its('products').its(2).its('qty_buy').should('eq', 0);
    })
})
