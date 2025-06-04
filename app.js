const http = require('http');

// create server retrun the instance of the server and we need to tell server to listen on this port
const server=http.createServer((req, res) => {
console.log('request ', req.url, req.method,req.headers);
}
);


server.listen(3000)

