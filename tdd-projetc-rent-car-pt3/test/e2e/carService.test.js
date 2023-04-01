const { describe, it, before } = require('mocha')
const { expect } = require('chai')
const request = require('supertest')
const sinon = require('sinon')
const path = require('path')
const CarService = require('./../../src/service/carService')
const Customer = require('./../../src/entities/customer')
const Car = require('./../../src/entities/car')
const SERVER_TEST_PORT = 4000
// só importei, mas vou usá-la no Before

const mocks = {
    validCar: require('./../mocks/valid-car.json'),
    validCarCategory: require('./../mocks/valid-carCategory.json'),
    validCustomer: require('./../mocks/valid-customer.json'),
}

describe('End2End API Suite test', () => {
    let app = {}
    let sandbox = {}

    beforeEach(() => {
        sandbox = sinon.createSandbox()
    })

    afterEach(() => {
        sandbox.restore()
    })

    before(() => {
        const api = require('./../../src/api')
        const carService = new CarService({
            cars: path.resolve(path.join(__dirname, '../', '../', 'database', 'cars.json'))
        })
        const instance = api({ carService })

        app = {
            instance,
            server: instance.initialize(SERVER_TEST_PORT)
        }
    })

    describe('/calculateFinalPrice:post', () => {
        it('given a carCategory, customer and numberOfDays it should calculate final amount in real', async () => {
            const customer = {
                ...mocks.validCustomer,
                age: 50
            }

            const carCategory = {
                ...mocks.validCarCategory,
                price: 37.6
            }

            const numberOfDays = 5

            const body = {
                customer,
                carCategory,
                numberOfDays
            }

            const expected = {
                result: app.instance.carService.currencyFormat.format(244.40)
            }

            const response = await request(app.server)
                .post('/calculateFinalPrice')
                .send(body)
                .expect(200)

            expect(response.body).to.be.deep.equal(expected)
        })
    })

    describe('/getAvailableCar:get', () => {
        it('given a carCategory it should return an available car', async () => {
            const car = mocks.validCar
            const carCategory = {
                ...mocks.validCarCategory,
                carIds: [car.id]
            }

            const expected = {
                result: car
            }

            const response = await request(app.server)
                .post('/getAvailableCar')
                .send(carCategory)
                .expect(200)

            expect(response.body).to.be.deep.equal(expected)
        })
    })

    describe('/rent:post', () => {
        it('given a customer and a car category it should return a transaction receipt', async () => {

            const car = mocks.validCar
            const carCategory = {
                ...mocks.validCarCategory,
                price: 37.6,
                carIds: [car.id]
            }

            const customer = {
                ...mocks.validCustomer,
                age: 20
            }

            const numberOfDays = 5

            const body = {
                customer, carCategory, numberOfDays
            }

            const expectedStructure = {
                result: {
                    customer,
                    car,
                    amount: 0,
                    dueDate: new Date(),
                }
            }

            const response = await request(app.server)
                .post('/rent')
                .send(body)
                .expect(200)


            const getKeys = obj => Object.keys(obj)
            expect(getKeys(response.body)).to.be.deep.equal(getKeys(expectedStructure))
            const { result } = response.body
            const expectedCustomer = new Customer(result.customer)
            const expectedCar = new Car(result.car)
            
            expect(result.customer).to.be.deep.eq(expectedCustomer)
            expect(result.car).to.be.deep.eq(expectedCar)
            expect(result.amount).to.not.be.empty
            expect(result.dueDate).to.not.be.empty
        })
    })

})