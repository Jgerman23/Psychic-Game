var playGame = confirm("Do you want to play a game?");

if (playGame) {
    alert("Great!");
}

else {
    alert("Too Bad!");
}



var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 10;

document.onkeyup = function(event) {

    var userGuess = event.key;
    
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    if (userGuess === computerGuess){
        wins++;
        guesses = 10;
    }else {
        guesses--;
    }

    if (guesses === 0){
        losses++;
        guesses = 10;
    }



    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
}


