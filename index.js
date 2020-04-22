// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter 2 is using a global variable.
 * counter 1 has a global variable returned as a function.
 *  and returning a function inside.
 
 * 2. Which of the two uses a closure? How can you tell?

 * counter 1. because it is returning a function from within.

 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 

 counter1 is preferable when the function needs to store memory of itself.

 counter2 is preferable when you want to be simple and concise. And not add complexity when it is not needed.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  let score = [];

  score = Math.floor(Math.random() * 3);

  return score;
}
console.log(inning());
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, */

function finalScore(callback, innings) {
  // totalScore = { home: 0, away: 0 };
  let teamScore1 = 0;
  let teamScore2 = 0;

  for (let i = 0; i < innings; i++) {
    teamScore1 += inning();
    teamScore2 += inning();
  }

  return { teamScore1, teamScore2 };
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each point in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */
function getInningScore(anything) {
  let home = anything();

  let away = anything();

  return { home, away };
}
console.log(getInningScore(inning));
function scoreBoard(getInningScore, inning, innings) {
  let home = 0;
  let away = 0;
  for (let i = 0; i < innings; i++) {
    const score = getInningScore(inning);
    home += score.home;
    away += score.away;
    console.log(
      "inning: " + (i + 1) + " awayTeam:" + away + " homeTeam:" + home
    );
  }
  return { home, away };
}
console.log(scoreBoard(getInningScore, inning, 9));
