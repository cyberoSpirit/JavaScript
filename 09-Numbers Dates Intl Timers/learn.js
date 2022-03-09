/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//Convertion
console.log(Number('23'));
console.log(+'23');

//Parsing
console.log(Number.parseInt('    30px    '));
console.log(Number.parseInt('e23'));
console.log(Number.parseInt('    30px    ', 10));
console.log(Number.parseFloat('    3.5px    '));

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(20 / 0));

console.log(Number.isFinite(23 / 0));
*/

/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(4, 5, 7, 9, 1));
console.log(Math.min(4, '-54', 7, 9, 1));
console.log(Math.min(4, '-54v', 7, 9, 1));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

console.log(Math.trunc(23.3));
console.log(Math.trunc(23.9));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));
console.log(Math.ceil(-23.3));
console.log(Math.ceil(-23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));
console.log(Math.floor(-23.3));
console.log(Math.floor(-23.9));

console.log((23.3456).toFixed(0)); //return string
console.log(+(23.3456).toFixed(3));
*/

/*
//reminder
console.log(5 % 2);
console.log(5 / 2);

const diameter = 287_460_000_000;
console.log(diameter);
*/

/*
//BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 4);

console.log(248524872046294639867305639576307603n);
console.log(BigInt(413947832984));

//Operations
console.log(10000n + 10000n);
console.log(3069745609734082609385620958626n * 10000000n);

const huge = 984756304983762098654856n;
const num = 23;
console.log(huge * BigInt(num));

//Exceptions
console.log(20n > 21.5);
console.log(20n === 20);
console.log(20n == 20);
console.log(typeof 20n);
console.log(huge + ' is really big');

//Divisions
console.log(11n / 3n);
//console.log(11n / 3); throw exception no convertion
console.log(11 / 3);
*/

/*
//Dates and Times
//Create a date
console.log(new Date()); //current time
console.log(
  new Date('Tue Mar 08 2022 17:05:02 GMT+0100 (Central European Standard Time)')
);
console.log(new Date('Mar 08 2022 17:05:02'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33, 15, 23, 5));

console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

const future = new Date(1037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getYear()); //don't use!!! return Year - 1900
console.log(future.getMonth());
console.log(future.getDate()); //day of month
console.log(future.getDay()); //day of week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); //return timestamp Date - 01.01.1970  in miliseconds
console.log(new Date(2142253380000));
console.log(new Date(-2142253380000));
console.log(Date.now()); //retunt imestamp of NOW

future.setFullYear(2040);
console.log(future);

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1);

////Experimenting with API
// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long', //'numeric', '2-digit'
//   year: 'numeric', // '2-digit'
//   weekday: 'long',
// };

// const locale = navigator.language;

// //labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

*/

/*
const num = 3884764.23;
const options = {
  style: 'currency', //'unit',
  unit: 'celsius', //'mile-per-hour',
  currency: 'EUR',
  useGrouping: false,
};

console.log('US', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria', new Intl.NumberFormat('ar-SY', options).format(num));
*/

/*
//Timer
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1}, ${ing2}!`),
  3000,
  'olives',
  'spinach'
);

console.log('Waiting...');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

setInterval(function () {
  const now = new Date();
  console.log(
    new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(now)
  );
}, 3000);
*/
