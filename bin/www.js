var express = require("express");
var app     = express();
var path    = require("path");

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/../index.html'));
}); 
app.get('/login', function(req, res){
    res.send('this is login page');
});
app.listen(8080);
  
console.log("Running at Port 8080");