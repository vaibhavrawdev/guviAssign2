
let main_container = document.createElement('div');
main_container.setAttribute("class", "container");

let main_row = document.createElement("div");
main_row.setAttribute("class", "row");
	
let preceding_col = document.createElement("div");
preceding_col.setAttribute("class", "col");
	
let main_col = document.createElement("div");
main_col.setAttribute("class", "col-8 bg-info");
main_col.innerHTML = person_list;
let table_header = ["Id", "Name", "E-mail"];
const detail_table = () => {
while(main_col.firstChild) main_col.remove(main_col.firstChild);
let table = document.createElement('table.person_detail');
let tablehead = document.createElement('thead');
let tableheaderrow = document.createElement('tr');
}

let succeeding_col = document.createElement("div");
succeeding_col.setAttribute("class", "col");
main_row.append(preceding_col,main_col,succeeding_col);
main_container.append(main_row);
document.body.append(main_container);

const req = new XMLHttpRequest();
req.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
req.send();
req.onload = function(){

	var data = JSON.parse(this.response);
	person_list = [];
	data.forEach(person => {
		persondeets = person.name;
		person_list.push(persondeets);
	});
}

