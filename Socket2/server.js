const express = require('express');
const http = require('http');
const path =require('path');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const { userJoin, getCurrentUser} = require('./utils/user');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const adminName = 'Cinder Bot';

// Run when a client connects
io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room })=>{
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        //welcome msg
        socket.emit('message', formatMessage(adminName, 'Welcome to Cindir Chat!'));

        //Shows when a user connects
        socket.broadcast.to(user.room)
        .emit('message',formatMessage(adminName, `${user.username} has joined the chat`));
    
    });
    console.log('New WS Connection...');
    

//Listen for msg
socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit('message', formatMessage(user.username, msg));
    });
    //Runs when a user discconects
socket.on('disconnect', () => {
    io.emit('message', formatMessage(adminName, `USER has left the chat`));
});
});
const PORT = 4001 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));