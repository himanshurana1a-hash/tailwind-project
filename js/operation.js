//  Arthmetic operator
// let a = 39;
// let b = 30;
// console.log(" a + b = ", a + b);
// console.log(" a - b = ", a + -b);
// console.log(" a * b = ", a * b);
// console.log(" a / b = ", a / b);
// console.log(" a % b = ", a % b);
// console.log(" a ** b = ", a ** b); // 39^30

// unary operator
// let a = 5;
// let b = 2;
// console.log("a = ", a, "& b = " , b);
// a = a + 1;  increment  a++ ,
// a++ -> post increment  ++a pre increment
// a = a-1; decrement
// a--; -> post decrement , --a pre decrement
// console.log("a-- = ",a--);
// console.log(a);

// assignment operator
// let a= 5;
// let b = 6;
// a += 4  ,a = a + 4
//  a -= 2 , a = a - 2
// a *= 2 , a = a + 2
// a %= 2 ,a = a % 2
// a **= 4
// console.log("a =" ,a);


// comparision operator
// let a = 5;
// let b = 2;
// console.log("5==2" , a==b); // true , false
// console.log("5 != 2", a!=b);


// let a = 5;
// let b = 56 // string -> convert into  number
// // console.log("a !== b", a!==b);
// console.log("6 >= 5" , a >= b);

// logical operators
// Logical AND (&&)
let a = 6;
let b = 5;

console.log("cond1 && cond2 =", a < b && a === 6);

// Logical OR (||)
let c = 6;
let d = 5;

console.log("cond1 || cond2 =", a < b || a === 6);

// logical NOT (!)
let p = 6;
let q = 5;
console.log("!(6<5) = ", !(p < q));
console.log("!(6<5) =", !(p === 6));

// conditional statement
// if statement
// let age = 16;
// if (age >= 18) {
//     console.log("Elligible for vote ");
// }
// if (age < 18) {
//     console.log("Not elligible for vote");

// }
// let mode = "light";
// let color;
// if (mode === "dark") {
//    color = "black";
// }
// if (mode === "light") {
//     color = " white";
// }
// console.log(color);

// if- else
// let mode = "dark";
// let color;
// if (mode === "dark") {
//     color = "black";
// }

// else{
//     color = "white"
// }
// console.log(color);

// let age = 24;
// if (age>=18) {
//     console.log("yes you can vote"); 
// }
// else{
//     console.log("No you can not vote");
// }
//  let num = 21;
//  if (num%2 === 0) {
//     console.log( num ," is even"); 
//  } else{
//     console.log( num ," is odd");

//  }

// else- if statement
// let mode = "dark";
// let color;
// if (mode === "dark") {
//     color = "black";
// } else if (mode === "light") {
//     color = "white";
// } else if (mode === "blue") {
//     color = "blue";
// } else {
//     color = "white";
// }
// console.log(color);

// if (mode === "dark") {
//     console.log(mode);
// }


let age = 16;

 age >= 18 ? "adult " : "not adult "; // simpler , compact if-else

// console.log(result);

// alert("hello"); // one time pop up

//  let name = prompt("hello");
//  console.log(name);

//  practice question 1
// let num = prompt("enter a number :");
// if (num%5 === 0){
//     console.log( num, "is multiple of 5");
// } else {
//     console.log(num, "is not multiple of 5");
    
// }

// practice question 2
let score = prompt("enter your score(0 , 100)");
let grade;
if (score >= 90 && score <= 100){ 
    grade = "A";
} else if (score >= 70 && score <= 89){
    grade= "B";
} else if (score >= 60 && score <= 69){
    grade= "C";
}else if (score >= 50 && score <= 59){
    grade= "D";
} else if (score >= 0 && score <= 49){
    grade= "E";
} 
console.log("according to your scores , your grade was :" , grade);
