
var express = require("express");
var app = express();
var fs = require("fs");

app.use(express.bodyParser());


app.get("/static/:staticFilename", function (request, response) {
    response.sendfile("static/" + request.params.staticFilename);
});

function initServer() {
}

initServer();
app.listen(8889);
