var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var CUSTOMER = require('../models/customer.js');
var jsonfile = require('jsonfile')
/* GET /CUSTOMER listing. */
router.get('/', function(req, res, next) {
  CUSTOMER.find(function (err, CUSTOMERs) {
    if (err) return next(err);
    res.json(CUSTOMERs);
  });
});
/* GET /CUSTOMER listing. */
router.get('/schema', function(req, res, next) {
  var file = './models/customer.json'
jsonfile.readFile(file, function(err, obj) {
  res.json(obj)
})
});


/* GET /CUSTOMER/ */
router.get('/customer', function(req, res) {
	 CUSTOMER.find(req.query, function (err,CUSTOMERs) {
    if (err) return next(err);
    res.json(CUSTOMERs);
  });
	
  
});

/* POST /CUSTOMER */
router.post('/', function(req, res, next) {
  CUSTOMER.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* POST /CUSTOMER/schema */
router.post('/schema', function(req, res, next) {
var file = './models/customer.json'
var obj = req.body;
 
jsonfile.writeFileSync(file, obj)
res.json(obj);
});


/* PUT /CUSTOMER/:id */
router.put('/:id', function(req, res, next) {
  CUSTOMER.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /CUSTOMER/:id */
router.delete('/:id', function(req, res, next) {
  CUSTOMER.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;