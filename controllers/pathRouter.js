const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});

router.get('/profile/:id', (req, res) => {
    var id = req.params.id;

    if (id == '1'){
        res.render('profile', {
           
        });
    } else {
        res.render('home');
    }
});

router.get('/chat/:id', (req, res) => {
    var id = req.params.id;

    if (id == 'landing'){
        res.render('chat', {
           
        });
    } else {
        res.render('home');
    }
});

router.get('/chat/:id', (req, res) => {
    var id = req.params.id;

    if (id == 'main'){
        res.render('chat', {
           
        });
    } else {
        res.render('home');
    }
});


router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;