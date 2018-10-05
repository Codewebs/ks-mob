var express = require("express");
var router = express.Router();

var conn = require('../cnx');
//var mysql = require("mysql");

/*var mysqlConnection = mysql.createConnection({

 connectionLimit : 100,
        host     : "localhost",
        port     :  3306,
		user:"root",
		password:"",
		database:"labs_dev_kusani"
});

mysqlConnection.connect((err)=>{
	if(!err)
		console.log('Connexion à la BDD reussie' );
	else
		console.log('Connexion Echouée \n Error :' + JSON.stringify(err, undefined, 2));
});*/

router.get('/test', function(req, res, next) {

        conn.getConnection(
            function (err, client) {

                client.query('SELECT * FROM users', function(err, rows) {
                    // And done with the connection.
                    if(err){
                        console.log('Query Error');
                    }

                    res.json(rows);
                    client.release();

                    // Don't use the connection here, it has been returned to the pool.
                });

        });     

});
router.get('/test/:id', (req, res)=>{
	mysqlConnection.query('SELECT * FROM aptitudes WHERE empID=?', [req.params.id], (err, rows, fields) =>{
		if(!err)
			res.send(rows);
		else
			console.log(err);
	})
});

module.exports = router;  
