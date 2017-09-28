'use strict'; 

var port = process.env.PORT || 1337; 
var http = require('http');
var express = require('express');
var ejs = require('ejs');
const path = require('path');
const app = express(); 


//set up view engine
app.engine('.html', ejs.__express);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'html'); 

//serve static files as a express middleware
app.use(express.static(path.join(__dirname, 'app/public')));


app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!')
});