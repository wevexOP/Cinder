const { Router } =  require('express');

const pathRouter = new Router();

pathRouter.get('/', (req, res) => {
    res.end('foo');
});

module.exports = pathRouter;