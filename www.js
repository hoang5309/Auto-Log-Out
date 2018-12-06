var express = require("express");
var app     = express();
var path    = require("path");

app.use("/assets", express.static(path.join(__dirname, "public")));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
}); 

app.post('/login', function(req, res){
    res.header("Access-Control-Allow-Credentials", "true"); 
    console.log("Hello");
});

app.listen(8080);
app.use("/assets", (req, res) => res.end());
console.log(__dirname);