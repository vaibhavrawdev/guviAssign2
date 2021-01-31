function weatherdata(lat,long){
	try{
		if(lat === undefined || long === undefined){
			throw 'Undefined values passed'
		}
		var request2 = new XMLHttpRequest();
		request2.open("GET", `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=59a845e1c598fd099a86cf4d2c3e2a65`)
		request2.send();
		request2.onload = function () {
			var datalist = JSON.parse(this.response);	
			console.log(datalist.main.temp);
		}
	}
	catch(error){console.log("error: ",error);}
}

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all');
request.send();
request.onload = function () {
	var data = JSON.parse(this.response);
	for(country in data){
		const lat = data[country].latlng[0];
		const long = data[country].latlng[1];
		weatherdata(lat,long);
	};
}
