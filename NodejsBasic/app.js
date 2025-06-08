const http=require('http');
const routes=require('./routes')

const server=http.createServer(routes.handler);

server.listen(3000);

// we want to start server automatiocally whern we made change
// we can use nodemon to do that
// npm install nodemon --save-dev 
//make change in package.json file