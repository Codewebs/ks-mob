var express = require("express");
var router = express.Router();
var conn = require('../../cnx'); 
var Password = require("node-php-password");

router.get('/register', function(req, res, next) {

	 conn.getConnection(
            function (err, client) {
            	db.query('INSERT INTO myTable (field1, field2, field3) VALUES (?, ?, ?)', ['Larry', '41', 'California, USA'], function(err, result) {
 					 if(err){
                        console.log('erreur sur la requete/Query Error');
                    }  
   				 })
            });  

});

module.exports = router; 

connection.connect(function(err) {

    
  
 
})