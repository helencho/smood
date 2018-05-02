const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const passport = require('passport')

let indexRouter = require('./routes/index')
let usersRouter = require('./routes/users')
let moodsRouter = require('./routes/moods')
let activitiesRouter = require('./routes/activities')
let entriesRouter = require('./routes/entries')

let app = express()

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  session({
    secret: `breatheofthewild`,
    resave: false,
    saveUninitialized: true
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, 'client/build')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/moods', moodsRouter)
app.use('/activities', activitiesRouter)
app.use('/entries', entriesRouter)


// Ensures frontend routes will lead to the right pages
app.get('*', (req, res) => {
  res.sendfile(__dirname + '/client/build/index.html')
})

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
