const express =  require('express');
const path = require('path');
const port = 8000;
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');
const bodyParser= require('body-parser');
let ejs = require('ejs');
const app = express();
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./static'));
app.use('/',require('./Routes'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(port,function(err){
    if(err){
        console.log("error while loading the page : " , err);
        return;
    }
    console.log("yippiee....server is running on port:",port);
})