//var ProbeDao = require(__base+"lib/dao/ProbeDao")();
//var probeDao = new ProbeDao();

exports.log = function(req, res){
	console.log(req.params.txt);
	res.json({ message: 'OK' });
};