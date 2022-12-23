// adding api routing here
const { Router } =  require('express');

const pathRouter = require('./pathRouter');
const apiRouter = require('./apis');

const allRouter = new Router();

allRouter.use('/', pathRouter);
allRouter.use('/api', apiRouter);

module.exports = allRouter;