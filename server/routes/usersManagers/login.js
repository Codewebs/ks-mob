var express = require("express");
var router = express.Router();
var conn = require('../../cnx'); 
var Password = require("node-php-password");



router.get('/login', function(req, res, next) {
	var phone = 237694535789;

    var email = "landryhion@gmail.com";
	//var password = req.body.password;
	var phone = phone;
	//var hash = Password.hash("merci");
//	console.log(hash);//
        conn.getConnection(
            function (err, client) {

                client.query("SELECT * FROM users WHERE email =?  AND phone = ?",[email, phone], function(err, row, fields) {
                    // And done with the connection.

                    if(err){
                        console.log('erreur sur la requete/Query Error');
                    }                   
                    if(row.length > 0){
                    	res.send({'success': true, 'message': row[0].first_name});
                    } else {
                    	res.send({'success': false, 'message': 'Utilisateur inconu/ verifiez vos identifiants'})
                    }

                    //res.json(rows);
                    client.release();
                    
                });

        });     

});

module.exports = router; 