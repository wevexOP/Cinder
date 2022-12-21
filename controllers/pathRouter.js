const { Router } =  require('express');

const pathRouter = new Router();

pathRouter.get('/', (req, res) => {
    res.render('home');
});

module.exports = pathRouter;