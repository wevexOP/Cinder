// adding api routing here
const router = require('express').Router();

const pathRouter = require('./pathRouter');
const apiRouter = require('./apis');

router.use('/', pathRouter);
router.use('/api', apiRouter);

module.exports = router;



