module.exports.student = function(req, res){
    
    return res.render('student.ejs', {
        title: "Student Registration"
    });
}