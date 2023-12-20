// const http=require('http');
 
// const server=http.createServer((req,res)=>{
//     console.log(Harshitasethiya);
// });
// server.listen(4000);
const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, this is the server!\n');
});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/');
  console.log('My name is Harshita sethiya.');
});
