const { Router } =  require('express');

const usersRouter = new Router();

usersRouter.post('/login', async (req, res) => {
    console.log(req.body);
});

module.exports = usersRouter();