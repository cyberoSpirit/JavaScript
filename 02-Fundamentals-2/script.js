'use strict';//should be the first not commented line of code

/*
//test strict mode

let hasDriversLicence = false;
const passTest = true;

if(passTest) hasDriverLicence = true;
if(hasDriversLicence) console.log("I can drive.");

//const interface = 'Audio'; //reserved for future 
//const private = 345;
*/


/*
//learn function
function logger(){
    console.log("My name is Julia.");
}

logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const juice = fruitProcessor(3, 5);
console.log(juice);
*/


/*
//function declaration
function calcAge(birthYear){
    return 2022 - birthYear;
}

console.log(calcAge(1992));

//function expression (anonymous function)
const calcAge2 = function (birthYear){
    return 2022 - birthYear;
}

console.log(calcAge2(1992));


//arrow function, one line
//arrow functions don`t caught "this"

const calcAge3 = birthYear => 2022 - birthYear;
console.log(calcAge3(1992));

//one parameter, multiline
const yearsUntilRetirement = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1992));

//two parameters, multiline
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement2(1992, 'Julia'));
*/

// function cutFruit(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const applePieces = cutFruit(apples);
//     const orangePieces = cutFruit(oranges);

//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//     return juice;
// }

// const juice = fruitProcessor(3, 5);
// console.log(juice);

/*
//CC1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolhins, avgKoalas) {
    console.log(`${avgDolhins} and K ${avgKoalas}`);
    if(avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})"`);
    }
    else if(avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})"`);
    }
    else{
        console.log(`No winner.`);
    }
}

const dolSc1 = 85;
const dolSc2 = 54;
const dolSc3 = 41;

const koaSc1 = 23;
const koaSc2 = 34;
const koaSc3 = 27;

checkWinner(
    calcAverage(dolSc1, dolSc2, dolSc3), 
    calcAverage(koaSc1,koaSc2, koaSc3));
*/

/*
// Arrays
const friends = ['Michael', 'Steven', 'Peter'];
const years = new Array(1990, 1984, 1933, 2060);

console.log(friends);
console.log(friends[0], friends.length, years[2]);

friends[1] = 'Sonia';
console.log(friends);
friends[5] = 'Olia';
console.log(friends);

const firstName = 'Julia';
const julia = [firstName, 'Somebody', [1991, 1992, 1999, 2010]];
console.log(julia);
*/

//CC2 not helpful

/*
//Objects
const julia = {
    firstName: 'Julia',
    lastName: 'Somebody',
    birthYear: 1990,
    job: 'pianist',
    friends: ['Olena', 'Maria', 'John'],

    //1
    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    //2
    // calcAge: function () {
    //     console.log(this);
    //     return 2022 - this.birthYear;
    // }

    //3
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    }
};

julia.location = 'Sky';    //dot notation
julia['twitter'] = "She don't have any twitter account";  //brasket notation

console.log(julia);
console.log(julia.firstName);
console.log(julia['job']); //if will get a key as a result of sum calculations

const keyPart = 'Name';
console.log(julia['first' + keyPart]);
console.log(julia['last' + keyPart]);

const toReturn = prompt('What do you want to know (firstName, lastName, age)?');
if(julia[toReturn]){
console.log(julia[toReturn]);
} else {
    console.log("I don't know this too :)");
}

//1
console.log(julia.calcAge(1990));
console.log(julia['calcAge'](1990));

//2
console.log(julia.calcAge());

//3
console.log(julia.calcAge()); //to awoid multiple-times calculation
console.log(julia.age);
*/

/*
//CC3
const mark = {
    name: 'Mark',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    name: 'John',
    mass: 95,
    height: 1.95,

    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

let comparisonResult;
if(john.calcBMI() > mark.calcBMI()) {
    comparisonResult = 'bigger BMI compare to';
} else if(john.bmi < mark.bmi) {
    comparisonResult = 'smaller BMI compare to';
} else {
    comparisonResult = 'the same BMI as';
}

console.log(`${john.name} (${john.bmi}) has ${comparisonResult} ${mark.name} (${mark.bmi})`);
*/

//CC$
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];


const tip = bill => bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2;

let billWithTips = [];
for (let i = 0; i < bills.length; ++i) {
    billWithTips.push(bills[i] + tip(bills[i]));
}

console.log(`The bills was ${bills}, the bills with tips was ${billWithTips}`);