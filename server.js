// This is going to be our server page. Backend ONLY!
require('dotenv').config();
const express = require('express');
const { engine } = require('express-handlebars');
const mainRouter = require('./controllers');
const mysql = require('mysql2');



const app = express();

const PORT = process.env.PORT || 3001;



app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.json());

app.use(mainRouter);

app.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
});

// Connection Poll
const pool = mysql.createPoolCluster({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env,DB_NAME
});

// Connect to DB
pool.getConnection((err, connection) => {
    if(err) throw err; // not connected!
    console.log('Connected as ID' + connection.threadID);
});