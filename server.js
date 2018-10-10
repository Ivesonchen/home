const express = require("express");
let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/views/'));

app.use('/', require('./routers/home'));

app.listen(3000, ()=> {
    console.log("Server live on port 3000: ");
});