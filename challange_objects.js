"use strict";
const person1={
    fullname:'Ahmad',
    mass:57,
    height:1.57
,
    claBMI:function()
    {
     this.bmi=this.mass/this.height**2;
     return this.bmi;
    }
};
const person2={
    fullname:'ALi',
    mass:55,
    height:1.47
    ,
    claBMI:function()
    {
     this.bmi=this.mass/this.height**2;
     return this.bmi;
    }
};

console.log("Max Number: " + max);
person1.claBMI();
person2.claBMI();
if (person1.bmi > person2.bmi) {
  console.log(`${person1.fullname} has a higher BMI of ${person1.bmi}`);
} else if (person2.bmi > person1.bmi) {
  console.log(`${person2.fullname} has a higher BMI of ${person2.bmi}`);
} 
let arr2 = [];
let size2 = parseInt(prompt("Enter the size of the array"));

console.log("Enter the numbers of the array");
for (let i = 0; i < size2; i++) {
    arr2[i] = parseInt(prompt("Enter number " + (i + 1)));
}

console.log("The numbers of the array");
for (let i = 0; i < size2; i++) {
    console.log(arr2[i] + ",");
}

for (let i = 0; i < size2; i++) {
    if (arr2[i] % 2 === 0) {
        console.log("Even number: " + arr2[i]);
    } else {
        console.log("odd num: " + arr2[i]);
    }
}


