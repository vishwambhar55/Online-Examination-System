const User = require("../modals/susers");
module.exports.student = function(req, res){
    
    return res.render('student.ejs', {
        title: "Student Registration"
    });
}
module.exports.Signin = function(req, res){
    
    return res.render('StudentLogin.ejs', {
        title: "Student Login",
        heading: "Student Login"
    });
}

module.exports.StudentHome = function(req, res){
    
    return res.render('studentHome.ejs', {
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
    return res.redirect('/StudentSignup/studentHome');
}
module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}