var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

mongoose = require('mongoose'),
Sheet = require('./api/models/sheetModel'), //created model loading here
bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dndUser:azertyuiop5@ds247670.mlab.com:47670/dndserver'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/sheetRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);