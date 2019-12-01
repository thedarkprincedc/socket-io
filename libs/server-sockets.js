module.exports = function(http){
    const io = require('socket.io')(http)
    var serverSockets = function(req, res, next){
        res.io = io;
        next();
    }
    var handleClient = function(socket){
        console.log("connected")
        socket.emit('connected', {connected: true});
        socket.on('connection name', function(data){
            console.log('User: %s', data.name)
        })
        socket.on('chat', function(data){
            console.log(data)
            socket.emit('chat', {ack: true});
        })
    }
    var chat = io
        .of('/chat')
        .on('connection', function(socket){
            console.log('connected to /chat')
            socket.emit('a message', {
                that: 'only'
              , '/chat': 'will get'
            });
            // chat.emit('a message', {
            //     everyone: 'in'
            //   , '/chat': 'will get'
            // });
        })
    io.sockets.on('connection', handleClient);
    
    return serverSockets;
}