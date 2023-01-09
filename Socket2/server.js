const express = require('express');
const http = require('http');
const mysql = require('mysql2');
const path =require('path');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const { userJoin, getCurrentUser} = require('./utils/user');
const hbs = require('express-handlebars');


const app = express();
const server = http.createServer(app);
const io = socketio(server);
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

let con = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: "devlove"
  });
  

const adminName = 'Cinder Bot';

// Run when a client connects
io.on('connection', socket => {
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM users", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });
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
const PORT = 3001 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));

