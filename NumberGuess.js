"use Strict"
let number=Math.trunc(Math.random()*20)+1;
let score=10;
let highscore=0;
document.querySelector('.again').addEventListener
('click',function()
{
score=10;
guess=Math.trunc(Math.random()*20)+1
document.querySelector('.message').textContent='Start guessing...'
document.querySelector('.score').textContent=score;

document.querySelector('.number').textContent='?';
document.querySelector('guess').value=" ";

})

document.querySelector('.check').addEventListener

('click',function(){
const guess=Number(document.querySelector('.guess').value);

if(!guess)
{
    document.querySelector('.message').textContent="No Number";
}

else  if(guess===number)
{
     score=score+1;

  document.querySelector('.message').textContent="YOU WIN";
  document.querySelector('.score').textContent = score

  document.querySelector('.number').style.width='30rem';
  number = Math.trunc(Math.random() * 20) + 1;
   document.querySelector('body').style.backgroundColor='#60b347';

   if(score>highscore)
   {
    highscore=score;
    document.querySelector('.highscore').textContent=highscore;
   }

}

else if (guess>number)

    {
    if(score>1)
    {

      document.querySelector('.message').textContent="Please try Less Num";
        score=score-1;
        document.querySelector('body').style.backgroundColor='#60b';
         document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('body').style.backgroundColor='#670b';
        document.querySelector('.message').textContent="You lost";
    }

} 
else if (guess<number)
{
    if(score>1)
    {
        document.querySelector('body').style.backgroundColor='#60b';
      document.querySelector('.message').textContent="Please try Large Num";
        score=score-1;
         document.querySelector('.score').textContent=score;

    }

else
{        document.querySelector('body').style.backgroundColor='#670b';

        document.querySelector('.message').textContent="You lost";
    }


}

})



