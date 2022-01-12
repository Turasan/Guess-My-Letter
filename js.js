"use strict";

var letter =  ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'j','k','l', 'm', 'n','o','p','q', 'r', 's', 't','v', 'w', 'x', 'y','z','u','i'];
var score = 9;
var userGuess;
var highscore =0;
var randomLetter = letter[Math.floor(Math.random()*26)];
console.log(randomLetter);
window.onkeyup = function(e){
    

    const displayMessage = function (message) {
        document.querySelector('.guess').textContent = message;
        return;
      };
      const backGColor = function (color) {
        document.querySelector('body').style.backgroundColor = color;
        return;
      };

      
    if(letter.indexOf(e.key) === -1){
        displayMessage('⛔️ No letter!');
        backGColor("#000");
        return;
    }


userGuess = e.key;

document.querySelector('.letter').textContent = userGuess.toUpperCase() ;
if (randomLetter==userGuess && score>0){
    displayMessage('🎉 Correct Number!');
    document.querySelector('.compLetter').textContent = userGuess.toUpperCase() ;
    backGColor("#60b347");
    if(score>highscore){
    highscore = score;
    }
    document.querySelector('.highscore').textContent =highscore;
    
}
else if(randomLetter!=userGuess && score>0){
    score--; 
    document.querySelector('.score').textContent = score;
    if(highscore ==0 && score==0){
        displayMessage('💥 You lost the game!');
        backGColor("red");

        
}

}
document.querySelector('.again').addEventListener('click', displayAgain );
function displayAgain() {
    randomLetter = letter[Math.floor(Math.random()*26)];
    document.querySelector('.letter').textContent = "A"
    document.querySelector('.guess').textContent ="Start guessing...";
    document.querySelector('.compLetter').textContent = "?" ;
    backGColor("#000");
    score = 9;
    document.querySelector('.score').textContent = score;
    randomLetter = letter[Math.floor(Math.random()*26)];
    console.log(randomLetter);
}
}



