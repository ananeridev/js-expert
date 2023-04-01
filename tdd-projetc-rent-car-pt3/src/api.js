const http = require('http')
const CarService = require('./service/carService')

const DEFAULT_PORT = 3000
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json'
}
// criei uma factory default (poderia estar em outro arquivo)
const defaultFactory = () => ({
    carService: new CarService({ cars: './../database/cars.json' })
})



class Api {
    constructor(dependencies = defaultFactory()) {
        this.carService = dependencies.carService
    }

    // transformei em uma funçao
    generateRoutes() {

        return {
            '/rent:post': async (request, response) => {
                for await (const data of request) {
                    try {
                        const { customer, carCategory, numberOfDays } = JSON.parse(data)
                        // alguma validacao top aqui
                        const result = await this.carService.rent(customer, carCategory, numberOfDays)

                        response.writeHead(200, DEFAULT_HEADERS)

                        response.write(JSON.stringify({ result }))
                        response.end()

                    } catch (error) {
                        console.log('error', error)
                        response.writeHead(500, DEFAULT_HEADERS)
                        response.write(JSON.stringify({ error: 'Deu Ruim!' }))
                        response.end()
                    }
                }
            },
            '/calculateFinalPrice:post': async (request, response) => {
                for await (const data of request) {
                    try {
                        const { customer, carCategory, numberOfDays } = JSON.parse(data)
                        // alguma validacao top aqui
                        const result = await this.carService.calculateFinalPrice(customer, carCategory, numberOfDays)

                        response.writeHead(200, DEFAULT_HEADERS)

                        response.write(JSON.stringify({ result }))
                        response.end()

                    } catch (error) {
                        console.log('error', error)
                        response.writeHead(500, DEFAULT_HEADERS)
                        response.write(JSON.stringify({ error: 'Deu Ruim!' }))
                        response.end()
                    }
                }
            },
            '/getAvailableCar:post': async (request, response) => {
                for await (const data of request) {
                    try {
                        const carCategory = JSON.parse(data)
                        // alguma validacao top aqui

                        const result = await this.carService.getAvailableCar(carCategory)

                        response.writeHead(200, DEFAULT_HEADERS)

                        response.write(JSON.stringify({ result }))
                        response.end()

                    } catch (error) {
                        console.log('error', error)
                        response.writeHead(500, DEFAULT_HEADERS)
                        response.write(JSON.stringify({ error: 'Deu Ruim!' }))
                        response.end()
                    }
                }
            },
            default: (request, response) => {
                response.write(JSON.stringify({ success: 'Hello World!' }))
                return response.end();
            }
        }
    }



    handler(request, response) {
        const { url, method } = request
        const routeKey = `${url}:${method.toLowerCase()}`

        const routes = this.generateRoutes()
        const chosen = routes[routeKey] || routes.default

        response.writeHead(200, DEFAULT_HEADERS)

        return chosen(request, response)
    }

    // criei uma funcao, que recebe as dependencias ou usa a factoryDefault
    initialize(port = DEFAULT_PORT) {

        const app = http.createServer(this.handler.bind(this))
            .listen(port, _ => console.log('app running at', port))

        return app
    }

}

if (process.env.NODE_ENV !== 'test') {
    const api = new Api()
    api.initialize()
}

module.exports = (dependencies) => new Api(dependencies)