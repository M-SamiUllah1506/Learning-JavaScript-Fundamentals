"use strict";

///Entries

const fruits=['apple','banana','water','soil'];


for(const [index ,fruit] of fruits.entries())
{
    console.log(`${index+1}`,fruit);
}


const person = {
    name: 'Ali',
    age:19,
};

for(const [name,value] of Object.entries(person))
{
    console.log(name,value);
}



const arrary=Object.entries(person);


///Maps

let map=new Map();
map.set('age',18);

console.log(map);


//alert(map.get('age'));

///Maps

const rest=new Map();

rest.set('name','sasmi');
rest.set('age',13);
rest.set('age',12)
rest.set(1,'italy');
console.log(rest.set('location',2));

rest.set(
    'infor',['name','sami','loction','lhr']
)
.set('open',11)
.set('close',23)

.set(true,'We are open :D')
.set(false,'We are closed :)')

console.log(rest.get(true))
const userRoles = new Map([
  ['Ali', 'Admin'],
  ['Sara', 'User'],
  ['John', 'Guest']
]);

console.log(userRoles.get('Sara')); // User


const arr=[2,3,4,5];
const myarr=arr.map(item=>
{
    return item*2;
}
)

console.log(myarr);

const question=new Map([
    [
        'question','what is the the best language'
    ],
    [1,'C'],
    [2,'Java'],
    [3,'Js'],
    ['correct',3],

    [true,'Correct'],
    [false,'try again']
])

console.log(question);


///possi ble on map on intertaion

console.log(question.get('question'))
for (const [key,value] of question)
{
    {
      if(typeof key === 'number') console.log( key ,value)
    }
}

//const answer=Number(prompt('The answer of the question is:'));
const answer=3;

console.log(question.get(question.get('correct')=== answer));


///convert map to array

/* 
Let's continue with our football betting app! This time, we have a map with a log of 
the events that happened during the game. The values are the events themselves, 
and the keys are the minutes in which each event happened 
(a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was 
unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 
9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether 
it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


gameEvents.delete(64);
console.log(`An event happend on average of 9 minutes ${90/gameEvents.size}` );
const uniqueArr=new Set(gameEvents.values());
console.log(gameEvents.values());


for(const [min,event] of gameEvents)
{
    const half= min<=45 ?'First':'Second';

    console.log(`${half} Half ${min} :  ${event}`);

}

const checkseat= function(seat)
{
  const s=seat.slice(-1);

  if(s==='B' || s=== "e")
    console.log('better luck next time');
else
console.log('You got lucky');
}

checkseat('11B');
checkseat('55C');
checkseat('99E');
///function

const Toupper=function(name)
{
    let Name=name.toLowerCase();
    let Another=Name[0].toUpperCase()+Name.slice(1);
    console.log(Another);
}


Toupper('saMi');



const message='howare udoing';

console.log(message.padStart( 14, '+'))


 // Coding Challenge #4


/*Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK */



document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

/*document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

*/
document.querySelector('button').addEventListener('click',function()
{
    const text=document.querySelector('textarea').value;
    const rows=text.split('\n');
    for(const [i,row] of rows.entries())
    {
        const [first,second]=row.toLowerCase().trim().split('_');
        const output=`${first}${second.replace(
            second[0],second[0].toUpperCase()
        )}`

        console.log(`${output.padEnd(20)}${':D)'.repeat(i+1)}`);
    }

})