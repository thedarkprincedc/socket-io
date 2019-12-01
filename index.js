var app = require('express')();
var http = require('http').createServer(app);
var apiRoutes = require('./libs/api-routes');
var serverSockets = require('./libs/server-sockets')(http)

// http.listen(3000, function(){
//     console.log(`Listening on port 3000`)
// })
app.use(serverSockets);
app.use(apiRoutes);

module.exports = {app, http}