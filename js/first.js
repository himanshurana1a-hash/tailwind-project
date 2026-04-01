// variables

// string type
FullName = "Tony stark"
console.log(FullName);

//number type
age = 38;
console.log(age);
price = 99.99;
console.log(price);
radius = 24;
console.log(radius);


// Dynamically typed
FullName = 245;
console.log(FullName);
x = null; //  null is know something in this 
console.log(x);

y = undefined; // but in undefined not known what is in this
console.log(y);

// boollean type variabe -> true value or false value only
isFollow = true;
console.log(isFollow);

// bigint
let x = BigInt("123");
let y = Symbol("hello");

//= -> assignment operator

// variables are case sensitive in java script "a" & "A" are different.
FullName = "Himanshu rajput"
FULLNAME = "Himanshu rana"
console.log(FullName);
console.log(FULLNAME);

// only letters , digits, underscore (_) or $ is allowed. (not even space)
// name @ = "himanshu"  wrong Way .
//  write way.
FullName = "Himanshu Rajput"
_FullName = "Shuban"
$FullName = "Anshul"

// Reserved words cannot be variables like -> console

// var : variables can be re - declared & upadted .A global scope variable.
var age = 23;

var age = 35;

var age = 56;

console.log(age);

// let : variable cannot be re - declared but can be updated . A block scope VAriable
let name = 'himanshu';
let height = 6;
console.log(name);

// const: variable cannot be re - declared or upadated . A block scope variable.

//  block 
{
    let a = 5;

    console.log(a);

}
{
    let a = 6;
    console.log(a);

}

// Data types in java -->
// (primitive 7) --> Number , Boolean , String ,Null, Udefined, Bigint ,Symbol

// (Non - primitive ) --> string 
// object(Arrays, functions) --> collection of values ex-> student name , age , roll no 
const student = {
    // key : value
    name: "himanshu",
    age: 23,
    id: 322453,
};

student[age]  = student["age"] +1;
console.log(student["age"]);











