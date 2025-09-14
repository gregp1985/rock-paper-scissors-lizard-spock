let btns = document.getElementsByTagName("button");
for (let btn of btns){
    btn.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "best-of-three") {
            window.location.href = "game-best-of-three.html";
        } else if (this.getAttribute("data-type") === "best-of-five") {
            window.location.href = "game-best-of-five.html";
        } else if (this.getAttribute("data-type") === "continuous") {
            window.location.href = "game-continuous.html";
        } else if (this.getAttribute("data-type") === "rules") {
            window.location.href = "rules.html";
        } else if (this.getAttribute("data-type") === "home") {
            window.location.href = "index.html";
        } 
    });
}
let choices = document.getElementsByClassName("control");
for (let choice of choices){
    choice.addEventListener("click", function() {
        let game = this.getAttribute("data-type");
        updatePlayerImage(game);
        setTimeout(runGame, 50, game);
    });
}
function runGame(game) {
    let compChoice = choices[Math.floor(Math.random() * 5)];
    let compPlayed = compChoice.getAttribute("data-type");
    let compImage = document.getElementById("computer-choice-img");
    
    if (game === "rock") {
        if (compPlayed === "rock") {
            compImage.src = "assets/photos/rock.png";
            compImage.alt = "Image of rock hand symbol";
            setTimeout(alertMsg, 100, "It's a Draw! Nobody Wins!");
        } else if (compPlayed === "scissors") {
            compImage.src = "assets/photos/scissors.png";
            compImage.alt = "Image of scissors hand symbol";
            setTimeout(alertMsg, 100, "You won! Rock crushes Scissors! as it always has..");
            playerWin();
        } else if (compPlayed === "lizard") {
            compImage.src = "assets/photos/lizard.png";
            compImage.alt = "Image of lizard hand symbol";
            setTimeout(alertMsg, 100, "You won! Rock crushes Lizard!");
            playerWin();
        } else if (compPlayed === "paper") {
            compImage.src = "assets/photos/paper.png";
            compImage.alt = "Image of paper hand symbol";
            setTimeout(alertMsg, 100, "You lost! Paper covers Rock!");
            compWin();
        } else if (compPlayed === "spock") {
            compImage.src = "assets/photos/spock.png";
            compImage.alt = "Image of spock hand symbol";
            setTimeout(alertMsg, 100, "You lost! Spock vapourizes Rock!");
            compWin();
        }
    }
    if (game === "scissors") {
        if (compPlayed === "scissors") {
            compImage.src = "assets/photos/scissors.png";
            compImage.alt = "Image of scissors hand symbol";
            setTimeout(alertMsg, 100, "It's a Draw! Nobody Wins!");
        } else if (compPlayed === "paper") {
            compImage.src = "assets/photos/paper.png";
            compImage.alt = "Image of paper hand symbol";
            setTimeout(alertMsg, 100, "You won! Scissors cut Paper!");
            playerWin();
        } else if (compPlayed === "lizard") {
            compImage.src = "assets/photos/lizard.png";
            compImage.alt = "Image of lizard hand symbol";
            setTimeout(alertMsg, 100, "You won! Scissors decapitate Lizard!");
            playerWin();
        }else if (compPlayed === "rock") {
            compImage.src = "assets/photos/rock.png";
            compImage.alt = "Image of rock hand symbol";
            setTimeout(alertMsg, 100, "You lost! Rock crushes Scissors!");
            compWin();
        }else if (compPlayed === "spock") {
            compImage.src = "assets/photos/spock.png";
            compImage.alt = "Image of spock hand symbol";
            setTimeout(alertMsg, 100, "You lost! Spock smashes Scissors!");
            compWin();
        }
    }
    if (game === "lizard") {
        if (compPlayed === "lizard") {
            compImage.src = "assets/photos/lizard.png";
            compImage.alt = "Image of lizard hand symbol";
            setTimeout(alertMsg, 100, "It's a Draw! Nobody Wins!");
        } else if (compPlayed === "paper") {
            compImage.src = "assets/photos/paper.png";
            compImage.alt = "Image of paper hand symbol";
            setTimeout(alertMsg, 100, "You won! Lizard eats Paper!");
            playerWin();
        } else if (compPlayed === "spock") {
            compImage.src = "assets/photos/spock.png";
            compImage.alt = "Image of spock hand symbol";
            setTimeout(alertMsg, 100, "You won! Lizard poisons Spock!");
            playerWin();
        }else if (compPlayed === "rock") {
            compImage.src = "assets/photos/rock.png";
            compImage.alt = "Image of rock hand symbol";
            setTimeout(alertMsg, 100, "You lost! Rock crushes Lizard!");
            compWin();
        }else if (compPlayed === "scissors") {
            compImage.src = "assets/photos/scissors.png";
            compImage.alt = "Image of scissors hand symbol";
            setTimeout(alertMsg, 100, "You lost! Scissors decapitate Lizard!");
            compWin();
        }
    }
    if (game === "paper") {
        if (compPlayed === "paper") {
            compImage.src = "assets/photos/paper.png";
            compImage.alt = "Image of paper hand symbol";
            setTimeout(alertMsg, 100, "It's a Draw! Nobody Wins!");
        } else if (compPlayed === "spock") {
            compImage.src = "assets/photos/spock.png";
            compImage.alt = "Image of spock hand symbol";
            setTimeout(alertMsg, 100, "You won! Paper disproves Spock!");
            playerWin();
        } else if (compPlayed === "rock") {
            compImage.src = "assets/photos/rock.png";
            compImage.alt = "Image of rock hand symbol";
            setTimeout(alertMsg, 100, "You won! Paper covers Rock!");
            playerWin();
        }else if (compPlayed === "scissors") {
            compImage.src = "assets/photos/scissors.png";
            compImage.alt = "Image of scissors hand symbol";
            setTimeout(alertMsg, 100, "You lost! Scissors cut Paper!");
            compWin();
        }else if (compPlayed === "lizard") {
            compImage.src = "assets/photos/lizard.png";
            compImage.alt = "Image of lizard hand symbol";
            setTimeout(alertMsg, 100, "You lost! Lizard eats Paper!");
            compWin();
        }
    }
    if (game === "spock") {
        if (compPlayed === "spock") {
            compImage.src = "assets/photos/spock.png";
            compImage.alt = "Image of spock hand symbol";
            setTimeout(alertMsg, 100, "It's a Draw! Nobody Wins!");
        } else if (compPlayed === "rock") {
            compImage.src = "assets/photos/rock.png";
            compImage.alt = "Image of rock hand symbol";
            setTimeout(alertMsg, 100, "You won! Spock vaporizes Rock!");
            playerWin();
        } else if (compPlayed === "scissors") {
            compImage.src = "assets/photos/scissors.png";
            compImage.alt = "Image of scissors hand symbol";
            setTimeout(alertMsg, 100, "You won! Spock smashes Scissors!");
            playerWin();
        }else if (compPlayed === "lizard") {
            compImage.src = "assets/photos/lizard.png";
            compImage.alt = "Image of lizard hand symbol";
            setTimeout(alertMsg, 100, "You lost! Lizard poisons Spock!");
            compWin();
        }else if (compPlayed === "paper") {
            compImage.src = "assets/photos/paper.png";
            compImage.alt = "Image of paper hand symbol";
            setTimeout(alertMsg, 100, "You lost! Paper disproves Spock!");
            compWin();
        }
    }
}
function updatePlayerImage(game) {
    let playerImage = document.getElementById("player-choice-img");
    playerImage.src = `assets/photos/${game}.png`;
    playerImage.alt = `Image of ${game} hand symbol`;
}
function alertMsg(resultMsg) {
    document.getElementById("result-message").innerText = resultMsg;
}
function playerWin() {
    let oldScore = parseInt(document.getElementById("wins").innerText);
    document.getElementById("wins").innerText = ++oldScore;
    let gameHeading = document.getElementById("game-heading").innerText;
    if (gameHeading === "Best of Three" && oldScore == "2") {
        setTimeout(playerWinBestOf, 200, "You Won Best of Three!");
    } else if (gameHeading === "Best of Five" && oldScore == "3") {
        setTimeout(playerWinBestOf, 200, "You Won Best of Five!");
    }
}
function compWin() {
    let oldScore = parseInt(document.getElementById("losses").innerText);
    document.getElementById("losses").innerText = ++oldScore;
    let gameHeading = document.getElementById("game-heading").innerText;
    if (gameHeading === "Best of Three" && oldScore == "2") {
        setTimeout(playerLoseBestOf, 200, "You Lost Best of Three!");
    } else if (gameHeading === "Best of Five" && oldScore == "3") {
        setTimeout(playerLoseBestOf, 200, "You Lost Best of Five!");
    }
}
function playerWinBestOf(winMsg) {
    alert(winMsg);
    location.reload();
}
function playerLoseBestOf(loseMsg) {
    alert(loseMsg);
    location.reload();
}