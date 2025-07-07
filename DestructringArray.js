"use strict"

/*const resturant={
name:'Walli Food',
location:'Model town Lahore,Pakistan',
food:['daal','Biryni','pizza'],
mianmenu:['rooti','daal','pizza','chicken'],

order:function(startindex,mainindex)
{
    return[this.food[startindex],this.mianmenu[mainindex]];
}
,
openinghour:{
    thu:{
        open:12,close:22,
    },
    fri:{
        open:9,close:11,
    },
    sat:{
        open:4,close:10,
    },
},
};


console.log("here is the operator preecdence"
);
resturant.name.indexOf('WaalivFood');



const{name,food,openinghour}=resturant;

console.log(name,food,openinghour);
const index =resturant.mianmenu.indexOf('daal');

if(index!==-1)
{

    resturant.mianmenu[index]='tikkabotti';
}
console.log(resturant);

let[mian, second ]=resturant.mianmenu;

console.log(mian,second);


[mian,second]=[second,mian];
console.log(mian,second);

const [starter,ender]=resturant.order(2,0);
console.log(starter,ender);

const nested=[1,2,[3,4]];

const[fir, ,[sec,thir]]=nested;
console.log(fir,sec,thir);

const [p=1,q=8,r=0]=[1,2];
console.log(p,q,r);

///..spread opeators

function myfunc(x,y,z)
{
 return x+y+z;
}

const args=[1,2,4];

myfunc(...args);

console.log(myfunc(...args));

const datefields=[1970,9,0];

const d=new Date(...datefields);
console.log(d);

const parts=['shoulders','knees'];
const lyrics=['head',...parts, 'and' ,'toes'];

console.log(lyrics);

const newmenuu=[...resturant.food,'1/2 liter bottle'];

console.log(newmenuu);


//shallow copy

const mainmenuCopy=[...resturant.food];

//merge array

//Array
console.log("here is the operator preecdence"
);
resturant.mianmenu.indexOf('daal');

const menuu=[mainmenuCopy,...resturant.food];
console.log(menuu);
 
*/

///Rest Operators As opposite to the spread opreators
/*const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};



const [pizza, , risotto,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu];


console.log(pizza,risotto,otherFood);


   

const add=function(...numbers)
{ var sum=0;

    for(let i=0;i<numbers.length;i++)
    {
        sum =sum+numbers[i];

    }

    console.log(sum);
}
*/

 
//Nullsih operators
/*const guest=restaurant.numGuests?restaurant.numGuests:10;
console.log(guest);

let numguest=5;

const guestlist=' '?? 10000;
console.log(guestlist);


const expression1=0;
const expression2=0;
const expression3=undefined;

const list=(expression1??expression2)||(expression3??numguest);
console.log(list);


const rest1={
    name:'capri',
    numguestdd:0,
};
const rest2={
    name:'laparxi',
    owner:'sami'
};

rest1.numguestdd=rest1.numguestdd??10;
console.log(rest1);
rest2.numguestdd=rest2.numguestdd||90;
console.log(rest2);

///Coding Challange

/*const goalkeeper=['sami'];
const otherplayer=[2,3,4,5,6,7,8,9,10,11]
let player1=[goalkeeper,...otherplayer];
const goalkeeper2=['Sam'];
const otherplayer2=[2,3,4,5,6,7,8,9,10,11]
let player2=[goalkeeper2,...otherplayer2];

let playerfinal=['tingo','rio','profess',...player1];
let allPlayerss=[player1,player2];
console.log(allPlayerss);

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
  scored: ['sami','ullah','ahmad','ali'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1,players2]=game.players;

const [gk,...fieldPlayers]=players1;
console.log(gk);

const allPlayers=[...players1,players2];
const players1Final=['Thiago', 'Coutinho','Perisic',...players1];

console.log(players1Final);
 
const {odds:{team1,x:draw,team2}}=game;
console.log(team1,draw,team2);


const printGoals=function(...players)
{
    console.log(`${players.length} goals are scored`);
}

printGoals('sami','ullah','ahmad','ali');
printGoals(...game.scored);

 team1<team2 &&console.log(` Team1  has more chances to win`);
 team1>team2 &&console.log(` Team2  has more chances to win`);

/*We're building, a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. F
or Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array 
('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
 and prints each of them to the console, along with the number of goals that were scored in total 
 (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely 
to win, WITHOUT using an if/else statement or the ternary operator.
*/



/*const iterable="sami"

for(const item of iterable)
{
  console.log(item);
}

const weekdayss = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHourss= {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[2]]: {
    open: 11,
    close: 23,
  },
  [`today is the ${0+1}th day of the week`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}; 
*/
///challange # 02


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


for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}



const orderset=new Set(['p','r','p','s']);

console.log(orderset);
orderset.add('ppp');
console.log(orderset);



// Create a Set
const letters = new Set(
  ["apples",500],
  ["bananas", 300],
  ["oranges", 200]


);



// Does the Set contain "d"?
const answer = letters.has("apples");
console.log(answer);



