'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//slice
//let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2, -1)); // copy elements to a new one

// console.log(arr.slice());
// console.log([...arr]);

// //Splice
// console.log(arr.splice(2, 3)); //cut of selected elements to the new array
// console.log(arr);

//reverse
//let arr2 = ['f', 'g', 'h', 'i', 'j'];
// console.log(arr2.reverse());
// console.log(arr2);

//concat
//const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

//const arr3 = [23, 11, 64];
// console.log(arr3[0]);
// console.log(arr3.at(0));

// //take the last element of array
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
// console.log(arr3.at(-1));

/*
//forEach loop
//brake is not workin in forEach loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// }

// console.log('--------------FOREACH------------------');
// movements.forEach(function (movement) {
//   //this is callback function
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// });


//second variant
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log('--------------FOREACH------------------');
//parameters order is strict
//mov - current element, i - index, arr - entire array, that we are looping through
movements.forEach(function (mov, i, array) {
  //this is callback function
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});
*/

/*
//loop set
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

/*
//map
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

//arrow-function analog
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
*/

/*
//filter
const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);
*/

/*
//reduce

console.log(movements);

//acc= variable for result at every step
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc + cur;
// }, 0); //acc=0 at the beginning

const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);

console.log(balance);
*/

/*
const eurToUsd = 1.1;
console.log(movements);

const total = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(total);
*/
/*
//find
const elem = movements.find(mov => mov < 0);
console.log(movements.find(mov => mov < 0));

console.log(accounts.find(ac => ac.owner === 'Jessica Davis'));
for (const ac of accounts) {
  if (ac.owner === 'Jessica Davis') {
    console.log(ac);
    break;
  }
}
*/

/*
//Equality
console.log(movements);
console.log(movements.includes(-130));
//Some
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);
//Every
console.log(account4.movements.every(mov => mov > 0));
*/

/*
//separate callback
const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/*
//map, flat, flatMap
const arr = [[[1, []], 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat(3));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
console.log(allMovements.reduce((acc, el) => acc + el, 0));

const accMovSum = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, el) => acc + el, 0);

const accMSum = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, el) => acc + el, 0);
console.log(accMSum);
*/

/*
//Strings
const owners = ['Jonas', 'Julia', 'Adam', 'Martha'];
console.log(owners.sort());

//Numbers
console.log(movements);
console.log(movements.sort());

//return <0 A,B
//return >0 B,A
movements.sort((a, b) => b > a);
//movements.sort((a, b) => b - a);
console.log(movements);
*/

/*
//Creating and filling Arrays
console.log([1, 2, 3, 4, 5, 6]);
console.log(new Array(1, 2, 3, 3, 4, 5, 6));

const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));
x.fill(1, -4, -2);

console.log(x);

//Array.from()
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const p = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 100));
console.log(p);
*/

/*
//for testing, put this code into in script.js file
////2
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(m => m > 0)
//   .reduce((acc, d) => acc + d, 0);

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, d) => (d >= 1000 ? count + 1 : count), 0);
// console.log(bankDepositSum);

//3
// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       //curly braces are used to return multiple value.
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums; //return must be used explicitly
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(sums);

// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       //curly braces are used to return multiple value.
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums; //return must be used explicitly
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(sums);

//4
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'and', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titleCase;
};

console.log(convertTitleCase(`this is a nice title`));
console.log(convertTitleCase(`this is a LONG title but not too long`));
console.log(convertTitleCase(`and here is another title with an EXAMPLE`));
*/
