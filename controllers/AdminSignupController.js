const User = require('../modals/users');

module.exports.Admin = function(req, res){
    
    return res.render('admin.ejs', {
        title: "Admin Registration"
    });
}
module.exports.Signin = function(req, res){
    
    return res.render('adminLogin.ejs', {
        title: "Admin Login",
        heading: "Admin Login"
    });
}
module.exports.AdminHome = function(req, res){
    
    return res.render('adminHome.ejs', {
        title: "Home"
    });
}
module.exports.Create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        res.redirect('back');
    }  
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}
        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}
                return res.redirect('/');
            })
        }else{
            return res.redirect('back');
        }
    });
}
module.exports.createSession = function(req, res){
    return res.redirect('/AdminSignup/adminHome');
}
module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}