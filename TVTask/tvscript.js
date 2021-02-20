// GET show api data 
async function tvapidata(search_query){
	try {
		let searchData = await fetch('https://api.tvmaze.com/search/shows?q='+search_query)
		console.log(searchData);
		let searchData_json = await searchData.json();
		let maindiv = document.querySelector('#showcontainer');
		maindiv.innerHTML = "";
		datacontent(searchData_json);
	} catch (error) {
		console.log("api error:", error);
	}

}
// Constructing show content 
function datacontent(showdata){
	var showcontent = document.getElementById('showcontainer');
	var rowcontent = document.createElement('div');
	rowcontent.setAttribute('class', 'row');
	rowcontent.setAttribute('id', 'rowcontent')
	for(obj in showdata){
		let showcard = document.createElement('div');
		showcard.setAttribute('class', 'card col-lg-3 col-md-6 p-4 m-4');
		let showimage = document.createElement('img');
		showimage.class = "card-img-top ";
		if(showdata[obj].show.image!= null){
			showimage.src = showdata[obj].show.image.medium;
		}
		else{
			showimage.src = "http://via.placeholder.com/210x295"
		}
		let cardbody = document.createElement('div');
		cardbody.class = "card-body";
		let showname = document.createElement('h3');
		showname.innerHTML = "Name: " + showdata[obj].show.name;
		let genre = document.createElement('h5');
		genre.innerHTML = "Genres: " + showdata[obj].show.genres;
		let timings = document.createElement('h6');
		timings.innerHTML = "Day: " + showdata[obj].show.schedule.days + " Time: " + showdata[obj].show.schedule.time;

		let network = document.createElement('h6');
		if (showdata[obj].show.network != null) {
			network.innerHTML = "Network: " + showdata[obj].show.network.country.name;
		}
		cardbody.append(showname, genre, timings, network);
		showcard.append(showimage,cardbody);
		rowcontent.append(showcard);
		showcontent.append(rowcontent);
	}
}

//Input search query, lesson learned - don't add a async function as a event listener parameter
//It will throw a event not callable TypeError
let sbutton = document.querySelector('#searchbutton')
sbutton.addEventListener('click', () => {

	let query = document.querySelector('#searchbox').value;
	tvapidata(query);
});
