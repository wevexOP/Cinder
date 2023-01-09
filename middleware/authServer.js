const express = require('express');
const app = express();

//authentication begins!  
require('dotenv').config()

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

app.use(express.json())

//requires db to store tokens //

app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshToken.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ name: user.name })
        res.json({ accessToken: accessToken })
    })
})

//app.delete('/logout', (req, res) => {})// placemarker for db token deletion

app.post('/login', (req, res) => {
    const username = req.body.username
    const user = { name: username }

    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    res.json({ accessToken: accessToken, refreshToken: refreshToken })
})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m'})
}

app.post('/users', async (req, res) => {
    try {
        const salt= await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(salt)
        console.log(hashedPassword)
        const user = { name: req.body.name, password: hashedPassword}
        user.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

app.post('users/login', async (req, res) => {
    const user = user.find(user => user.name = req.body.name)
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

app.listen(4001)