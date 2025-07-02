"use strict";
let final_amount;
function caltip(billvalue)
{
  if(billvalue>=50&&billvalue<=300)
  {
    final_amount=billvalue*0.15;
  }
  else{
    final_amount=billvalue*0.20;
  }

  return final_amount;

}
console.log(`the tip amount is`,caltip(400));


let bills=[125,555,44];
let tip1=[caltip(bills[0]),caltip(bills[1]),caltip(bills[2])];


console.log("Bills" ,bills,'tips' ,tip1);

let total =[bills[0]+tip1[0],bills[1]+tip1[1],bills[2]+tip1[2],];

console.log("Total",total)