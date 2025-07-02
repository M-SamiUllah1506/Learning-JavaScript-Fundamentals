"use strict";

function getAverage(score1, score2, score3) 
{
  return (score1 + score2 + score3) / 3;
}

let averageA = getAverage(80, 70, 40);
let averageB = getAverage(30, 40, 45);

console.log("team A average:", averageA);

console.log("team B average:", averageB);

if (averageA > averageB)
    
    {
  console.log(" Team A wins");
}

 else if (averageB > averageA) 
    {
  console.log(" Team B wins");
}
 else 
 
 {
  console.log(" Draw");
}
