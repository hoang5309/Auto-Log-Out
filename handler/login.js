exports.login = function(req,res){
    var email= req.body.email;
    var password = req.body.password;
    console.log("#NODE: " + email + " " +password);
}