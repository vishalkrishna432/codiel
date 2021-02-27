module.exports.profile = function(req, res){
    return res.render('user_profile',{
        title:"User Profile"
    });

}


module.exports.signup = function(req,res){
    return res.render('user_sign_up',{
        title:"Codiel Signup"
    });
}

module.exports.signin = function(req,res){
    return res.render('user_sign_in',{
        title:"Codiel Signin"
    });
}