const con = require('./../connection');
const logout = require('./logout');
const log = require("./log");
var here = 0;

function login(req,res){
    var startTime = setInterval(startCount, 6000);
    var email    = req.body.email;
    var password = req.body.password;
    con.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields){
        if (error) {
            console.log("error ocurred",error);
            res.send({
              "code":400,
              "failed":"error ocurred"
            })
        }else{
            console.log('The solution is: ', results);
            if(results.length >0){
              console.log(results[0].password);
              if(results[0].password == password){
                    log.write("good pass");
                res.send({
                    "code":200,
                    "success":"login sucessfull"
                });
              }else{
                    log.write("bad pass");
              }
            }
        }
    });
}

function startCount(){
    here++;
    console.log("start Count:" + here);
    if(here > 2){        
        console.log("Call Logout");
        logout.logout;
    }
}

function reset(req, res){
    here = 0;
    res.send({
        "ping": here, 
        "status": "reseted"
    })
}

module.exports = {
    reset: reset,
    login: login 
}