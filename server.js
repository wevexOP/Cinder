// This is going to be our server page. Backend ONLY!
const express = require('express');
const app = express();

//login posts and bcrypt, hashing the passwords
require('dotenv').config()

const jwt = require('jsonwebtoken')

app.use(express.json());

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user 
        next()
    })
}

app.post('/users', async (req, res) => {
    try {
        const salt= await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(salt)
        console.log(hashedPassword)
        const user = { name: req.body.name, password: hashedPassword}
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

app.post('users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Incorrect')
        }
    } catch {
        res.status(500).send()
    }
})

// to be continued? ...

const { engine } = require('express-handlebars');

const mainRouter = require('./controllers');

const PORT = process.env.PORT || 3001;

const sequelize = require('./config/sequelize');
require('./models');



app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use('/public', express.static(__dirname + '/public'));
app.use(mainRouter);



sequelize.sync().then(() => {
    app.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
});
});