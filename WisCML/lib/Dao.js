/**
 * DB tools
 */

var sqlite3 = require('sqlite3').verbose(); 
var db = new sqlite3.Database(__base+'wiscml.db'); 

module.exports = function() {
	
	function Dao() {
	};
	
	Dao.prototype.recreateTables = function(callback) {
			db.serialize(function() {				
				db.run("DROP TABLE IF EXISTS data");
				db.run("CREATE TABLE data ("
						+ "stamp DATETIME,"
						+ "t1 REAL,"
						+ "t2 REAL,"
						+ "t3 REAL,"
						+ "t4 REAL,"
						+ "r1 BOOL,"
						+ "r2 BOOL,"
						+ "r3 BOOL,"
						+ "r4 BOOL,"
						+ "r5 BOOL"
						+ ")");
				
				db.run("DROP TABLE IF EXISTS logs");
				db.run("CREATE TABLE logs ("
						+ "stamp DATETIME,"
						+ "category TEXT,"
						+ "value TEXT"
						+ ")");
				callback();
			});
	};
	
	Dao.prototype.insertLog = function(category, value, callback) {
		db.serialize(function() {
			db.run("INSERT INTO logs(stamp, category, value) VALUES" +
					" (datetime('now', 'localtime'), ?, ?)", category, value, function(err){
				if (err) {
					throw err;
				}
				callback();
			});
		});
	};
	
	Dao.prototype.insertData = function(t1, t2, t3, t4, r1, r2, r3, r4, r5, callback) {
		db.serialize(function() {
			db.run("INSERT INTO data(stamp, t1, t2, t3, t4, r1, r2, r3, r4, r5) VALUES" +
					" (datetime('now', 'localtime'), ?, ?, ?, ?, ?, ?, ?, ?, ?)", t1, t2, t3, t4, r1, r2, r3, r4, r5, function(err){
				if (err) {
					throw err;
				}
				callback();
			});
		});
	};


	Dao.prototype.dumpTables = function(callback) {
		db.serialize(function() {
			db.each("SELECT * FROM data", function(err, row) {
		      console.log(row);
			});
			db.each("SELECT * FROM logs", function(err, row) {
			  console.log(row);
			});
			callback();
		});
	}; //*/
	
	return Dao;
};