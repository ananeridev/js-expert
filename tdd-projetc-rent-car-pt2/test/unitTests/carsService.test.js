const { describe, it} = require('mocha') 
const CarService = require('./../../src/service/carService')

const { join } = require('path')
const { expected } = require('chai')

const carsDatabase = join(__dirname, './../../database', "cars.json")

const mocks = {
    validCarCategory: require('./../mocks/valid-carCategory.json'),
    validCar: require('./../mocks/valid-car.json'),
    validCustomer: require('./../mocks/valid')
}


describe('CarService Suite Tests', () => {
    let carService = {}
    before(() => {
        carService = new CarService({
            cars: carsDatabase
        })
    })


    it('given a carCategory it should return an available car', async () => {
        const car = mocks.validCar
        const carCategory = Object.create(mocks.validCarCategory)
        carCategory.ids = [car.id]

        const result = await carService.getAvailableCar(carCategory)
        const expected = car

        expected(result).to.be.deep.equal(expected)

    })
})