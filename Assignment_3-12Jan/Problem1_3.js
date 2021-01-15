//Problem 1
var inpobj = {name:"RajniKanth", age: 33, hasPets: false};

function printAllValues(obj){
    console.log(Object.values(obj));
}

printAllValues(inpobj);

//Problem 2

function printAllKeys(obj){
    console.log(Object.keys(obj));
}

printAllKeys(inpobj);

//Problem 3

function convertListToObject(obj){
    console.log(Object.entries(obj));
}

convertListToObject(inpobj);
