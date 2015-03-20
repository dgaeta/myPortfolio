var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('views/index.html');
});

/* GET Chess10 page. */
router.get('/jsonObj', function(req, res, next) {
  rvar svn_json = require('./public/javascripts/SvnXmlToJson.js');
  res.render({"Chess10": svn_json.Chess10, "Chess11": svn_json.Chess11});
});


module.exports = router;
