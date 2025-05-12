
// practice 1

const price = 4500;

if(price >= 6000){
    const discount = price / 100 *15;
    const pay = price - discount;
    console.log(pay);
}else if(price >= 3000){
    const discount = price / 100 *5;
    const pay = price - discount;
    console.log(pay);
}else{
    console.log(price);
}

// practice 2

const age = 62;

if(age <= 12){
    console.log("Free for children.");
}else if(age >= 60){
    console.log("50% discount for senior citizens.");
}else{
    console.log("You have to pay the full amount.");
}


// practice 3

const bankBalance = 1100;

if(bankBalance <= 1000){
    console.log("Deposit kor");
}else if(bankBalance > 5000){
    console.log("Tui Dhoni amay Biye kor");
}else{
    console.log("Bindas Life enjoy Kor");
}

// practice 4

const marks = 90;

if(marks < 50){
    console.log("Fail");
}else if(marks > 80){
    console.log("A+");
}else{
    console.log("Pass");
}

// practice 5

const bookPageNumber = 500;

if(bookPageNumber < 100){
    console.log("Small Book");
}else if(bookPageNumber > 500){
    console.log("heart-attack-size-book");
}else{
    console.log("Mid-size Book");
}

// practice 6

const temp = 13;

if(temp < 0){
    console.log("Ice");
}else if(temp > 20){
    console.log("Hot Hot");
}else{
    console.log("Cool Cool");
}

// practice 7

const level = 55;

if(level < 10){
    console.log("novice");
}else if(level > 50){
    console.log("Pro Gamer");
}else{
    console.log("Expert");
}