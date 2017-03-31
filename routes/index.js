var express = require('express');
var path=require('path');
var router = express.Router();

/* GET landing page. */

module.exports=function(app)
{
  router.get('/', function(req, res, next) {
    console.log(path.resolve(app.get('views')))
    res.sendFile(app.get('views') + "index.html");
  });
  return router;
};

