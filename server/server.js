var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var config = require('./config');
var user = require('./routes/user.js');
var userData = require('./routes/userData.js');

var port = process.env.PORT || config.serverport;


//Connection with database using mongoose
mongoose.connect(config.database, function(err){
	if(err){
		console.log('Error connecting database please check if mongoDb is connected');
	} else {
		console.log('Connected to database...');
	}
})

//Body parser to get information from Post and/or url parameters
app.use(bodyParser.urlencoded({extended: true }));
app.use(require('body-parser').json({type: '*/*' }));


//Morgan for logging requests to console
app.use(morgan('dev'));

//Enable cors from client side
app.use(function(req,res,next){
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", 'PUT, GET, POST, DELETE, OPTIONS');
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next();
});

//basic routes

app.get('/', function(req,res){
	req.send('Zikher User data API is running at http://localhost:'+ port + '/api');
});

app.post('/register', user.signup);

//express router
var apiRoutes = express.Router();

app.use('/api', apiRoutes);

apiRoutes.post('/login',user.login);

apiRoutes.use(user.authenticate); //route middleware to authenticate and check token

//authenticate routes
apiRoutes.get('/', function(req,res){
	res.status(201).json({message: 'Welcome to the authenticate routes' });
});

apiRoutes.get('/user/:id', user.getUserDetails); // api returns user details

apiRoutes.put('/user/:id', user.UpdatePassword); // api updates user password

apiRoutes.post('/userdata/:id', userData.savaData); //api adds Zikher user's data 

apiRoutes.delete('/userdata/:id', userData.deleteData); // api deletes Zikher's user data

apiRoutes.get('/userdata/:id', userData.getData); // api returns Zikher's user data



//kick off the server
app.listen(port);
console.log('Zikher user app is listeing at http://localhost:'+port);