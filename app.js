var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
const compression = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var mongoose=require('mongoose');

// ****** import all route api file *****************
var index = require('./routes/index');
var users = require('./routes/api/users');
var brands = require('./routes/api/brands');
var products = require('./routes/api/products');
var categories = require('./routes/api/category');
var auth = require('./routes/api/auth');
var promotions=require('./routes/api/promotions');

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// mongodb connection
var url="mongodb://localhost:27017/OnlineMeanShop";
//mongodb://username:password@hostname:port/database

mongoose.connect(url);
var connection=mongoose.connection;
connection.on('connected', function(){
  console.log('Mongoose connected to ' + url);
});

connection.on("open",function () {
  console.log("Connection open on  " + url)
});

connection.on('error', function() {
  console.log("Sorry, there is no mongo db server running.");
  process.exit(1);
});
connection.on('disconnected', function() {
  console.log("oops, Connection DisConnected.")
});

var app = express();
// ****** socketjs configuration
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// **** view engine setup
app.set('views', path.join(__dirname, 'public/apps/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'thisisjptsessionhai',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
  store: new MongoStore({mongooseConnection: connection })
}));
//app.use(compression())
// app.use(function(req, res, next) {
//     io.on('connection', function(socket) {
//         socket.emit("message:onconnection",{name:"hello User"} );
//         res.io = io;
//     });
//     next();
// });
// ****route defination*******
app.use('/', index(app));
app.use('/api/users', users);
app.use('/api/brand', brands);
app.use('/api/product', products);
app.use('/api/category', categories);
app.use('/api/promotion', promotions);
app.use('/api/auth', auth);

require('./sockets/base')(io); //socket

// ****catch 404 and forward to error handler*******
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

//socket
module.exports = {app:app,server:server};