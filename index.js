const express = require('express'),
      pug = require('pug'),
      bodyParser = require('body-parser'),
      displayRoutes = require('express-routemap'),
      methodOverride = require('method-override'),
      session = require('express-session'),
      base64url = require('base64url'),
      bcrypt = require('bcrypt'),

      morgan = require('morgan');

var app = express(),
    db = require('./models');

var userRouter = require('./routes/user');
var authenticationRouter = require('./routes/authentication');
var registrationRouter = require('./routes/registration');



app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));

app.use(methodOverride((req, res) => {
   if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method;

      delete req.body._method;
      return method;
   }})
);

app.use(session({
   secret: 'secret key',
   resave: true,
   saveUninitialized: true
 }));

app.set('view engine', 'pug');

app.use('/user', userRouter);

app.use('/login', authenticationRouter);

app.use('/register', registrationRouter);

app.get('/logout', (req, res) => {
   req.session.user = undefined;
   res.redirect('/');
});

db.sequelize.sync({}).then(() => {
   app.listen(3000, (req, res) => {
      console.log('App listening on 3000!');
   });
});
