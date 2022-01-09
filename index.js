const express =  require('express');
const path = require('path');
const port = 8000;
let ejs = require('ejs');
const app = express();
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