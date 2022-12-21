// adding api routing here
const { Router } =  require('express');

const pathRouter = require('./pathRouter');

const allRouter = new Router();

allRouter.use('/', pathRouter);

module.exports = allRouter;