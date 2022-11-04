const Service = require('./service')
const sinon = require('sinon')
const BASE_URL_1 = "https://swapi.dev/api/planets/1/"
const BASE_URL_2 = "https://swapi.dev/api/planets/2/"
const mocks = {
    tatooine: require('./mocks/tatooine.json'),
    alderaan: require('./mocks/alderaan.json')
}
;
(async () => {
    
    // goes to internet
    // {
    //     const service = new Service()
    //     const wihtoutStub = await service.makeRequest(BASE_URL_1)
    //     console.log(JSON.stringify(wihtoutStub))
    // }

    const service = new Service()
    const stub = sinon.stub(service, service.makeRequest.name)

    stub
    .withArgs(BASE_URL_1)
    .resolves(mocks.tatooine)

    stub
    .withArgs(BASE_URL_2)
    .resolves(mocks.alderaan)

    {
        const response = await service.makeRequest(BASE_URL_1)
        console.log('response', response)
    }

})()