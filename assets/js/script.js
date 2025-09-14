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
        let game = choice.getAttribute("data-type")
        runGame(game)
    })
}
function runGame(game) {
    
}
