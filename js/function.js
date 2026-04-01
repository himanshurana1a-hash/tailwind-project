function myFunction(){
    console.log("welcome to mu function");
    console.log("we are learning js");
    
}
myFunction();
myFunction();


function myFunction(msj){ //parameter -> input
    console.log(msj);
    
}
myFunction("hello my world")// argument

// function -> 2 number , sum
function sum(x,y){
    // local variables -> scope
    s = x * y;
    return s;   
}

let  val = sum(20,5);
console.log(val);

// arrow function -> part of modren java script
 const  arrowsum = (a,b) => {
    console.log(a + b);
};

// multiplication function 
const arrowmul = (x,y) => {
   console.log(x*y);
   return x*y;
}

const printHello = () => {
    console.log("hello");
};

//   create a function using the "function" keyword that takes a string as an argument and return the number of vowels in the string
function countVowels(str){
let count = 0;
for(const char of str){
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
count++;
    }
}
    console.log(count++);
     return count;
} 
// arrow function 
const countVow = (str) => {
    let count = 0;
for(const char of str){
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
count++;
    }
}
     return count;
};

//  forEach function
let cities =["saharanpur", "delhi", "goa"]
cities.forEach((val, idx, arr) => {

    console.log(val.toUpperCase (), idx , arr);
    
});
 
    //   question -> for a given array  of number , print the square of each value using the for each loop
    let nums =[2,3,4,5,6];

    let calcSqure = (num) => {

    
    // nums.forEach((num) =>{
    //     console.log(num*num);
        console.log(num*num); 
    }
    nums.forEach(calcSqure);
// array methods
    // callBack function
    let num = [11,23,56];
let newArr = num.map((val) => {
    return val *2;
});
console.log(newArr);

// array filter
 let arr = [1,2,3,4,5];
 let evenArr = arr.filter((val) =>{
    return val % 2 !== 0;
 });

 console.log(evenArr);

//  reduce filter
let arr1 = [1,2,3];

 const output = arr1.reduce((prev , curr) =>{
    // return prev + curr;
    return prev > curr ? prev : curr;
});

console.log(output);

 