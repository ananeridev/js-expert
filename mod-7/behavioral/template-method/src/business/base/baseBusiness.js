// garantir que funcoes serao executadas

import { NotImplementedException } from "../../util/exeption";

export default class BaseBusiness {

    // _ classes private (refatorar para TS)
    _validateRequiredFields(data) { 
        throw new NotImplementedException(this._validateRequiredFields.name);
    }

    _create(data) {
        throw new NotImplementedException(this._create.name);
    }

    // martim fowler pattern - validate method flux 
    create(data) {
        const isValid = this._validateRequiredFields(data);
        if(!isValid) throw new Error('invalid data');

        return this._create(data);
    }
}