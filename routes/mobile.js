var express = require('express');
var router = express.Router();

/* GET mobile page. */
router.get('/', function(req, res, next) {
    res.render('mobile');
});

module.exports = router;
