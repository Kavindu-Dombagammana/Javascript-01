//console.log("Hello World!");

//alert("This is an alert");
//this is an alert and pops up when the site is refreshed

//Can use both with or without a semicollen ";"
//console.log("Hello");
//console.log("World")
//This is both true

//Variables

// let name = "Brutus";

// console.log(name);
// console.log(typeof name); // This prints the type of the variable name

// let age = 22;
// console.log(age);
// console.log(typeof age); // This prints the type of the variable name

// let male = true;
// console.log(male);
// console.log(typeof male); // This prints the type of the variable name

//Javascript is not type safe and can assign any to a variable(type safe means it can only assign only one data type like java)

// name = 10;
// console.log(name);

// let cust_Name = "Saman";
// let cust_Age = 20;
// let customer = []; //This is an array
// let customers = {}; //This is an object
// let someVariable;

// console.log(typeof cust_Name);
// console.log(typeof cust_Age);
// console.log(typeof customer);
// console.log(typeof customers);
// console.log(typeof someVariable);


// let num1;
// num1 = 10;

// let num2;
// num2 = 20
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// let x = 5;
// let y = 3;
// let text = "Hello";
// let result = x + y;
// console.log(result);

// console.log(x+y+text);

// comparisons
// >     <     >=     <=     ==     ===     !=

// let x = 10;
// let y = "10";

// console.log(x == y); // output is true because it only checks the value 
// console.log(x === y);// output is false because it checks the data type too 
// //other operators works same as the java

// Logical operations
//     &&     ||     !

// if(true && true){
//     console.log("Both are true");
    
// }else{
//     console.log("Only one is true");
    
// }

// if(true || true){
//     console.log("Atleast one is true");
    
// }else{
//     console.log("none are true true");
    
// }

// if(!true){
//     console.log("It's false");
    
// }else{
//     console.log("It's true");
    
// }

// let num1 = 9;
// let result = num1 % 2;
// if (result == 1) {
//     console.log("Its an odd number");
    
// }else{
//     console.log("Its an even number");
    
// }

// let marks = 80;

// if (marks >= 75) {
//     console.log("A");
    
// }else if (marks >= 65) {
//     console.log("B");
// }else if (marks >= 55) {
//     console.log("C");
// }else if (marks >= 45) {
//     console.log("D");
// }else if (marks >= 35) {
//     console.log("S");
// }else{
//     console.log("F");
    
// }

let unit = 120;
let bill;
if (unit <= 50) {
    bill = unit * 10;
}else if (unit <= 100) {
    bill = unit * 15;
}else {
    bill = unit *20;
}
console.log("Bill : "+ bill);
