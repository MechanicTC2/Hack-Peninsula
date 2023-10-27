var express = require('express');
var router = express.Router();
var arrival_count = 0;

router.get('/', function(req, res, next) {
  arrival_count++;
  console.log(arrival_count);
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;