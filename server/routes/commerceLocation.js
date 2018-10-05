var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

//mongodb://<dbuser>:<dbpassword>@ds257752.mlab.com:57752/kusani
var db = mongojs("mongodb://Droidbot:Indiza__2018@ds257752.mlab.com:57752/kusani", ["commercesLocation"]);

//Modifier la position du commercant 

router.put("/commerceLocationSocket/:id", function(req, res, next){

	var io = req.app.io;
	if(!req.body){
		res.status(400);
		res.json({
			"error":"Bad data"
		});

	}else{
		db.commercesLocation.update({_id:mongojs.ObjectId(req.params.id)}, 
			{$set: {socketId:req.body.socketId}}, function(err, updateDetails){
				if(err){
					res.send(err);

				}else{
					res.send(updateDetails);
				}
		}); 
	}
});


//get nearby commerce
router.get("/commerceLocation", function(req, res, next){
    console.log("Je suis a commerceLocation simple", req.query.longitude);
	db.commercesLocation.ensureIndex({"coordinate":"2dsphere"});
	db.commercesLocation.find({
			"coordinate":{
				"$near":{
					"$geometry":{
						"type":"Point",
						"coordinates": [parseFloat(req.query.longitude), parseFloat(req.query.latitude)]
					},
					"$maxDistance":4000
				}
			}
		}, function(err, location){
			if(err){
				res.send(err);

			}else{
				res.send(location);
			}
	});
    //console.log(req);

});


//Get Single commerce and emit track by user to commerce
router.get("/commerceLocation/:id", function(req, res, next){
	var io = req.app.io;
    console.log(req);
    db.commercesLocation.findOne({commerceId: req.params.id},function(err, location){
        if (err){
            res.send(err);
        }
        res.send(location);
        io.emit("trackCommerce", location);
    });
});

//Update Location by driver to user
router.put("/commerceLocation/:id", function(req, res, next){
    var io = req.app.io;
    var location = req.body;
    var latitude = parseFloat(location.latitude);
    var longitude = parseFloat(location.longitude);
    if (!location){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.commercesLocation.update({_id: mongojs.ObjectId(req.params.id)},{ $set: {
        	socketId:location.socketId,
        	coordinate:{
                "type": "Point",
        		coordinates:[
                    longitude,
        			latitude
    			]
    		}
    	}}, function(err, updateDetails){
        if (err){
            console.log(updateDetails);
            res.send(err);
        }
        if (updateDetails){

            //Get updated location
            db.commercesLocation.findOne({_id:  mongojs.ObjectId(req.params.id)},function(error, updatedLocation){
                if (error){
                    res.send(error);
                }
                res.send(updatedLocation);
                io.emit("action", {
                    type:"UPDATE_COMMERCE_LOCATION",
                    payload:updatedLocation
                });
            });
        }
    });
    }
});

module.exports = router;  	

