const router = require('express').Router();
const jwt = require("jsonwebtoken");
const { userInfo } = require('os');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
});

const tokenData = {
    id: userInfo.id,

};
const token = jwt.sign(tokenData, process.env.JWT_KEY);

module.exports = router;