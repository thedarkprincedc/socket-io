//const server = require('../index');
const assert = require('assert')
const chai = require('chai')
const expect = chai.expect;
const chaiHttp = require('chai-http')
chai.use(chaiHttp);
chai.should();
var io = require('socket.io-client');
var socket;

describe('Server - Socket API / Server should be running in background', function () {
    beforeEach(function () {
        socket = io.connect('http://localhost:3000');
    })
    afterEach(function () {
        socket.close();
    })
    it('SOCKET.IO Should connect and get connected ack', function (done) {
        socket.on('connected', function (data) {
            socket.emit('connection name', {
                name: 'test1'
            });
            expect(socket.connected).to.equal(true)
            expect(data.connected).to.equal(true)
            done();
        });
    })
    it('SOCKET.IO Should connect to socket and send chat message', function (done) {
        socket.on('connect', function () {
            expect(socket.connected).to.equal(true)
            socket.emit('chat', {
                name: 'test1',
                message: 'Hi there?'
            })
            socket.on('chat', function (data) {

                expect(data.ack).to.equal(true)
                done()
            })

        })
    })

})