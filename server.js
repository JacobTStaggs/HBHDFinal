var express = require("express");
var app     = express();
var path    = require("path");
var port = normalizePort(process.env.PORT || 8080)
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'public/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(port);

console.log("Running at Port 8080");
