//const server = require('../index');
const assert = require('assert')
const chai = require('chai')
const expect = chai.expect;
const chaiHttp = require('chai-http')
chai.use(chaiHttp);
chai.should();
var io = require('socket.io-client');
var socket;
describe('Server', function () {
    describe('Socket', function () {
        beforeEach(function () {
            // creates server connections
            //server.http.listen(3000);
            socket = io.connect('http://localhost:3000');
        })
        afterEach(function () {
            //server.http.close();
            socket.close();
        })
        // it('Should listen successfully', function (done) {
        //     expect(server.http.listening).to.equal(true);
        //     done();
        // })
        // it('GET /status Should return true', function (done) {
        //     chai.request(server.app)
        //         .get('/status')
        //         .end(function (error, response) {
        //             response.should.have.status(200);
        //             expect(response.body.status).to.equal(true)
        //             done();
        //         })

        // })
        it('SOCKET.IO Should connect and get connected ack', function (done) {
            socket.on('connected', function (data) {
                socket.emit('connection name', {name: 'test1'});
                expect(socket.connected).to.equal(true)
                expect(data.connected).to.equal(true)
                done();
            });
        })
        it('SOCKET.IO Should connect to socket and send chat message', function (done) {
            socket.on('connect', function(){
                expect(socket.connected).to.equal(true)
                socket.emit('chat', { 
                    name: 'test1',
                    message: 'Hi there?'
                })
                socket.on('chat', function(data){
        
                    expect(data.ack).to.equal(true)
                    done()   
                })
                             
            })  
        })

    })
})