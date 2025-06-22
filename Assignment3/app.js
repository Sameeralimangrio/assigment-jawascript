// Assignment 1

// var city = prompt("Enter city name:");
// if (city.toLowerCase() === "karachi") {
//     document.write("Welcome to city of lights");
// } else {
//     document.write("Welcome to " + city); 
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Assignment 2

// var gender = prompt("Enter your gender (male/female):");
// if (gender.toLowerCase() === "male") {
//     document.write("hello .");
// } else if (gender.toLowerCase() === "female") {
//     document.write("Good Morning Ma'am.");
// } else {
//     document.write("Good Morning!"); 
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Assignment 3

// var fuel = parseInt(prompt("Enter remaining fuel in litres:"));
// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car");
// } else {
//     document.write("Fuel level is okay."); 
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Assignment 4

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true"); // This alert will display
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true"); // This alert will NOT display
// }

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true"); // This alert will NOT display
// }
// if (c === 13) {
//     alert("condition 2 is true"); // This alert will display
// }
// if (++c < 14) {
//     alert("condition 3 is true"); // This alert will NOT display
// }
// if (c === 14) {
//     alert("condition 4 is true"); // This alert will display
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals"); // This alert will display
// }

// if (true) {
//     alert("True"); // This alert will display
// }
// if (false) {
//     alert("False"); // This alert will NOT display
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat"); // This alert will display
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Assignment 5

// var secretNumber = 7; 
// var userGuess = parseInt(prompt("Guess the secret number (1-10):"));

// if (userGuess === secretNumber) {
//     document.write("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     document.write("Close enough to the correct answer");
// } else {
//     document.write("Sorry, try again!");
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Assignment 6

// var checkNumber = parseInt(prompt("Enter a number to check divisibility by 3:"));

// if (checkNumber % 3 === 0) {
//     document.write("The number " + checkNumber + " is divisible by 3.");
// } else {
//     document.write("The number " + checkNumber + " is NOT divisible by 3.");
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Assignment 7

// var num = parseInt(prompt("Enter a number:"));
// if (num % 2 === 0) {
//     document.write(num + " is an even number.");
// } else {
//     document.write(num + " is an odd number.");
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Assignment 8

// var temp = parseInt(prompt("Enter temperature:"));
// if (temp > 40) {
//     document.write("It is too hot outside.");
// } else if (temp > 30) {
//     document.write("The Weather today is Normal.");
// } else if (temp > 20) {
//     document.write("Today's Weather is cool.");
// } else if (temp > 10) {
//     document.write("OMG! Today's weather is so Cool.");
// } else {
//     document.write("It's cold!");
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Assignment 9

// var num1 = parseFloat(prompt("Enter first number:"));
// var num2 = parseFloat(prompt("Enter second number:"));
// var operation = prompt("Enter operation (+, -, *, /, %):");
// var result;

// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         result = "Error: Division by zero!";
//     }
// } else if (operation === "%") {
//     result = num1 % num2;     ya ma na kisis k uthay ha isa change kara plz comment likha har jagha code nh chala 

// } else {
//     result = "Invalid operation!";
// }
// document.write("Result: " + result);