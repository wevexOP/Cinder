const router = require('express').Router();

router.post('/login', async (req, res) => {
    console.log(req.body);
});

module.exports = router;