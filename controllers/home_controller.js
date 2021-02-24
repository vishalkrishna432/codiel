module.exports.home = function(req,res){
    console.log('controller is working fine');
    return res.end('<h1>Your Server is running up</h1>');
    
}
