var mongoose = require('mongoose');
var fs = require('fs');
var generator = require('mongoose-gen');
var data = fs.readFileSync('./models/customer.json', {encoding: 'utf8'});
var customerJson = JSON.parse(data);
var customer = new mongoose.Schema(generator.convert(customerJson));
module.exports = mongoose.model('customer', customer);
