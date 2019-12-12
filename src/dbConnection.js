var mysql = require('mysql');

var password = process.env

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.exports.password,
    database: "survivorTone"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected!" + process.env.password);


    // CREATE DATABASE


    // con.query("CREATE DATABASE survivorTone", function (err, result) {
    //     if(err) throw err;
    //     console.log("Database Created");
    // });


    // CREATE TABLE

    // var sql = "CREATE TABLE SeasonTweets (id INT AUTO_INCREMENT PRIMARY KEY, season VARCHAR(255), tweets (255)"
    // con.query(sql, function(err, result) {
    //     if(err) throw err;
    //     console.log("table made")
    // })
});