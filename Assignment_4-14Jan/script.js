var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function () {
	var datalist = JSON.parse(this.response);
	
	//Countries in Asia region
	
	const regionlist = datalist.filter(elem => {
		if(elem.region === "Asia"){
			return true;
		}
	});
	console.log("Countries in Asia: ",regionlist);
	
	//Countries with population less than 2 lakhs.
	
	const poplist = datalist.filter(elem => {
		if(elem.population < 200000){
			return true;
		}
	});
	console.log("Low population countries: ",poplist);
	
	//Printing name,capital and flag url of each country.
	
	datalist.forEach(elem => {
		console.log(elem.name,elem.capital,elem.flag)
	});
	//Printing total population of the world.
	
	const totalpop = datalist.reduce((acc,curr) => {
		return acc + curr.population;
	},0);
	console.log(totalpop);

	//Countries which use USD as currency.
	const currencyUSD = datalist.filter(elem => {
		for(currency in elem.currencies){

			if(elem.currencies[currency].code === "USD"){
				return true;
			}
		} 
	});
	console.log(currencyUSD);
}
