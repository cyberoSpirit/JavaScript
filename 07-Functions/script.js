'use strict';

/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //numPassengers=numPassengers||1; ES5
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);

const flight = 'LH234';
const julia = {
  name: 'Julia Juskivna',
  passport: 3568736,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 3568736) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, julia);
console.log(flight);
console.log(julia);
*/
//function which takes call-back function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
/*
  //Higher-order function
  const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
  };
  
  transformer('JavaScript is the best!', upperFirstWord);
  transformer('JavaScript is the best!', oneWord);
  
  const high5 = function () {
    console.log('Five!');
  };
  
  document.body.addEventListener('click', high5);
  
  ['Jonas', 'Martha', 'Adam'].forEach(high5);
  
  //function that returns new function
  const greet = function (greetings) {
    return function (name) {
      console.log(`${greetings} ${name}`);
    };
  };
  
  const greeterHey = greet('Hey');
  greeterHey('Julia');
  greeterHey('Steven');
  greet('Hello')('my Rewiever!');
  
  // const greet2 = greetings => {
  //   return name => {
  //     console.log(`${greetings} ${name}`);
  //   };
  // };
  
  const greet2 = greetings => name => console.log(`${greetings} ${name}`);
  
  const greeterHey2 = greet2('Hey my dear');
  greeterHey2('Julia');
  greeterHey2('Steven');
  greet2('Hello')('my Rewiever!');
  */

/*
  //call and apply method
  const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
  };
  
  lufthansa.book(239, 'Julia Juskivna');
  lufthansa.book(635, 'John Smith');
  
  const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };
  
  const book = lufthansa.book;
  //now it is regular function call,  no method. Does not work.
  //book(23, 'Sarah Williams');
  
  book.call(eurowings, 23, 'Sarah Williams');
  console.log(eurowings);
  
  const flightData = [583, 'George Cooper'];
  book.apply(eurowings, flightData);
  
  console.log(eurowings);
  
  book.call(eurowings, ...flightData);

  */

/*
  //bind method
  //book.call(eurowings, 23, 'Sarah Williams');
  //if we need to use some method a lot of times wit the one the same object
  const bookEW = book.bind(eurowings);
  bookEW(23, 'Olena Williams');
  bookEW(23, 'Steven Williams');
  
  //partial application: some data is already predifined
  const bookEW23 = book.bind(eurowings, 23);
  bookEW23('Olena Yelp');
  bookEW23('Steven Wind');
  
  //With Event Listeners
  lufthansa.planes = 300;
  lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
  };
  
  //Bind buing to lufthansa otherwise it will be this of button
  document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
  
  //Partial application
  const addTax = (rate, value) => value + value * rate;
  console.log(addTax(0.1, 200));
  
  const addVAT = addTax.bind(null, 0.23);
  //addVAT = (rate, value) => value + value * rate;
  
  console.log(addVAT(100));
  console.log(addVAT(23));
  
  const vatAdd = function (rate = 23) {
    return function (value) {
      return value + value * rate;
    };
  };
  
  console.log(vatAdd()(100));
  console.log(vatAdd(30)(100));
  console.log(vatAdd(23)(100));
  */

//Function that run only once
// const runOnce = function () {
//   console.log('This function never run again');
// };

// runOnce();

/*
//IIFE
(function () {
  console.log('This function never run again');
})();

(() => console.log('This function ALSO never run again'))();
*/

/*
//Closure 1
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

/*
//Closure 2
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;

  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();
*/

/*
//closure 3
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`We will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
*/
