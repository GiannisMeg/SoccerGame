const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dortmund",
	players: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnarby",
			"Lewandowski",
		],
		[
			"Burki",
			"Schulz",
			"Hummels",
			"Akanji",
			"Hakimi",
			"Weigl",
			"Witsel",
			"Hazard",
			"Brandt",
			"Sancho",
			"Gotze",
		],
	],
	score: "4:0",
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

const gameEvents = new Map([
	[17, "⚽️ GOAL"],
	[36, "🔁 Substitution"],
	[47, "⚽️ GOAL"],
	[61, "🔁 Substitution"],
	[64, "🔶 Yellow card"],
	[69, "🔴 Red card"],
	[70, "🔁 Substitution"],
	[72, "🔁 Substitution"],
	[76, "⚽️ GOAL"],
	[80, "⚽️ GOAL"],
	[92, "🔶 Yellow card"],
]);

//1. destructure the arrays of the players
//we destructure the arrays because we want them separate and they were in the same object property name
const [players1, players2] = game.players;
// console.log(players1, players2);

//2.Now we want to separate the gk from the field players so we destructure again
const [gk, ...fieldPlayers] = players1;
// console.log();

//3.all players in a singe array
const allPlayers = [...players1, ...players2];

//4. array players1 + 3 other players
const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];

//5. three var based on the odds properties (nested distructuring)
const {
	odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

//6.Printgoals functions should take an arbitrary amount of players
const printGoals = function (...players) {
	// console.log(`${players.length} goals was scored`);
};

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich"); // returns 4 goals
// printGoals("Davies", "Muller"); // returns 2 goals

// we have to return the amount of players that they are included in the game.scored
printGoals(...game.scored); // if we dont use the spread operator gonna return only one argument

//7. team wins based on the odds lower odd wins but without using if statement
// we use && because we want if the first is true to keep evaluating
team1 < team2 && console.log("team1 is more likely to win");
team1 > team2 && console.log("team 2 is more likely to win");

//8. score on the score array and print all players in the console

for (const [i, player] of game.scored.entries())
	console.log(`Goal ${i + 1}: ${player}`);

//9. calculate average odds

let average = 0;
const odds = Object.values(game.odds);
for (const odd of Object.values(odds)) {
	average += odd.length;
	average /= Object.values(odds);
}

//10. print the content of the object in the console
for (const [team, odd] of Object.entries(game.odds)) {
	// console.log(team, odd);
	const teamString = team === "x" ? "draw" : `'victory' ${game[team]}`;
	console.log(`Odd of ${teamString} ${odd}`);
}

//11.
// get map values
// const events = gameEvents.values();
// get the unique values we need to create a new SET -> object format
//turns this in to an array
const events = [...new Set(gameEvents.values())];

//12. delete event yellow card
gameEvents.delete(64);

//13.
// console.log(`An event happen d, on average every ${90 / gameEvents.size}`);
// after we get teh evalues of a set we need always turn it to array format instead ti be able to manipulate the data
// //const time = [...gameEvents.keys()];
//we want the last value of the array
const time = [...gameEvents.keys()].pop();
console.log(`An event happen d, on average every ${time / gameEvents.size}`);

// 14.
//loop through the MAP
for (const [min, event] of gameEvents) {
	const half = min <= 45 ? "First" : "Second";
	// we need to figure out if is the first half or the second half of the game
	console.log(`${half}[HALF] ${min} : ${event}`);
}
