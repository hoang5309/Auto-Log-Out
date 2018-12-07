const con = require('./../connection');

exports.signup = function(req,res){
    var infos = {
        "email"    : req.body.email,
        "username" : req.body.username,
        "password" : req.body.password
    }
    con.query('INSERT INTO users SET ?', infos, function(error, results){
        if (error) {
            res.send({
            "code":400,
            "failed":"error ocurred"
            })
        }else{
            res.send({
            "code":200,
            "success":"user registered sucessfully"
            });
        }
    });
}