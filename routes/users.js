var express = require('express');
var mysql = require('mysql');

var conn = mysql.createConnection("mysql://ba66b65fe948ec:8b799e69@us-cdbr-iron-east-03.cleardb.net/heroku_71ca4935f2b3583?reconnect=true");


var router = express.Router();

router.get("/new", function (req, res) {
    res.render('posttest');
});

/* POST create a new user */
router.post('/new', function (req, res) {
    console.log("processing");

    //accept form data
    console.log(req.body);

    var post = req.body;
    var query = conn.query('INSERT INTO users SET ?', post, function (err, result) {
        if(!err) {
            console.log("database is connecting.... \n ");
        } else {
            console.log("Error connecting database ... \n");
        }
        console.log(result);
        res.send(result);//return json response of result object
    });
    console.log(query.sql);
});

module.exports = router;
