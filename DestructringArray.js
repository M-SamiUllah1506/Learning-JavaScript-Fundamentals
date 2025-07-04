"use strict"

const resturant={
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

const menuu=[mainmenuCopy,...resturant.food];
console.log(menuu);

 




