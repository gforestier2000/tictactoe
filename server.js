const net = require('net');



const server = net.createServer((c) => {
    console.log("connectionListener");
    // 'connection' listener.
    console.log('client connected');
    console.log(c.address());
    console.log('Socket localAddress.' + c.localAddress);
    console.log('Socket localPort.' + c.localPort);
    c.on('end', () => {
      console.log('client disconnected');
    });
    c.on('data',(data)=>{
        console.log('RECIEVED : ' + data);
    });
    c.write('hello\r\n');
    c.pipe(c); 
  });


server.on('error', (err) => {
    throw err;
  });

server.listen(8124, () => {
    console.log('server bound');
  });