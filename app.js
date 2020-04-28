var express = require("express");
var app = express();
var user = require("./routes/user");


app.use('/', user);
app.listen(3000, () => {
    console.log("hello running in port 3000")
})