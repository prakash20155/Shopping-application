var express = require('express');
var router = express.Router();
var Brand=require('../../models/brands');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/apps/images/')
    },
    filename: function (req, file, cb) {
        //console.log('file',file);
        cb(null, file.originalname)
    }
});
var upload = multer({  storage: storage });


/* GET brand listing. */
router.get('/', function(req, res, next) {
    Brand.find({'isActive':true},function(err,brands){
        if(err){
            res.status(400).json(err);
        }
        res.status(200).json(brands);
    });
}).post('/', upload.single('brandlogo'),function(req, res, next) {
    var newBrand=new Brand({
        name:req.body.name,
        imageUrl:req.file.originalname,//image does not embedd on req.body.it embed on req.file
        description:req.body.description,
        isActive:req.body.isActive
    });
    newBrand.save(function(err,newbrand){
        if(err){
            res.status(400).send(err.message);
        }
        res.status(200).send(newbrand);
    });

}).put('/', function(req, res, next) {

});
router.delete('/delete:/id', function(req, res, next) {

});
module.exports = router;
