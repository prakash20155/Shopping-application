var express = require('express');
var router = express.Router();
var Promotion = require('../../models/promotion');


/* GET deals listing. */
router.get('/', function(req, res, next) {
    Promotion.find({'active':true},function(err,data){
        if(err){
            res.send('not found');
        }
        res.status(200).json(data)
    });
});

module.exports = router;