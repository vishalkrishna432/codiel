module.exports.home = function(req,res){
    console.log('controller is working fine');
    return res.render('home',{
        title:"Home"
    });
}
