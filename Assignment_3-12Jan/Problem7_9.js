// Problem 7
function assertobjectsequal(actual,expected,testname){

    const a = JSON.stringify(actual);
    const b = JSON.stringify(expected);
    if(a===b){
        console.log("Passed");
    }
    else{

        console.log(`FAILED ${testname}, expected ${a} but got ${b}`);
    }
}

actual = {foo:5,bar:6,yolofactor:false};
expected = {foo:5, bar:6,yolofactor:true};
assertobjectsequal(actual,expected,"yolo");

//Problem 8

var securityQuestions = [
    {
        question: "What was your first pet's name?",
        expectedAnswer: "FlufferNutter"
    },
    {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
    },
    {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
    }
]

function checksecurityQuestions(securityQuestions, question, answer){
    securityQuestions.forEach(indivobj => {
        if(question===indivobj.question){
            if(answer===indivobj.expectedAnswer){
                console.log(true);
            }
            else console.log(false);
        }
    })
}
var ques = "What city were you born in?";
var ans = "NYC";
checksecurityQuestions(securityQuestions,ques,ans);

//Problem 9

var students = [
    {name: "Siddharth Abhimanyu", age: 21},{name: "Malar", age:25},
    {name: "Maari", age: 18}, {name: "Bhallala Deva", age: 17},
    {name: "Baahubali", age: 16},{name: "AAK chandran", age: 23},
    {name: "Gabbar Singh", age: 33},{name: "Mogambo", age: 53},
    {name: "Munnabhai", age: 40}, {name: "Sher Khan", age: 20},
    {name: "Chulbul Pandey", age: 19}, {name: "Anthony", age: 28},
    {name: "Devdas", age:56}
]

function returnMinors(arr){
    var underagelist = [];
    arr.forEach(person => {
        if(person.age<20){
            underagelist.push(person.name);
        }
    }) 
    return(underagelist);
}
console.log(returnMinors(students));
