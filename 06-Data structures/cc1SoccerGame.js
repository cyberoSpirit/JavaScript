//Given data
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

/*
//CC1
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
*/

/*
//CC1 solution
//1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//5
const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;
//6
function printGoals(...gollScorers) {
  // for (let index = 0; index < gollScorers.length; index++) {
  //     console.log(gollScorers[index]);
  // }
  console.log(
    ...gollScorers,
    `There were ${gollScorers.length} golls scored in total`
  );
}

printGoals(...game.scored);
//7
team1 < team2 && console.log(`Team 1 is more likely to win.`);
team1 > team2 && console.log(`Team 2 is more likely to win.`);
team1 === team2 && console.log(`They have same chances to win.`);
*/

//CC2
/*
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/
/*
//CC2 solution
//1
for (let plNumber = 0; plNumber < game.scored.length; plNumber++) {
  console.log(`Goal ${plNumber + 1}: ${game.scored[plNumber]}`);
}

for (let [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}
//2
let sum = 0;
const odds = Object.values(game.odds);
for (let odd of odds) {
  sum += odd;
}
console.log(sum / odds.length);

//3
let sum = 0;
const odds = Object.entries(game.odds);
for (let odd of odds) {
  if (odd[0] === 'x') {
    console.log(`Odd of draw: ${odd[1]}`);
  } else {
    console.log(`Odd of victory ${game[odd[0]]} : ${odd[1]}`);
  }
}
//4
let scorers = {};
for (let scorer of game.scored) {
  scorers[scorer] = !scorers[scorer] ? 1 : scorers[scorer] + 1;
}
console.log(scorers);
*/

/*
//CC3
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
 */
/*
//1
const events = [...new Set(gameEvents.values())];
console.log(events);
//2
gameEvents.delete(64);
console.log(gameEvents);
//3
console.log(
  `An event happened, on average, every ${Math.trunc(
    90 / gameEvents.size
  )} minutes`
);
//4
for (const [min, event] of gameEvents) {
  console.log(
    min <= 45
      ? `[FIRST HALF] ${min}: ${event}`
      : `[SECOND HALF] ${min}: ${event}`
  );
}
*/
