"use strict";

const score1=document.querySelector('#score--0');
const score2=document.querySelector('#score--1');

const dicehide=document.querySelector('#hide');

const rolldicebtn=document.querySelector('.btn--roll');
const newgamebtn=document.querySelector('.btn--new');
const holdbtn=document.querySelector('.btn--hold');

score1.textContent=0;
score2.textContent=0;
let currentscore=0;
dicehide.classList.add('hidden');
let curplayer1=document.querySelector('.player--0');
let curplayer2=document.querySelector('.player--1');
let curscore1=document.getElementById('current--0');
let curscore2=document.getElementById('current--1');
let number,playing=true;
let scorearr=[0,0];
let activeplayer=0;
let count
const init=function()
{
    scorearr=[0,0]
    currentscore=0;
    activeplayer=0;
    playing=true;
    score1.textContent=0;
    score2.textContent=0;
    curscore1.textContent=0;
    curscore2.textContent=0;
    dicehide.classList.add('hidden');  
    curplayer1.classList.remove('player--winner');
    curplayer2.classList.remove('player--winner');
    curplayer1.classList.add('player--active');

    curplayer2.classList.remove('player--active');

  winplayer.classList.add('hidden');
}
const switchplayer=function()
{
document.getElementById(`current--${activeplayer}`).textContent=0;
    activeplayer=activeplayer===0?1:0;
    currentscore=0;
    curplayer1.classList.toggle('player--active');
    curplayer2.classL 

rolldicebtn.addEventListener('click',function()
{
  if(playing){
   number=Math.trunc(Math.random()*6)+1;


    dicehide.classList.remove('hidden');
    dicehide.src=`dice-${number}.png`

    console.log(number);
   //document.querySelector('#hide',number);
   if(number!==1)
   {
      currentscore=currentscore+number;
      document.getElementById(`current--${activeplayer}`).textContent=currentscore;
   } 
   
   else  {
    switchplayer();
   }
}

})


 const winplayer=document.querySelector('#win');

 winplayer.classList.add('hidden');

 holdbtn.addEventListener('click',function()
{
    if(playing)
    {
    scorearr[activeplayer]+=currentscore;

    document.getElementById(`score--${activeplayer}`).textContent=scorearr[activeplayer];
// ifscores >=100
    }
  if(scorearr[activeplayer]>=30)
  {
    
    playing=false;
    document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
      winplayer.textContent = `🎉 Player ${activeplayer + 1} Wins!`;
       winplayer.classList.remove('hidden');


}
  else{

    //switchplayer
    switchplayer();
  }
})


newgamebtn.addEventListener('click',init)





