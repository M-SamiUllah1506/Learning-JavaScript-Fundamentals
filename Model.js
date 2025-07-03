"use strict"

const model=document.querySelector('.modal');
const over=document.querySelector('.overlay');

const btnClose=document.querySelector('.close-modal');

const btnOpen=document.querySelectorAll('.show-modal');

console.log(btnOpen);
const btnmodalopen=function ()
{
    model.classList.remove('hidden');
    over.classList.remove('hidden');
}
for(let i=0;i<btnOpen.length;i++)

  btnOpen[i].addEventListener('click',btnmodalopen);
  const btnmodelclose=function()
   {
    model.classList.add('hidden');
    over.classList.add('hidden');

   }

btnClose.addEventListener('click',btnmodelclose);
over.addEventListener('click',btnmodelclose);

document.addEventListener('keydown',function(e){
    console.log(e.key);
    if(e.key==='Escape')
    {
        if(!model.classList.contains('hidden'))
        {
            btnmodelclose();
        }
    }
})