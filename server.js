var express = require("express");
var bodyParser = require("body-parser");
var methodOverride= require("method-override");

var app = express();
var port = 8889;


var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});
