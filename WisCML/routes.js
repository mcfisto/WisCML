var Dao = require(__base+"lib/Dao")();
var dao = new Dao();

var CATEGORIES = {
		1: 'INFO',
		999: 'ERROR'
};

var MESSAGES = {
		1: 'Neni zadano ID rele k zapisu',
		2: 'Neni zadano ID rele ke cteni',
		3: 'System startuje...',
		4: 'System pripraven.',
		5: 'Reading relay values...',
		6: 'Reading temperature values.',
		7: 'Main...',
		8: 'Waiting 10 s',
		9: 'Sleep ended',
		10: 'ERROR',
		11: 'ERROR',
		12: 'ERROR',
		13: 'ERROR',
		14: 'ERROR',
		15: 'ERROR',
};

exports.log = function(req, res){
	var category = CATEGORIES[req.params.category];
	var message = MESSAGES[req.params.txt];
	dao.insertLog(category, message, function(){
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