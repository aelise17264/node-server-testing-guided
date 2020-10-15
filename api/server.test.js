const supertest = require('supertest')
const server = require('./server')

describe('server.js', () => {

    describe('GET /', () => {
    it('should return 200 ok', () => {
        return supertest(server)
        .get('/')
        .then(res => {
            expect(res.status).toBe(200)
        })
    
    })
    it('should return the body of the api which should say "up"', () =>{
        return supertest(server)
        .get('/')
        .then(res => {
            expect(res.body.api).toBe("up")
            //expect(res.body).toEqual({api:"up"})} )
        })
    })
    it('should verify that the response type is JSON', () =>{
        return supertest(server)
        .get('/')
        .then(res => {
            expect(res.type).toMatch(/json/i)
        })
    })    

})
// the res object has a property called body
//write a test for "the body has an api property & the value is 'up'"
})