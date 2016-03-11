//written for Node v5.7.1
//written for Koa v1.2

var koa = require('koa');
var route = require('koa-route');
var request = require('sync-request');
// use sync-request to avoid nested callbacks

var port = 8000;
var weatherKey = 'ad37db89305a916701bbccc3a503f043';

var app = koa();

app.use(reqLogger);

app.use(weatherLogger);

app.use(otherLogger);

app.use(route.get('/', index));



app.listen(port);
console.log('Koa listening on port '+port);

function *index() {
	console.log('index');
	bodyArr = ["<h1>Hello!</h1>"]
	if ('location' in this.request)
		bodyArr.push("<h1>Lat: " + this.request.location.lat + " Long: "+ this.request.location.lon + "</h1>");
	else
		bodyArr.push("<h1>Location request failed</h1>");
		
	if ('weather' in this.request)
		bodyArr.push("<h1>Current Temp (K): " + this.request.weather.temp + "</h1>");
	else
		bodyArr.push("<h1>Weather request failed</h1>");
	this.body = bodyArr.join('');
}

function *reqLogger(next) {
	console.log('reqLogger 1');
	yield next;
	console.log('reqLogger 2');
}

function *otherLogger(next) {
	console.log('otherLogger 1');
	yield next;
	console.log('otherLogger 2');
}

function *weatherLogger(next) {
	// Since yielding to next is the last step (as in spec)
	// and this is chained http calls, should do sync
	console.log('weatherLogger');
	var locRes = request('GET', "http://ip-api.com/json/"+this.request.ip)
	var locInfo = JSON.parse(locRes.getBody().toString())
	if (locInfo.status === 'success') { //successful request
		this.request.location = {};
		this.request.location.lat = locInfo.lat;
		this.request.location.lon = locInfo.lon;
		
		var urlString = "http://api.openweathermap.org/data/2.5/weather?lat="+this.request.location.lat+"&lon="+this.request.location.lon+"&appid="+weatherKey;

		weatRes = request('GET', urlString);
		weatInfo = JSON.parse(weatRes.getBody().toString());
		
		// No details on how this api responds to failure
		if ('main' in weatInfo){
			this.request.weather = {};
			this.request.weather.temp = weatInfo.main.temp;
			this.request.weather.pressure = weatInfo.main.pressure;
			this.request.weather.humidity = weatInfo.main.humidity;
			}
		else
			console.log('Weather Information request failed');
		
		}
	else
		console.log('IP Location request failed');
	yield next
	//"http://ip-api.com/json/<ip>
}