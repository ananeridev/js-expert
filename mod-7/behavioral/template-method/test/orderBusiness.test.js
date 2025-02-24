import { expect, describe, test, jest, beforeEach} from '@jest/globals';
import BaseBusiness from '../src/business/base/baseBusiness.js';
import { NotImplementedException } from '../src/util/exeption.js';
import OrderBusiness from '../src/business/orderBusiness.js';
import Order from '../src/entities/order.js';


describe('Test suite for template method design pattern', () => { 
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    describe('#OrderBusiness', () => {  
        test('execution order business whithout template method', () => {
            const order = new Order({
                customerId: 1,
                amount: 100.00,
                products: [{ description: 'book'} ]
            })

            const orderBusiness = new OrderBusiness();

            // should follow strictily this order of steps for the test
            const isValid = orderBusiness._validateRequiredFields(order);
            expect(isValid).toBeTruthy();

            const result = orderBusiness._create(order);
            expect(result).toBeTruthy();

         });
        test('execution order business WITH template method', () => {
            const order = new Order({
                customerId: 1,
                amount: 100.00,
                products: [{ description: 'book'} ]
            })

            const orderBusiness = new OrderBusiness();

            // with template method the following steps are guaranteed
            const result = orderBusiness.create(order);
            expect(result).toBeTruthy();
         });
    });
});