var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

//mongodb://<dbuser>:<dbpassword>@ds257752.mlab.com:57752/kusani
var db = mongojs("mongodb://Droidbot:Indiza__2018@ds257752.mlab.com:57752/kusani", ["commerces"]);


router.get("/commerces", function(req,res, next){
	db.commerces.find(function(err,commerces){
		if(err){
			res.send(err);
		}
		res.json(commerces);
	})
});


module.exports = router;  