'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



/////////////////////////////////////////////////



const arr=['a','b','c','d','e'];

console.log(arr.slice(1,4));

console.log(arr.slice());
console.log(arr);

///splice



///console.log(arr.splice(1,3));
console.log(arr); 


console.log(arr.splice(0,7));
console.log(arr);

const arr2=[5,4,3,2,1];

console.log(arr2.reverse())

console.log(arr2);

console.log(arr2.splice(1,2).join('k'))

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


for(const [value,movement] of movements.entries())
{
    if(movement>0)
    {
        console.log(`Movememnt ${value+1} : You depsoited ${movement}`)
    } else 
    {
        console.log(`Moevement ${value+1} : You withdraw ${Math.abs(movement)}`)
    }
}

 //For Eeah Method

 const  arr1=['a','b','c'];

 arr1.forEach((Elements)=>console.log(Elements));

 let map = new Map();

// inserting elements
map.set('name', 'Jack');
map.set('age', '27');

map.forEach(myfunction);

function myfunction(value,key)
{
   console.log(key,' - ' ,value)
}



    //// new map

    const curre=new Map([

        ['USD',' United State Dollar'],
        ['EUR','EURO'],
        ['GBP','Pound'],

    ]);
