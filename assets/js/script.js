let gameHeading = document.getElementById("game-heading");
let games = document.getElementsByClassName("game-btn");
for (let game of games) {
    game.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "best-of-three") {
            gameHeading.innerText = "Best Of Three";
        } else if (this.getAttribute("data-type") === "best-of-five") {
            gameHeading.innerText = "Best Of Five";
        } else if (this.getAttribute("data-type") === "continuous") {
            gameHeading.innerText = "Continuous Play";
        }
    }
    )
  
} 
  console.log(gameHeading.innerText)

let choices = getElementsByClassName("control");
for (let choice of choices){
    choice.addEventListener("click", function() {
        let game = choice.getAttribute("data-type");
        runGame(game);
    })
}
function runGame(game) {
    let compChoice = choices[Math.floor(Math.random() * 5)];
    let compPlayed = compChoice.getAttribute("data-type");
    if (game === "rock") {
        if (compPlayed === "rock") {
            
            alert("It's a Draw! Nobody Wins!");
        } else if (compPlayed === "scissors") {
            alert("You won! Rock crushes Scissors! as it always has..");
            playerWin();
        } else if (compPlayed === "lizard") {
            alert("You won! Rock crushes Lizard!");
            playerWin();
        } else if (compPlayed === "paper") {
            alert("You lost! Paper covers Rock!");
            compWin();
        } else if (compPlayed === "spock") {
            alert("You lost! Spock vapourizes Rock!");
            compWin();
        }
    }
    if (game === "scissors") {
        if (compPlayed === "scissors") {
            alert("It's a Draw! Nobody Wins!");
        } else if (compPlayed === "paper") {
            alert("You won! Scissors cut Paper!");
            playerWin();
        } else if (compPlayed === "lizard") {
            alert("You won! Scissors decapitate Lizard!");
            playerWin();
        }else if (compPlayed === "rock") {
            alert("You lost! Rock crushes Scissors!");
            compWin();
        }else if (compPlayed === "spock") {
            alert("You lost! Spock smashes Scissors!");
            compWin();
        }
    }
    if (game === "lizard") {
        if (compPlayed === "lizard") {
            alert("It's a Draw! Nobody Wins!");
        } else if (compPlayed === "paper") {
            alert("You won! Lizard eats Paper!");
            playerWin();
        } else if (compPlayed === "spock") {
            alert("You won! Lizard poisons Spock!");
            playerWin();
        }else if (compPlayed === "rock") {
            alert("You lost! Rock crushes Lizard!");
            compWin();
        }else if (compPlayed === "scissors") {
            alert("You lost! Scissors decapitate Lizard!");
            compWin();
        }
    }
    if (game === "paper") {
        if (compPlayed === "paper") {
            alert("It's a Draw! Nobody Wins!");
        } else if (compPlayed === "spock") {
            alert("You won! Paper disproves Spock!");
            playerWin();
        } else if (compPlayed === "rock") {
            alert("You won! Paper covers Rock!");
            playerWin();
        }else if (compPlayed === "scissors") {
            alert("You lost! Scissors cut Paper!");
            compWin();
        }else if (compPlayed === "lizard") {
            alert("You lost! Lizard eats Paper!");
            compWin();
        }
    }
    if (game === "spock") {
        if (compPlayed === "spock") {
            alert("It's a Draw! Nobody Wins!");
        } else if (compPlayed === "rock") {
            alert("You won! Spock vaporizes Rock!");
            playerWin();
        } else if (compPlayed === "scissors") {
            alert("You won! Spock smashes Scissors!");
            playerWin();
        }else if (compPlayed === "lizard") {
            alert("You lost! Lizard poisons Spock!");
            compWin();
        }else if (compPlayed === "paper") {
            alert("You lost! Paper disproves Spock!");
            compWin();
        }
    }
}
function playerWin() {

}
function compWin() {

}