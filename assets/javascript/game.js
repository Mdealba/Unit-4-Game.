// create a hash that stores all the global variables
var data = {
    wins:0,
    losses:0,
    target: numberGenerator(19, 120),
    total:0,
    tacos: []
}

// create a function that generates a random number between x-y
function numberGenerator(min, max){
    return Math.floor(Math.random()*(max-min+1)+1);
}

// assign 4 values to an array
function assignGemValues(){
    while (data.tacos.length < 5) {
        var num = numberGenerator(1, 12);
        if(!data.tacos.includes(num)){
            data.tacos.push(num);
        }
    }
}
// initaial value
assignGemValues();


function displayHTML(){
    $("#wins").text(data.wins);
    $("#losses").text(data.losses);
    $("#target").text(data.target);
    $("#total").text(data.total);
}
// display initaial value
displayHTML();

// create a click event for btns
$(".button").on("click", function(){
    console.log("clicked");
    $("#message").text("");
    var selectedID =$(this).attr("id");
    // add valut to total
    // check total
    switch(selectedID){
        case "btn1":
            data.total = data.total + data.tacos[0];
            $("#total").text(data.total);
            if(data.total> data.target){
                handleLosses();
            }else if(data.total === data.target){
                handleWins();
            }
        break;
        case "btn2":
        data.total = data.total + data.tacos[1];
        $("#total").text(data.total);
        if(data.total> data.target){
            handleLosses();
        }else if(data.total === data.target){
            handleWins();
        }
    break;
    case "btn3":
    data.total = data.total + data.tacos[2];
    $("#total").text(data.total);
    if(data.total> data.target){
        handleLosses();
    }else if(data.total === data.target){
        handleWins();
    }
break;
case "btn4":
data.total = data.total + data.tacos[3];
$("#total").text(data.total);
if(data.total> data.target){
    handleLosses();
}else if(data.total === data.target){
    handleWins();
}
break;

    }
});

function handleLosses(){
    data.losses++;
    $("#message").text("you lose!");
    resetGame();
}
function handleWins(){
    data.wins++;
    $("#message").text("you win!");
    resetGame();
}
function resetGame(){
    data.target =  numberGenerator(19, 120);
    data.total = 0;
    data.tacos= [];
    assignGemValues();
    displayHTML();
}

// handles wins and losses

// function that handles wins

// function that handles losses