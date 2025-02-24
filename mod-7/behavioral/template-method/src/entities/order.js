export default class Order { 
    constructor({customerId, amount, products}) { 
        this.customerId = customerId;
        this.amount = amount;
        this.products = products;
    }
}