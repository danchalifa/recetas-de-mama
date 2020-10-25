var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();

/* GET home page. */
router.get('/getRecipies', function(req, res, next) {


  res.render('index', { title: 'Express' });
});

module.exports = router;
