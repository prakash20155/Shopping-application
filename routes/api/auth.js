var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/register', function(req, res, next) {

    res.send('respond with a resource');
});
router.get('/checkauth', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
