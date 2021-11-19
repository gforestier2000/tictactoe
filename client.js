const net = require('net');

let socket = net.createConnection(8124, 'localhost');
console.log('Socket created.');

socket.on('data', function(data) {
    console.log('Socket on data.');
  // Log the response from the HTTP server.
  console.log('RESPONSE: ' + data);
}).on('connect', function() {
    console.log('Socket on connect.');
  // Manually write an HTTP request.
  //socket.write("GET / HTTP/1.0\r\n\r\n");
  console.log('Socket localAddress.' + socket.localAddress);
console.log('Socket localPort.' + socket.localPort);
  socket.write("Salut");
}).on('end', function() {
    console.log('Socket on end.');
  console.log('DONE');
});