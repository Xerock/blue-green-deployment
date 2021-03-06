var express = require('express');
var bodyParser = require('body-parser');

// create express app
var app = express();

var cors = require('cors');
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

app.get('/', (req, res) => {
  const str = '<h1 style=\"color:blue\">BLUE</h1>';
  res.send(str);
});


// Require Invoices routes
require('./app/routes/invoice.routes.js')(app);

// listen for requests
app.listen(3001, function(){
    console.log("Server is listening on port 3001");
});
