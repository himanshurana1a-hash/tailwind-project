// Date predefined function


const date = new Date();
console.log('date : ', date);
console.log('date : ', date.toDateString());
console.log('day : ', date.getDay());
console.log('Month : ', date.getMonth());



// Math pre-defined func
let num =4;
console.log(Math.sqrt(num));
console.log(Math.pow(num,2));


// square star pattern
for(let i = 1; i<= 5; i++){
    let star= "";
    for (let j = 1; j<=5; j++){
        star += "* ";
        
    }
    console.log(star);
}

// right triangle pattern
for(let i = 1; i<=5; i++){
    let star = "";
    for(let j = 1; j<=i; j++){
        star+= "* ";
    }
    console.log(star)
}


//  reverse triangle pattern
for (let i = 5; i >= 1; i--) {
    let star = "";

    for (let j = 1; j <= i; j++) {
        star += "* ";
    }

    console.log(star);
}
