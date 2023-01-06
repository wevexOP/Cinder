const express = require('express');
const router = require('express').Router();

router.get('/:id', function(req, res, next) {
    var id = req.params.id;

    if (id == '1'){
        res.render('profile', {
           
        });
    } else {

    }
});

module.exports = router;