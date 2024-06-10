const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('messagebyUser', (message) => {
    io.emit('messagebyUser', message);
  });
  
 
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(2211, () => {
  console.log('listening on *:3000');
});
