const person ={
    firstname:"sami",
    lastname:"ullah",
    age:2003,
    desgination:"student",

    hasdriverlic:true,

    agecal:function()
    {
        return 2025-this.age;
    },
    getsummary: function()
    {
          return `${this.firstname} is a ${this.agecal()} years old ${this.desgination} and has a ${this.hasdriverlic ? "driver's license" : "no driver's license"}.`;

    }
};

let fname=person.firstname;

console.log(fname);


const intrest=prompt('what do you want to know about the person ? fname,lname,age,desginatin');

console.log(person[intrest]);


console.log(person.agecal());

console.log(person.getsummary());