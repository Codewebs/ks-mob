const mysql = require('mysql');

var pool = mysql.createPool({
  		connectionLimit : 500,
        host     : "localhost",
        port     :  3306,
		user:"root",
		password:"",
		database:"labs_dev_kusani"
    });

exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if(err) {
      return callback(err);
    }
    callback(err, conn);
  });
};