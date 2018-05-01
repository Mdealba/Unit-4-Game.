// Generate a Randome Number between 9-120

// Generate a Randome number and assing them to the crystal between 1-12

// Keep track of the players Score

// check if the play won or lost

var taco = {
    asada: {
        name: "asada",
        value: 0,
    },
    alpastor: {
        name: "alpastor",
        value: 0,
    },
    carnitas: {
        name: "carnitas",
        value: 0,
    },
    chorizo: {
        name: "chorizo",
        value: 0,
    },
}
var targetScore = 0;
var playerScore = 0;
var wins = 0;
var loses = 0;


var randomNumber = function (min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min
}
var startGame = function () {
    playerScore = 0;
    targetScore = randomNumber(9, 120)
    taco.asada.value = randomNumber(1, 12)
    taco.alpastor.value = randomNumber(1, 12)
    taco.carnitas.value = randomNumber(1, 12)
    taco.chorizo.value = randomNumber(1, 12)

    $("#target-score").text(targetScore)
    $("#player-score").text(playerScore)
    console.log("targetScore", targetScore)
    console.log("asada", taco.asada.value)
    console.log("alpastor", taco.alpastor.value)
    console.log("carnitas", taco.carnitas.value)
    console.log("chorizo", taco.chorizo.value)
}
var checkWin = function () {
    targetScore === playerScore 
    if (targetScore === playerScore) {
        wins++
        $("#Wins").text(wins)
        startGame()
    }
    else if (targetScore < playerScore) {
        losses++
        $("#Losses").text(losses)
        startGame()
    }
}

var addValues = function(clickedTaco){
    playerScore += clickedTaco.value
    $("#player-score").text(playerScore)
    checkWin()
}

startGame()
$("#asada").click(function(){
    addValues(taco.asada)
})
$("#alpastor").click(function(){
    addValues(taco.alpastor)
})
$("#carnitas").click(function(){
    addValues(taco.carnitas)
})
$("#chorizo").click(function(){
    addValues(taco.chorizo)
})