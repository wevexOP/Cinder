// adding api routing here
const { Router } =  require('express');

const usersRouter = require('./users');

const apiRouter = new Router();

module.exports = apiRouter;