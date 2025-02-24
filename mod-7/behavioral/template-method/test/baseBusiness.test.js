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
        const VALIDATION_SUCCESSED = true;
        class ConcreteClass extends BaseBusiness {
            _validateRequiredFields() {
                return VALIDATION_SUCCESSED;
            }
        }

        const concreteClass = new ConcreteClass();
        const validationError = new NotImplementedException(concreteClass._create.name);
        expect(() => concreteClass.create({})).toThrow(validationError);
    });
    test('should call _create and __validateRequiredFields on create', () => {
        const VALIDATION_SUCCESSED = true;
        const CREATE_SUCCESSED = true;

        class ConcreteClass extends BaseBusiness {
            _validateRequiredFields = jest.fn(() => VALIDATION_SUCCESSED);
            _create = jest.fn(() => CREATE_SUCCESSED);
        }

        const concreteClass = new ConcreteClass();
        const createFromBaseClass = jest.spyOn(
            BaseBusiness.prototype,
            BaseBusiness.prototype.create.name
        )

        const result = concreteClass.create({});
        expect(result).toBeTruthy();
        expect(createFromBaseClass).toHaveBeenCalled();


    }) 

})