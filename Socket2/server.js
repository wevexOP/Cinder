const express = require('express');
const http = require('http');
const path =require('path');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages')

const app = express();
const server = http.createServer(app);
const io = socketio(server);
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const adminName = 'Cinder Bot';

// Run when a client connects
io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room})=>{

    });
    console.log('New WS Connection...');
    socket.emit('message', formatMessage(adminName, 'Welcome to Cindir Chat!'));

    //Shows when a user connects
    socket.broadcast.emit('message',formatMessage(adminName, 'A user has joined the chat'));

//Runs when a user discconects
socket.on('disconnect', () => {
    io.emit('message', formatMessage(adminName,'A user has left the chat'));
});
//Listen for msg
socket.on("chatMessage", (msg) => {
    io.emit('message', formatMessage('USER',msg))
    });
});
const PORT = 4001 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));