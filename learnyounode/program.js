/*learnyounode exercises from nodeschool.io */
/* https://github.com/workshopper/learnyounode */
//Exercise 1
//Print Hello World
//console.log('HELLO WORLD')


//Exercise 2
//Sum console arguments
/*
if (process.argv.length>2){
	var arr = process.argv.slice(2, process.argv.length).map( function(val) {return parseInt(val); } )
	var sum = arr.reduce(function(prev, curr) { return prev + curr; } )
	console.log(sum)
	}
else
	console.log(0)
*/

//Exercise 3
//Count newlines in file
/*var fs = require('fs')
var path = process.argv[2]
var str = fs.readFileSync(path).toString()
console.log(str.match(/\n/gi).length)*/

//Exercise 4
//Count newlines async
/*var fs = require('fs')
var path = process.argv[2]
fs.readFile(path, 'utf8', (err,data) => {
	if (err) 
		throw err; 
	console.log(data.match(/\n/gi).length);
	} 
) */
	
//Exercise 5
//grep on ls
/*var fs = require('fs')
var path = process.argv[2]
var ext = process.argv[3]
var re = new RegExp("."+ext+"$", "gi")
fs.readdir(path, (err, data) => {
	if (err) 
		throw err;
	var arr = data.filter( (val) => { if (val.match(re) !== null) return true; else 	return false; } )
	for (i=0; i<arr.length; i++)
		console.log(arr[i]);
	}
)*/

//Exercise 6
//grep on ls with modules
/*var path = process.argv[2];
var ext = process.argv[3];
var mod = require('./ex6');

mod(path, ext, (err, data) => {
	if (err) 
		throw err;
	data.forEach((file) => {console.log(file)} );
	}
);*/

//Exercise 7
/*
var http = require('http');
var url = process.argv[2];
http.get(url, (response) => {
	response.setEncoding('utf8');
	response.on("data", console.log);
	}
)*/


//Exercise 8
/*var http = require('http');
var url = process.argv[2];
http.get(url, (response) => {
	response.setEncoding('utf8');
	var arr = [];
	response.on("data", (data) => {
		arr.push(data);
		}
	);
	response.on("end", () => { 
		str = arr.join('');
		console.log(str.split('').length)
		console.log(arr.join('')); 
		}
	);
	}
);*/

//Exercise 9
/*var http = require('http');
var url = process.argv.slice(2,5);
var responses = [undefined,undefined,undefined];
var printResp = function () {
	if ( responses.every((val) => { return val !== undefined}))
	{
		responses.forEach((s) => {console.log(s)});
	}
}
url.forEach( (url, index) => {
	http.get(url, (response) => {
		var arr = [null, null, null];
		//response.setEncoding('utf8');
		response.on('data', (data) => {arr.push(data.toString())});
		response.on('end', () => {
				responses[index] = arr.join('');
				printResp();
			});
		}
	);
	} 
);*/

//Exercise 10
/*var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

var server = net.createServer( (socket) => {
	var str = strftime('%Y-%m-%d %H:%M') + '\n';
	socket.write(str);
	socket.end();
	}
);

server.listen(port);
*/

//Exercise 11
/*var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer( (request, response) => {
	var f = fs.createReadStream(path);
	f.pipe(response);
	}
);

server.listen(port);*/

//Exercise 12
/*var http = require('http');
var t2map = require('through2-map');
var port = process.argv[2];

var server = http.createServer( (request,response) => {
	request.pipe(t2map({wantStrings: true}, (chunk) => {
			return chunk.toUpperCase();
			}
		)).pipe(response);
	} 
);

server.listen(port);
*/

//Exercise 13
var url = require('url');
var http = require('http');
var port = process.argv[2];

function JSONTime (request, response) {
	var context = url.parse(request.url, true);
	var date = new Date(context.query.iso);
	var time = {
		hour:date.getHours(), 
		minute:date.getMinutes(), 
		second:date.getSeconds()
		};
	response.write(JSON.stringify(time));
	response.end();
}

function UNIXTime (request, response) {
	var context = url.parse(request.url, true);
	var date = new Date(context.query.iso);
	var time = {
		unixtime:date.getTime()
	};
	response.write(JSON.stringify(time));
	response.end();
}

var server = http.createServer( (request, response) => {
		var context = url.parse(request.url, true);
		
		if (context.pathname === '/api/parsetime')
			JSONTime(request, response);
		if (context.pathname === '/api/unixtime')
			UNIXTime (request, response);
	}
);

server.listen(port)

