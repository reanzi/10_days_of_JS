/*
A function which accept a function as an argument
or 
A function which return a function


*/

//Function as an Argument
document.addEventListener("click", func);

function func() {
  console.log("Thanks for clicking");
}

// Returning  a function
function doubleMe(x) {
  return x * 2;
}
function tripleMe(x) {
  return x * 3;
}
function quadruoMe(x) {
  return x * 4;
}
function pentMe(x) {
  return x * 5;
}
//HO
function createMultiplier(multiplier) {
  return function(x) {
    return x * multiplier;
  };
}

let doubleMe = createMultiplier(2);
/*
which resolves to 
       let doubleMe  = function(x) {
           return x * 2
       }
*/

// Uses of Higher order Functions which are part of the core JS language itself

let myColor = ["red", "orange", "yellow"];

myColor.forEach(callFunc); // forEach accepts a function as an arguments

function callFunc(color) {
  document.write("The color " + color + "is great. <br>");
}
