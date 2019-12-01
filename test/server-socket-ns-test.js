//const server = require('../index');
const assert = require('assert')
const chai = require('chai')
const expect = chai.expect;
const chaiHttp = require('chai-http')
chai.use(chaiHttp);
chai.should();
var io = require('socket.io-client');


describe('Server - Socket Namespace API / Server should be running in background', function () {
    var chat;
    beforeEach(function () {
        chat = io.connect('http://localhost:3000/chat');
    })
    afterEach(function () {
        chat.close();
    })
    it('SOCKET.IO Should connect and get connected ack', function (done) {
        chat.on('connect', function(){
            chat.emit('hi')
            
        })
        chat.on('a message', function(data){
            console.log(data)
            done();
        })
    })
})