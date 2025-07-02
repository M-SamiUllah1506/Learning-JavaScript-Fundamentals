"use strict";

function fruit(apple,orange)
{

    let juice=`jucie with ${apple} apples and ${orange} oranges.`;
    return juice;
}

let process=fruit(3,3);

console.log(fruit(3,9));
let birth=prompt("Enter your bith year");
let current=prompt("Enter the current year");
let final;

if(birth > 0 && current > 0 && current > birth)
{
   final=current-birth;
 console.log("Your age is: " + final);
}
else
{
    console.log("please enter valid");

}


