
var randomNumber1=Math.floor(Math.random()*6)+1

var randomNumber2=Math.floor(Math.random()*6)+1

document.getElementById("player1").setAttribute("src","./images/dice"+randomNumber1+".png")
document.getElementById("player2").setAttribute("src","./images/dice"+randomNumber2+".png")
var text=document.querySelector("h1");
if(randomNumber1===randomNumber2)
{
    text.textContent="Draw!!";
}
else if(randomNumber1>randomNumber2)
{
    text.textContent="Player 1 Wins🚩";
}
else
{
      text.textContent="Player 2 Wins🚩";
}