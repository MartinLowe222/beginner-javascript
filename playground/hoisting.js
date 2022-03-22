// allows you to access fucntions and variables before they have been created
// just think hoisting works variable declartion and functions declartions hoists them to the top 
console.log("hi");


console.log(age);
var age = 10;
// this does not work you can use hoisting to see if varaibles are created 
console.log(age);

// javascript will move all your functions to top so techinally you can run a function before its exists 
sayHi();

function sayHi(){
    console.log("hey!");
    console.log(add(10,2));
}

function add(a, b){
    return a+ b;
}