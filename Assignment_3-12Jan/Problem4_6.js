//Problem 4

var arr = ["GUVI","I","am","Geek"];

function transformFirstAndLast(arr){
    const last_index = arr.length - 1;
    return { [arr[0]] : arr[last_index] };
}
console.log(transformFirstAndLast(arr));

// Problem 5

var arr = [["make","Ford"],["model","Mustang"],["year",1964]];


function fromListToObjects(arr){
    console.log(Object.fromEntries(arr));
}
fromListToObjects(arr);

/*
var newobj = {};
const obj = arr.reduce((acc,curr) => {
    curr.map((innerelement)=>{
        newobj = curr[1];
    });
},"");
*/
//console.log(obj);
//
//Problem 6

var nesarray = [[["firstName","Vasanth"],["lastName","Raja"],["age",24],["role","JSWizard"]],[["firstName","Sri"],["lastName","Devi"],["age",28],["role","Coder"]]];

function transformGeekData(nesarray){

    arrobj = nesarray.map(arr=>Object.fromEntries(arr));
    console.log(arrobj);

}

transformGeekData(nesarray);
