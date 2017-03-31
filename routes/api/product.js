var express = require('express');
var router = express.Router();
var Products = require('../../models/product');
/* GET products listing. */
router.get('/', function(req, res, next) {

    res.send('respond with a resource');
});

router.get('/productbyId/:id', function(req, res, next) {

    res.send('respond with a resource');
});

router.get('/latestarrival', function(req, res, next) {
    Products.find({'isActive': true}).sort('-createdDate').limit(10).exec(function(err, products){
        if(err){
            res.status(400).send('error');
        }
        res.status(200).send(products);
    });

});

router.get('/newProduct', function(req, res, next) {
    Products.find(function(err,data){
        if(err){
            res.status(400).send(err);
        }
        if(!data){
            res.status(404).send('Not Fount');
        }
        res.status(200).send(data);

    })
});
module.exports = router;
