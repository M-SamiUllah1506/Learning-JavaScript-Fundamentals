"use strict";

let birthdate=Number(prompt("Enter your age"));
let retire,currntage;
const retirment=birthdate=>{
     currntage=2025-birthdate;

     retire=65-currntage;

    return retire;
}

console.log("Years left until retirement:", retirment(birthdate));
