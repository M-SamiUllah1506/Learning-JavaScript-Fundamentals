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
person1.claBMI();
person2.claBMI();
if (person1.bmi > person2.bmi) {
  console.log(`${person1.fullname} has a higher BMI of ${person1.bmi}`);
} else if (person2.bmi > person1.bmi) {
  console.log(`${person2.fullname} has a higher BMI of ${person2.bmi}`);
} 

