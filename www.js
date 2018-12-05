var express = require("express");
var app     = express();
var path    = require("path");

app.use("/assets", express.static(path.join(__dirname, "public")));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
}); 
app.get('/login', function(req, res){
    res.send('this is login page');
});
app.listen(8080);
app.use("/assets", (req, res) => res.end());
console.log(__dirname);