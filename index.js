var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Portfolio'});
});


/* GET Products page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects'});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET Services page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Services'});
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact us'});
});




module.exports = router;
