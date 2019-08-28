var options = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;


//This is a function so the block of code runs everytime a key is typed
document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userGuess);

    var computerGuess = options[Math.floor(Math.random() * options.length)];

    console.log(computerGuess);

    if (userGuess === "r" || userGuess === "p" || userGuess === "s") {
        if (userGuess === "r" && computerGuess === "s") {
            wins++;
            addWins();
        }
        if (userGuess === "p" && computerGuess === "r") {
            wins++;
            addWins();
        }
        if (userGuess === "s" && computerGuess === "p") {
            wins++;
            addWins();
        }
        if (userGuess === "r" && computerGuess === "p") {
            losses++;
            addLosses();
        }
        if (userGuess === "p" && computerGuess === "s") {
            losses++;
            addLosses();
        }
        if (userGuess === "s" && computerGuess === "r") {
            losses++;
            addLosses();
        }
        if (userGuess === computerGuess) {
            ties++;
            addTies();
        }
    } else {
        alert("Please choose again");
    }

    // Records wins, ties and losses to the UI

    function addWins() {
        document.getElementById("wins").textContent = wins;
    }

    function addLosses() {
        document.getElementById("losses").textContent = losses;
    }

    function addTies() {
        document.getElementById("ties").textContent = ties;
    }
}

