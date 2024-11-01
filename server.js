
let express = require('express');
let path = require('path');
const router = require('express/lib/router');

let app = express();
app.use(express.static(path.join(__dirname, "js")));
app.use(express.static(path.join(__dirname, "views/assets")));
app.use((request, response, next) => {
    request.header('Access-Control-Allow-Origin', '*');
    request.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    request.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.get('/',function(request,response) {
    response.render('index');

});

app.listen(8000,function(){console.log("heard on 8000")});