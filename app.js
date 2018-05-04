const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')

const session = require('express-session')
const passport = require('passport')

let index = require('./routes/index')
let users = require('./routes/users')
let moods = require('./routes/moods')
let activities = require('./routes/activities')
let entries = require('./routes/entries')

let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'client/build')))

app.use(
  session({
    secret: `\x02\xf3\xf7r\t\x9f\xee\xbbu\xb1\xe1\x90\xfe'\xab\xa6L6\xdd\x8d[\xccO\xfe`,
    resave: false,
    saveUninitialized: true
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, 'client/build')))

app.use('/', index)
app.use('/users', users)
app.use('/moods', moods)
app.use('/activities', activities)
app.use('/entries', entries)

// Ensures frontend routes will lead to the right pages
// app.get('*', (req, res) => {
//   res.sendFile(__dirname + 'client/build/index.html')
// })

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
