const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: true
});

app.use(bodyParser.json());

const emailToSocketMapping = new Map();

io.on('connection', (socket) => {
    console.log('New connection');
  
    socket.on('join-room', (data) => {
      const { roomId, emailId } = data;
      console.log("User", emailId, 'joined room', roomId);
  
      emailToSocketMapping.set(emailId, socket.id);
  
      socket.join(roomId);
      socket.emit('joined-room',{roomId})
      socket.broadcast.to(roomId).emit('user-joined', { emailId });
    });
  });

const PORT = 8000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

io.listen(8001)