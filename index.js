const express =  require('express');
const cookieParser = require('cookie-parser');
const port = 8000;
const db = require('./config/mongoose');
const session = require('express-session');
let ejs = require('ejs');
const app = express();
const passport = require('passport');
const passportLocal = require('./config/passport-loacal');
const MongoStore = require('connect-mongo');
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./static'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: 'Lets Quiz',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/OES',
        autoRemove: 'disabled'
      },
      function(err){
        console.log(err || 'connect mongodb succesfully setuped');
      }
      )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/',require('./Routes'));

app.listen(port,function(err){
    if(err){
        console.log("error while loading the page : " , err);
        return;
    }
    console.log("yippiee....server is running on port:",port);
})