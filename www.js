var express     = require("express");
var app         = express();
var path        = require("path");
var bodyParser  = require('body-parser');
var router      = express.Router();
var login       = require("./handler/login");

app.use("/assets", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
}); 
app.post('/login',login.login);

//router.post('/login',login.login);
app.listen(8080);
console.log(__dirname);