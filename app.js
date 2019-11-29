var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
// var MongoClient = require('mongodb').MongoClient;
// var objectId = require('mongodb').ObjectID;
// var models = require('./models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var landingpageRouter = require('./routes/landingpage');

// const CONNECTION_URL = "mongodb+srv://admin:mjvx4KdK6XHEPKbl@cluster0-4c7hh.mongodb.net/test?retryWrites=true&w=majority";
// const DATABASE_NAME = "webXpec";

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoDB = "mongodb+srv://admin:mjvx4KdK6XHEPKbl@cluster0-4c7hh.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if(error)
  {
    throw error;
  }
  console.log("Connected to database with mongoose.");
});

// Default mongoose connection
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/landingpage', landingpageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
// establish database connection
// var database, collection;

// app.listen(3002, () => {
//   MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
//     if(error) {
//       throw error;
//     }
//     database = client.db(DATABASE_NAME);
//     collection = database.collection("users");
//     console.log("Connected to `" + DATABASE_NAME + "`!");
//   });
// });


  // app.post('/addition', function(req, res){
  //   var userName = req.body.userName;
  //   db.collection('users').insertOne({ username: userName });
  //   res.render('index')
  // });
  
  // app.get("/users", (req, res) => {
  //   collection.find({}).toArray((error, result) => {
  //     if(error) {
  //       return this.response.status(500).send(error);
  //     }
  //     this.response.send(result);
  //   });
  // });
  
  
  // models.sequelize.sync().then(function() {
  //   console.log("DB Sync'd up");  
  // });