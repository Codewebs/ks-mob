var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

//mongodb://<dbuser>:<dbpassword>@ds257752.mlab.com:57752/kusani
var db = mongojs("mongodb://Droidbot:Indiza__2018@ds257752.mlab.com:57752/kusani", ["bookings"]);


router.get("/bookings", function(req,res, next){
	db.bookings.find(function(err,bookings){
		if(err){
			res.send(err);
		}
		res.json(bookings);
	})
});

router.post("/bookings", function(req, res, next){
	var booking = req.body.data;
	var nearByDriver = req.body.nearByDriver;
	var io = req.app.io;
    console.log("La requete du client dans booking",booking);

	if(!booking.userName){
		res.status(400);
		res.json({
			error:"Bad data"
		});	
	} else {
        console.log("bienvenu", booking.userName, "Enregistrement de votre reservation", nearByDriver.socketId);
		db.bookings.save(booking, function(err, savedBooking){
			if(err){
				res.send(err);
			}
			res.json(savedBooking);	
			if(nearByDriver.socketId){
               
				io.emit(nearByDriver.socketId + "commerceRequest", savedBooking);
			}else{
				console.log("ce corespondant est indisponile", nearByDriver.socketId);
			}		
		});
	}
});

// Commerce Update Booking done on commerce side
router.put("/bookings/:id", function(req, res, next){
    var io = req.app.io;
    var booking = req.body;
    if (!booking.status){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.bookings.update({_id: mongojs.ObjectId(req.params.id)},{ $set: { 
        	commerceId: booking.commerceId,
        	status: booking.status 
        }}, function(err, updatedBooking){
        if (err){
            res.send(err);
        }
        if (updatedBooking){
            //Confirmation de la reservation
            db.bookings.findOne({_id:  mongojs.ObjectId(req.params.id)},function(error, confirmedBooking){
                if (error){
                    res.send(error);
                }
                res.send(confirmedBooking);               
                io.emit("action", {
                    type:"BOOKING_CONFIRMED",
                    payload:confirmedBooking
                });
            });
        }
    });
    }
});



module.exports = router;  