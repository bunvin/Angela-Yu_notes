var randomNumber1 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png")

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png")


var titleText = "Refresh Me"
// used emoji instead
// var flagImg = document.createElement('img');
// flagImg.src = "";

if (randomNumber1 > randomNumber2){
    titleText = "🚩Player 1 wins!";}
else if (randomNumber1 < randomNumber2){
    titleText = "Player 2 wins!🚩";}
else {
    titleText = "Draw!";}

document.querySelector("h1").textContent = titleText


