var express = require('express');
var router = express.Router();
var Category=require('../../models/category');

/* GET category listing. */
router.get('/', function(req, res, next) {
    Category.find({'Active':true},function(err,data){
        if(err){
            res.status(500).json(err);
        }
        if(!data) {
            return res.status(404).send('Not Found');
        }
        res.status(200).json('respond with a resource');

    });
});
router.get('/create', function(req, res, next) {
    res.status(200).json('respond with a resource');

});

module.exports = router;
