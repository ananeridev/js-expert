import { expect, describe, test, jest} from '@jest/globals';
import BaseBusiness from '../src/business/base/baseBusiness';
import { NotImplementedException } from '../src/util/exeption';


describe('#BaseBusiness', () => { 
    test('should throw an error when child class doesnt implement __validateRequiredFields function', () => {
        class ConcreteClass extends BaseBusiness {}
        const concreteClass = new ConcreteClass();
        const validationError = new NotImplementedException(concreteClass._validateRequiredFields.name);
        expect(() => concreteClass.create({})).toThrow(validationError);
    });
    test('should throw and error when __validateRequiredFields returns false', () => {
        const baseBusiness = new BaseBusiness();
        baseBusiness._validateRequiredFields = jest.fn(() => false);
        expect(() => baseBusiness.create({})).toThrow();
    });
    test('should throw and error when child class doesnt implement __create function', () => {
        const baseBusiness = new BaseBusiness();
        baseBusiness._validateRequiredFields = jest.fn(() => true);
        expect(() => baseBusiness.create({})).toThrow();
    });
    test('should call _create and __validateRequiredFields on create', () => {
        const baseBusiness = new BaseBusiness();
        baseBusiness._validateRequiredFields = jest.fn(() => true);
        baseBusiness._create = jest.fn();
        baseBusiness.create({});
        expect(baseBusiness._validateRequiredFields).toHaveBeenCalled();
        expect(baseBusiness._create).toHaveBeenCalled();
    }) 

})