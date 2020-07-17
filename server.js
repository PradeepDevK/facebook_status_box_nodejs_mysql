var express = require('express');
var url = require('url');
var db = require('./js/handleDB');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.all('*', function (req, res) {
    let path = url.parse(req.url).pathname;
    if (path === "/") {
        //it means app is loaded with no additional URL parameter.
        //e.g: http://localhost:3000 and on it we will return HTML page.
        res.render("index.html");
    } else if (path == "/add") {
        var status = url.parse(req.url, true).query;
        //This line will get the textarea value written in HTML page (that value is status update)
        db.add_status(status, res);
        //here we have called function to add status into DB.
    }
});


app.listen(3000);