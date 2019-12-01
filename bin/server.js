const server = require('../index');
const port = 3000

server.http.listen(port, function(){
    console.log('\nListening on port %s', port)
});