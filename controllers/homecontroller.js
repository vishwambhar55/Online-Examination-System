module.exports.home = function(req, res){
    
    return res.render('home.ejs', {
        title:  "Let's Quiz"
    });
}