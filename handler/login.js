const con = require('./../connection');

exports.login = function(req,res){
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
                console.log("Password Good");
                res.send({
                  "code":200,
                  "success":"login sucessfull"
                });
              }else{
                  console.log("Bad Pass");
              }
            }
        }
    });
}