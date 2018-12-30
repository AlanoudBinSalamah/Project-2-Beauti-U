
//express
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
//mustache
var mustache = require('mustache-express');
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views',__dirname + '/views');
//moment
var moment = require('moment');
moment().format();
//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//method-override
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

//morgan
var logger = require('morgan');
app.use(logger('dev'));
//public directory
app.use('/static', express.static(__dirname + '/public'));

//getting request to 
app.get('/', function(req,res){
    res.render('./index');
})
// any time someone makes a request to `/palettes` look in the palettesController for what to do
var stylistController = require('./controllers/stylistController');
var artistController = require('./controllers/artistController');
var customerController = require('./controllers/customerController');
var appointmrntController = require('./controllers/appointmentController');


app.use('/stylists',stylistController);
app.use('/astists',artistController );
app.use('/customers',customerController);
app.use('/appointments', appointmrntController);


//we want to tell our server to accept requests
app.listen(port, function () {
    console.log('---------------------------------------');
    console.log('Express listening on localhost:' + port);
    console.log('---------------------------------------');
  })