const server = require('../index');
const assert = require('assert')
const chai = require('chai')
const expect = chai.expect;
const chaiHttp = require('chai-http')
chai.use(chaiHttp);
chai.should();
var io = require('socket.io-client');
var socket;

describe('Server - HTTP API', function () {
    beforeEach(function () {
        server.http.listen(4000);
    })
    afterEach(function () {
        server.http.close();
    })
    it('Should listen successfully', function (done) {
        expect(server.http.listening).to.equal(true);
        done();
    })
    it('GET /status Should return true', function (done) {
        chai.request(server.app)
            .get('/status')
            .end(function (error, response) {
                response.should.have.status(200);
                expect(response.body.status).to.equal(true)
                done();
            })
    })
})