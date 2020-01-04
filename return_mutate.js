let pets = [
  {
    name: "Meowsalot",
    species: "cat",
    age: 2
  },
  {
    name: "Barksalot",
    species: "dog",
    age: 3
  },
  {
    name: "Purrsloud",
    species: "cat",
    age: 7
  },
  {
    name: "Eatsalot",
    species: "cat",
    age: 0
  }
];

pets.push({
  name: "Puppster",
  species: "dog",
  age: 3
});

// console.log(
//   pets.push({
//     name: "Puppster",
//     species: "dog",
//     age: 3
//   })
// );

// push mutate/change the valiable and returns a value
// console.log(pets);

// map and filter returns a value but does not mutate the variable
// map accepts a function, it returns a brand new value / variable
let maped = pets.map(nameOnly);

function nameOnly(x) {
  return x.name;
}
// console.log(maped);

// Filter create new variable after a check
/*
    filter returns a brand new array; upon looping on the array 
    if the passed function (argument) return TRUE the current value is added to the new array, the OP is true
*/
let cats = pets.filter(onlyCats);

function onlyCats(params) {
  return params.species == "cat";
}
function onlyBabies(x) {
  return x.age < 4;
}

let babyCatNames = pets
  .filter(onlyCats)
  .filter(onlyBabies)
  .map(nameOnly);

console.log(babyCatNames);
