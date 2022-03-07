'use strict';

/*

//CC1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy �")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4
*/

/*
const julD = [3, 5, 2, 12, 7];
const katD = [4, 1, 15, 8, 3];

const julD2 = [9, 16, 6, 8, 3];
const katD2 = [10, 5, 6, 1, 4];

const printDogs = function (julDogs, katDogs) {
  //array without first and the last two elements of Julia's array
  const jD = julDogs.slice(1, -2);
  console.log(jD);
  const allDogs = jD.concat(katDogs);
  console.log(allDogs);

  allDogs.forEach((age, i, array) => {
    console.log(
      age >= 3
        ? `Dog number ${i} is an adult, and is ${age} years old`
        : `Dog number ${i} is still a puppy �`
    );
  });
};
printDogs(julD, katD);
printDogs(julD2, katD2);
*/

/*
CC2

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

/*
const dogsAge = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (dogsAg) {
  console.log(dogsAg);
  const humansAge = dogsAg.map(ag => (ag <= 2 ? 2 * ag : 16 + 4 * ag));
  const adults = humansAge.filter(ag => ag > 18);
  const avg = Math.trunc(
    adults.reduce((acc, ag, i, arr) => acc / arr.length + ag, 0)
  );
  console.log(avg);
  return avg;
};
calcAverageHumanAge(dogsAge);
*/

/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining
*/
/*
const dogsAge = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = dogsAg =>
  dogsAg
    .map(ag => (ag <= 2 ? 2 * ag : 16 + 4 * ag))
    .filter(ag => ag > 18)
    .reduce((acc, ag, i, arr) => acc / arr.length + ag, 0);

console.log(calcAverageHumanAge(dogsAge));
*/

/*
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: 
recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) �
3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects �)
Hints:
§ Use many different tools to solve these challenges, you can use the summary lecture to choose between them �
§ Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 
1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
*/
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1
const calcRecommendedFoodAmount = function (dog) {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
};

const dogsRecommendedFoodAmount = function (dogs) {
  dogs.forEach(d => calcRecommendedFoodAmount(d));
};
dogsRecommendedFoodAmount(dogs);
console.log(dogs);

//2
const findSarahsDog = dogs => dogs.find(d => d.owners.includes('Sarah'));
console.log(findSarahsDog(dogs));

//3
const ownersEatTooMuch = dogs
  .filter(d => d.curFood > d.recommendedFood)
  .flatMap(d => d.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(d => d.curFood < d.recommendedFood)
  .flatMap(d => d.owners);
console.log(ownersEatTooLittle);

//4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//5.
console.log(dogs.some(d => d.curFood === d.recommendedFood));

//6.
console.log(
  dogs.some(
    d =>
      d.curFood > d.recommendedFood * 0.9 && d.curFood < d.recommendedFood * 1.1
  )
);

//7
const goodFeeded = dogs.filter(
  d =>
    d.curFood > d.recommendedFood * 0.9 && d.curFood < d.recommendedFood * 1.1
);
console.log(goodFeeded);

//8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects �)

const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
*/
