const express = require('express');
const router = require('express').Router();
const {allUsers} = require('../controllers/UserController');

router.get('/', allUsers);

module.export = router;