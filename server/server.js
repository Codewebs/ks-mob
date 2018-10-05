var express = require("express");
var path = require("path");
var bodyParser = require("body-parser"); 

var index = require("./routes/index");
var bookings = require("./routes/bookings");
var test = require("./routes/test");
var commerceLocation = require("./routes/commerceLocation");
//USERS MANAGER ROUTES
var login = require("./routes/usersManagers/login");


var commerces = require("./routes/commerces");
var app = express();

var port = 3000; 

var socket_io = require("socket.io");

var io = socket_io();
//Vues

app.set("views",  path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//Body parser MW

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));

//Routes
app.use("/", index);
app.use("/api", bookings);
app.use("/api", commerceLocation);
app.use("/api", commerces);
app.use("/api", test);
app.use("/api", login);


io.listen(app.listen(port, function(){
	console.log("le server ecoute sur le port", port);
}));

app.io = io.on("connexion", function(socket){
	console.log("Socket connecté: " + socket.id);
});

