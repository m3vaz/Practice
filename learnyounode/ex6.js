module.exports = function (path, ext, callback) {
	var fs = require('fs');
	var re = new RegExp("."+ext+"$", "gi")
	fs.readdir(path, (err, data) => {
		if (err) 
			return callback(err);
		var arr = data.filter( (val) => { 
			if (val.match(re) !== null)
				return true; 
			}
		);
		callback(null, arr);
		}
	);
}