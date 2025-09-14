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
    let playerImage = getElementById("player-choice-img");
    let compImage = getElementById("computer-choice-img");
    if (game === "rock") {
        playerImage.innerHTML.src = "assets/photos/rock.png";
        playerImage.innerHTML.alt="Image of rock hand symbol";
        if (compPlayed === "rock") {
            compImage.innerHTML.src = "assets/photos/rock.png";
            compImage.innerHTML.alt = "Image of rock hand symbol";
            alert("It's a Draw! Nobody Wins!");
        } else if (compPlayed === "scissors") {
            compImage.innerHTML.src = "assets/photos/scissors.png";
            compImage.innerHTML.alt="Image of scissors hand symbol";
            alert("You won! Rock crushes Scissors! as it always has..");
            playerWin();
        } else if (compPlayed === "lizard") {
            compImage.innerHTML.src = "assets/photos/lizard.png";
            compImage.innerHTML.alt="Image of lizard hand symbol";
            alert("You won! Rock crushes Lizard!");
            playerWin();
        } else if (compPlayed === "paper") {
            compImage.innerHTML.src = "assets/photos/paper.png";
            compImage.innerHTML.alt="Image of paper hand symbol";
            alert("You lost! Paper covers Rock!");
            compWin();
        } else if (compPlayed === "spock") {
            compImage.innerHTML.src = "assets/photos/spock.png";
            compImage.innerHTML.alt="Image of spock hand symbol";
            alert("You lost! Spock vapourizes Rock!");
            compWin();
        }
    }
    if (game === "scissors") {
        playerImage.innerHTML.src = "assets/photos/scissors.png";
        playerImage.innerHTML.alt="Image of scissors hand symbol";
        if (compPlayed === "scissors") {
            compImage.innerHTML.src = "assets/photos/scissors.png";
            compImage.innerHTML.alt="Image of scissors hand symbol";
            alert("It's a Draw! Nobody Wins!");
        } else if (compPlayed === "paper") {
            compImage.innerHTML.src = "assets/photos/paper.png";
            compImage.innerHTML.alt="Image of paper hand symbol";
            alert("You won! Scissors cut Paper!");
            playerWin();
        } else if (compPlayed === "lizard") {
            compImage.innerHTML.src = "assets/photos/lizard.png";
            compImage.innerHTML.alt="Image of lizard hand symbol";
            alert("You won! Scissors decapitate Lizard!");
            playerWin();
        }else if (compPlayed === "rock") {
            compImage.innerHTML.src = "assets/photos/rock.png";
            compImage.innerHTML.alt = "Image of rock hand symbol";
            alert("You lost! Rock crushes Scissors!");
            compWin();
        }else if (compPlayed === "spock") {
            compImage.innerHTML.src = "assets/photos/spock.png";
            compImage.innerHTML.alt="Image of spock hand symbol";
            alert("You lost! Spock smashes Scissors!");
            compWin();
        }
    }
    if (game === "lizard") {
        playerImage.innerHTML.src = "assets/photos/lizard.png";
        playerImage.innerHTML.alt="Image of lizard hand symbol";
        if (compPlayed === "lizard") {
            compImage.innerHTML.src = "assets/photos/lizard.png";
            compImage.innerHTML.alt="Image of lizard hand symbol";
            alert("It's a Draw! Nobody Wins!");
        } else if (compPlayed === "paper") {
            compImage.innerHTML.src = "assets/photos/paper.png";
            compImage.innerHTML.alt="Image of paper hand symbol";
            alert("You won! Lizard eats Paper!");
            playerWin();
        } else if (compPlayed === "spock") {
            compImage.innerHTML.src = "assets/photos/spock.png";
            compImage.innerHTML.alt="Image of spock hand symbol";
            alert("You won! Lizard poisons Spock!");
            playerWin();
        }else if (compPlayed === "rock") {
            compImage.innerHTML.src = "assets/photos/rock.png";
            compImage.innerHTML.alt = "Image of rock hand symbol";
            alert("You lost! Rock crushes Lizard!");
            compWin();
        }else if (compPlayed === "scissors") {
            compImage.innerHTML.src = "assets/photos/scissors.png";
            compImage.innerHTML.alt="Image of scissors hand symbol";
            alert("You lost! Scissors decapitate Lizard!");
            compWin();
        }
    }
    if (game === "paper") {
        playerImage.innerHTML.src = "assets/photos/paper.png";
        playerImage.innerHTML.alt="Image of paper hand symbol";
        if (compPlayed === "paper") {
            compImage.innerHTML.src = "assets/photos/paper.png";
            compImage.innerHTML.alt="Image of paper hand symbol";
            alert("It's a Draw! Nobody Wins!");
        } else if (compPlayed === "spock") {
            compImage.innerHTML.src = "assets/photos/spock.png";
            compImage.innerHTML.alt="Image of spock hand symbol";
            alert("You won! Paper disproves Spock!");
            playerWin();
        } else if (compPlayed === "rock") {
            compImage.innerHTML.src = "assets/photos/rock.png";
            compImage.innerHTML.alt = "Image of rock hand symbol";
            alert("You won! Paper covers Rock!");
            playerWin();
        }else if (compPlayed === "scissors") {
            compImage.innerHTML.src = "assets/photos/scissors.png";
            compImage.innerHTML.alt="Image of scissors hand symbol";
            alert("You lost! Scissors cut Paper!");
            compWin();
        }else if (compPlayed === "lizard") {
            compImage.innerHTML.src = "assets/photos/lizard.png";
            compImage.innerHTML.alt="Image of lizard hand symbol";
            alert("You lost! Lizard eats Paper!");
            compWin();
        }
    }
    if (game === "spock") {
        playerImage.innerHTML.src = "assets/photos/spock.png";
        playerImage.innerHTML.alt="Image of spock hand symbol";
        if (compPlayed === "spock") {
            compImage.innerHTML.src = "assets/photos/spock.png";
            compImage.innerHTML.alt="Image of spock hand symbol";
            alert("It's a Draw! Nobody Wins!");
        } else if (compPlayed === "rock") {
            compImage.innerHTML.src = "assets/photos/rock.png";
            compImage.innerHTML.alt = "Image of rock hand symbol";
            alert("You won! Spock vaporizes Rock!");
            playerWin();
        } else if (compPlayed === "scissors") {
            compImage.innerHTML.src = "assets/photos/scissors.png";
            compImage.innerHTML.alt="Image of scissors hand symbol";
            alert("You won! Spock smashes Scissors!");
            playerWin();
        }else if (compPlayed === "lizard") {
            compImage.innerHTML.src = "assets/photos/lizard.png";
            compImage.innerHTML.alt="Image of lizard hand symbol";
            alert("You lost! Lizard poisons Spock!");
            compWin();
        }else if (compPlayed === "paper") {
            compImage.innerHTML.src = "assets/photos/paper.png";
            compImage.innerHTML.alt="Image of paper hand symbol";
            alert("You lost! Paper disproves Spock!");
            compWin();
        }
    }
}
function playerWin() {

}
function compWin() {

}