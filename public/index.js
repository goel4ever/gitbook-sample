var express = require('express'); 
var app = express();
app.use(express.static(__dirname + '/_book'));

app.listen(process.env.PORT || 3000);