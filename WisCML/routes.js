var Dao = require(__base+"lib/Dao")();
var dao = new Dao();

exports.log = function(req, res){
	dao.insertLog(req.params.category, req.params.txt, function(){
		res.json({ message: 'OK' });
	});	
};

exports.data = function(req, res){
	dao.insertData(req.params.t1
			, req.params.t2
			, req.params.t3
			, req.params.t4
			, req.params.r1
			, req.params.r2
			, req.params.r3
			, req.params.r4
			, req.params.r5
			, function(){
		res.json({ message: 'OK' });
	});	
};

exports.dumpTables = function(req, res){
	dao.dumpTables(function(){
		res.json({ message: 'OK' });
	});	
};

exports.recreateTables = function(req, res){
	dao.recreateTables(function(){
		res.json({ message: 'OK' });
	});	
};