var express = require('express');
var router = express.Router();
const userModel = require("./users");
const passport = require('passport');
const localStrategy = require("passport-local").Strategy;

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/register', function(req, res) {
  res.render('register', { messages: req.flash() });
});

router.get('/login', function(req, res) {
  res.render('login', {messages: req.flash()});
});

router.get('/overview', isLoggedIn, function (req, res) {
  res.render('main');
})

router.get('/overview/c', isLoggedIn, function (req, res) {
  res.render('C-test');
})

router.get('/overview/pc-troubleshooting', isLoggedIn, function (req, res) {
  res.render('sub-pc');
})

router.get('/overview/mathematics', isLoggedIn, function (req, res) {
  res.render('sub-math');
})

router.get('/overview/computer-fundamental', isLoggedIn, function (req, res) {
  res.render('funda-test');
})
router.get('/overview/no-content', isLoggedIn, function (req, res) {
  res.render('error');
})

router.post('/register', async function (req, res, next) {
  const userdata = new userModel({
    username: req.body.username
  })
  
  userModel.register(userdata, req.body.password).then(function () {
    passport.authenticate("local")(req, res, function () {
      req.flash('success', 'You have successfully registered.')
      res.redirect('/login');
    });
  }).catch(function (err) {
    // Handle the UserExistsError
    req.flash('error', 'A user with the given username is already registered.');
    res.redirect('/register');
  });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/overview",
  failureRedirect: "/login",

  
}), function (req, res, next) {})

router.get("/logout", function (req, res, next) {
  req.logout(function(err) {
    if (err)
      return next(err); 
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    req.flash('success', 'Login successful!');
    return next();
  } else {
    req.flash('error', 'Login unsuccessful!');
    res.redirect('/')
  }
}

module.exports = router;
