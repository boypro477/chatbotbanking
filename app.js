const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const viewRouter = require('./routers/viewRouter');
const addRouter = require('./routers/addRouter');
const mongoose=require('mongoose');
const config=require('./config.json');
let app = express();
let connectionString=process.env.PORT?
config.production.connectionString:
config.development.connectionString;
let port=process.env.PORT?
process.env.PORT:
config.development.port;
app.engine("handlebars", handlebars({ defaultLayout : "main"}));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended : true }) );
app.use(bodyParser.json({ extended: true }) );
app.use('/',viewRouter);
app.use('/add',addRouter);
app.use(express.static(__dirname + '/public'));
mongoose.connect(connectionString, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connect db success");
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Localhost started on port 6969");
  }
});
