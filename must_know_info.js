// anonymous Functions function without name
// document.addEventListener("click", function() {
//   alert("Thanks for Clicking me");
// });

// Arrow function
// document.addEventListener("click", () => alert("Thanks for Clicking me"));
let number = [10, 21, 22, 19, 9];

// let doubleNumber = number.map(function(n) {
//   return n * 2;
// });
let doubleNumber = number.map(n => n * 2); // arrow func return by default
// console.log(doubleNumber);

let ray = {
  first: "Ray",
  last: "Mica",
  driveCar() {
    let func = () => console.log(this);
    func(); // called by enclosing object 'Ray', b'se => fxn do not have their own "this" keywords, => looks for the scope which have the "this" keyword
    console.log(this.first + " " + this.last + " is driving a Car");
  }
};
// ray.driveCar();

// function Hoisting
cool(); // works, because of hoisting, only for a named function

function coll() {
  console.log("this is cool");
}

//console.log(num); // does not work

let num = 122;
