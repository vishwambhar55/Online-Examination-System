const User = require('../modals/UserAdmin');
module.exports.Admin = function(req, res){
    
    return res.render('admin.ejs', {
        title: "Admin Registration"
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