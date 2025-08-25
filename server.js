const http = require ("node:http");

const server = http.createServer(function(req, res){

    if(req.url === "/getSecretData"){
        res.end("There is no secret data.");
    }

    //My server is sending hello world to all the request
    res.end("Hello World!"); //end reply to the user
})

server.listen(7777);