import GeneralPage from './common.page.js';

class ItemPage extends GeneralPage {
  constructor() {
    super('Inventory Item Detail', 'div.inventory_item_container');
  }

  get backButton() {
    return cy.get('button[data-test="back-to-products"]');
  }

  get itemName() {
    return cy.get('div.inventory_details_name');
  }

  get itemDescription() {
    return cy.get('div.inventory_details_desc');
  }

  get itemPrice() {
    return cy.get('div.inventory_details_price');
  }

  get itemImage() {
    return cy.get('img.inventory_details_img');
  }

  addToCartButton(itemId: string) {
    return cy.get(`button[data-test="add-to-cart-${itemId}"]`);
  }

  removeFromCartButton(itemId: string) {
    return cy.get(`button[data-test="remove-${itemId}"]`);
  }

  get removeFromCartButtonSelector() {
    return 'button[data-test*="remove"]';
  }

  open(itemId: string) {
    super.open(`inventory-item.html?id=${itemId}`);
  }
}

export default new ItemPage();
