const { Router } =  require('express');

const pathRouter = new Router();

pathRouter.get('/', (req, res) => {
    res.render('home');
});

pathRouter.get('/login', (req, res) => {
    res.render('login');
});

module.exports = pathRouter;