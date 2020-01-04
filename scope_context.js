// scope is the biggest source of confusion regarding variables
// Context is the biggest source of confusion regarding objects

//      SCOPE
let myName = "ray";

function func() {
  if (2 + 2 == 4) {
    myName = "Ray Junior";
  }
}

/*
let uses Block scope
var uses function scope
*/
function func() {
  if (2 + 2 == 4) {
    let myName = "Ray let";
  }
  // myName is not accessible here
}
function func() {
  if (2 + 2 == 4) {
    var myName = "Ray Var";
  }
  // myName is accessible here
}

// func();
// console.log(myName);

//  CONTEXT

let ray = {
  first: "Ray",
  last: "Mica",
  driveCar() {
    function func() {
      console.log(this); //points to global object
    }
    func(); //called by global
    console.log(this); // points to Ray object
    // console.log(this.first + " " + this.last + " is driving a Car");
  }
};

/*
    The this keyword points towards the object that is excuting the current function
*/

ray.driveCar(); //here this is pointing towards Ray, it's called by Ray

// uses of this

function breath() {
  console.log(this.first + " " + this.last + " just inhaled & exhaled");
}

breath.call(ray); // call(X) points the function to X object when calling it
