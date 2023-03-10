const router = require('express').Router();
const { user } = require('../models');
const { profile } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const templates = {}


router.get('/', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', async (req, res) => {
    console.log(req.body);
    const { userName, userEmail, userPassword } = req.body;
    let userObject = await user.findOne({
        where:{
            email: userEmail
        }
    });
    if(userObject){
        res.status(409).end("This email is already in use!");
    }

    const encryptedPassword = await bcrypt.hash(userPassword, 10);
    
    userObject = await user.create({
        display_name: userName,
        email: userEmail,
        password_hash: encryptedPassword,
        })
    const token = jwt.sign({
        id:userObject.id,
    }, process.env.JWT_KEY
    )
    res.cookie(
        'sessionToken',
        token)
    res.redirect('/'); 
});



router.get('/profile', (req, res) => {
    res.render('profile'),{
        session: req.sessionToken,
    }

});

 router.post('/profile', async (req, res) => {
    console.log(req.body);
    const { fullNameProfile, userEmailProfile, userPhoneProfile, userLocationProfile } = req.body;
    userObject2 = await profile.create({
        fullNameProfile: fullNameProfile,
        userEmailProfile: userEmailProfile,
        userPhoneProfile: userPhoneProfile,
        userLocationProfile: userLocationProfile,
        })
    
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

router.get('/chat', (req, res) =>
{
    res.redirect('http://localhost:3002');
});


router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;