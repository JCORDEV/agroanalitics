var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cultivosRouter = require('./routes/cultivos');
var calendarioRouter = require('./routes/calendario');
var demandaRouter = require('./routes/demanda');

var app = express();
var expressLayouts = require('express-ejs-layouts');

// view engine setup
app.set('view engine', 'ejs');
app.use(expressLayouts); // Usar express-ejs-layouts
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cultivos', cultivosRouter);
app.use('/calendario', calendarioRouter);
app.use('/demanda', demandaRouter);

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
