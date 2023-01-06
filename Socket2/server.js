const express = require('express');
const http = require('http');
const path =require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when a client connects
io.on('connection', socket => {
    console.log('New WS Connection...');
    socket.emit('message', 'Welcome to Cindir Chat!');

    //Shows when a user connects
    socket.broadcast.emit('message', 'A user has joined the chat');

//Runs when a user discconects
socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
});
//Listen for msg
socket.on("chatMessage", (msg) => {
    io.emit('message', msg)
});
});
const PORT = 4001 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));