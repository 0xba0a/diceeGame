//Dice Game Challenge script

// var list, index, randomNumber = Math.floor(Math.random()*6 + 1);
// console.log(randomNumber);
// list = document.getElementsByClassName("img1");
// for (index = 0; index < list.length; ++index) {
//     var randomNumberImage = "images/dice" + randomNumber + ".png";
//     console.log(randomNumberImage);
//     list[index].setAttribute("src", "images/'dice' + randomNumber + '.png'");
// }

var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = ("Draw!");
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = ("🚩 Player 1 Wins!");
}
else {
  document.querySelector("h1").innerHTML = ("Player 2 Wins! 🚩")
}
