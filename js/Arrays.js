let marks = [97, 67, 84, 44, 87];
console.log(marks);
console.log(marks.length); // property

let heroes = ["hulk", "shaktman", "ironman", "spiderman", "antman", "thor"];
// // for loop
// for (let index = 0; index < heroes.length; index++) {
//     console.log(heroes[index]);
// }

// for of loop
for (let hero of heroes) {
    console.log(hero);
}

let cities = ["heydrabad", "delhi", "pune", "mumbai"];
for (let city of cities) {
    console.log(city.toUpperCase());

}

let marks1 = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks) {
    sum += val
}
let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);

// practice question 2
let items = [250, 645, 300, 900, 50];
// let i =0;
// for(let val of items){
//     let offer = val / 10;
//     items [i] = items[i] - offer
//     console.log(`value after offer =  ${items[i]}`);
//     i++;
// }


for (let i = 0; i < items.length; i++) {
    let offer = [items] / 10;
    items[i] -= offer;
}
console.log(items);


// arrays methods ->

// push -> add items at end
let FoodItems = ["patato", "chips", "kurkure", "apple", "gavava"];
FoodItems.push("litchi", "burger");
console.log(FoodItems);

// pop -> delete item from array
FoodItems.pop();
console.log(FoodItems);
let deletedItems = FoodItems.pop()
console.log("deleted", deletedItems);

// toString -> covert array to string
console.log(FoodItems);
console.log(FoodItems.toString());

let numbers = [97, 67, 87, 78, 89];
console.log(numbers);

console.log(numbers.toString());

// concat
let marvelHeroes = ["ironman", "spiderman", "thor"];
let dcHeroes = ["superman", "batman"];
let indianHeroes = ["saktiman"];
let allHeroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(allHeroes);

// unshift -> add at start
let acters = ["akshay", "salmam", "sharukh"];
// let val = acters.unshift("bobby");
console.log(acters)
// console.log(val);

// shift -> delete  from start
let val = acters.unshift();
console.log(val);

// slice ->return a piece of array

let arr = ["thar", "bolero", "fortuner", "scorpio", "swift", "i20"];
console.log(arr);
console.log(arr.slice(2, 3));

// splice -> add , remove , replace
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr1);
// arr1.splice(2,2,101,102);

// Add element
arr1.splice(2, 0, 101);
// delete element
// replace element

// practice question- create an array to store companies -> "Bloomerg","Uber","Google","IBM","Netflix"
// a. Remove the first compony from the array
// b. Remove Uber and Add Ola in its place
// c. Add Amazon at the end

let companies = ["Bloomerg", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
companies.splice(2, 1, "Ola")
companies.push("Amazon")

