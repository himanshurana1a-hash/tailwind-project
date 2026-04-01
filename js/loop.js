//  loops in js -> foor loop 

// print 1 to 9 apna college

for (let i  = 1; i <= 9; i ++) {
    console.log("i = " ,i); // 5  time execute   
}

console.log(i)


// calculate sum of 1 to 5

let sum = 0;
let n = 100;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log("sum = ", sum);     // sum = 0 + 1
console.log("loop has been ended");

// infinite loop -> never runs infinite loop

// while loop 

// let i = 1;
// while ( i<=10) {
//     console.log("himanshu");
//     i++;
// }

// do while loop

let i = 1;
do {
    console.log("himanshu");
    i++;
} while (i <= 5);

// for-of loop

let strj = "javaScript"
let size = 0;
for(let i of str){
    // iterator -> operators
    console.log("i = " , i);
    size ++;

}
console.log("String size = ",size);

// for-in loop

let student = {
    name: "rahul",
    age: 24,
    cgpa: 7.5,
    isPass: "true"
};
for (let key in student) {
    console.log("key = ", key, " , value=", student[key]);
}

//  practise question -> print all even number from 0 to 100


for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log("num = ", num);
    }
}

 // practise question ->  create  a game where you start with any random  game number . ask the user  to keep guessig th game number until the user enters correct number

let gameNum = 25;
let userNum = prompt("Guess the game number : ");

while (userNum != gameNum) {
   userNum =   prompt("You entered wrong number . Guess again")
}
console.log("congratulation you guess the right ");

// // String

let str1 = "hiimanshu";
console.log(str1[4]);

// let str2 = 'rajput'

// string length -> str1.length

// string indices -> str1[0],str1[4]

// Template Literals 
 let obj = {
    item : "pen" ,
    price : 20,
 };
 let output = ` the cost of ${obj.item} is ${obj.price}`;
console.log(output);


let SpecialString = `This is a Template Literals ${1+2+3}`;
console.log(  SpecialString);

// string methods 
let str = "himanshu";
// let newStr =  str.toUpperCase();
// console.log(str);
let newStr =  str.toLowerCase();
console.log(newStr);

// remove white spaces
let strng = "      himanshu   is js   ";
console.log(strng.trim());

// remote part of string
let str2 = "1234567987356";
console.log(str2.slice(1,8));

// join two str -> concadination
let str3 = "himanshu";
let str4 = "rana";
//  let res = str3.concat(str4);
let res = str3 + str4
 console.log(res);

//  replace
let str5 = "shubhan " ;
console.log(str5.replace("s", "h")); // replaceall for all time replace

// find  any character from string
let str6 = "IloveJs";
console.log(str6.charAt(6));



 
