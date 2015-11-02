var express = require('express');
var router = express.Router();

/* GET iot page. */
router.get('/', function(req, res, next) {
    res.render('blog');
});

module.exports = router;