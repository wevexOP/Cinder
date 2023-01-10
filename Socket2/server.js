const path =require('path');
const http = require('http');
const express = require('express');
//const mysql = require('mysql2');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');

const { userJoin, getCurrentUser, userLeave, getRoomUsers} = require('./utils/user');




const app = express();
const server = http.createServer(app);
const io = socketio(server);
// Set static folder

app.use(express.static(path.join(__dirname, "public")));

/*let con = mysql.createConnection({

app.use(express.static(path.join(__dirname, 'public')));
app.use(mainRouter);

/* let con = mysql.createConnection({

    host: "localhost",
    user: "",
    password: "",
    database: "devlove"

  });*/
  


const adminName = 'Cinder Bot';

// Run when a client connects
io.on('connection', socket => {
    //con.connect(function(err) {
      //  if (err) throw err;
        //con.query("SELECT * FROM users", function (err, result, fields) {
          //if (err) throw err;
          //console.log(result);
        //});
      //});
    socket.on('joinRoom', ({ username, room })=>{
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        //welcome msg
        socket.emit('message', formatMessage(adminName, 'Welcome to Cindir Chat!'));

        //Shows when a user connects
        socket.broadcast.to(user.room)
        .emit('message',formatMessage(adminName, `${user.username} has joined the chat`));
      

        // send user room info
        io.to(user.room).emit('roomUsers', {
          room : user.room,
          users: getRoomUsers(user.room)
        });
    });
    console.log('New WS Connection...');
    

//Listen for msg
socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit('message', formatMessage(user.username, msg));
    });
    //Runs when a user discconects
socket.on('disconnect', () => {
const user = userLeave(socket.id);

if (user) {
  io.to(user.room).emit(
    'message', formatMessage(adminName, `${user.username} has left the chat`));
}

});
});

//app.listen(process.env.PORT || 4001);


const PORT =  3002;


server.listen(PORT, () => console.log(`Server running on ${PORT}`));

