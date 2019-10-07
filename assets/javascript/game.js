// generate random number to be guessed by user
let targetNumber;

//initial call for number
newTarget();

//random number generated from 1-120
function newTarget(){
    targetNumber = Math.floor(Math.random() * 120 + 1);

// if statement so number regenerates if under 19
    if (targetNumber > 120 || targetNumber < 19){
    newTarget();
    }
}   

$("#target-number").text(targetNumber);

// users accumulative score variable
let userScore = 0;
let wins = 0;
let losses = 0;

// make four crystals with a value between 1-12
let crystalOptions1 = Math.floor(Math.random() * 12 + 1);

let crystalOptions2 = Math.floor(Math.random() * 12 + 1);

let crystalOptions3 = Math.floor(Math.random() * 12 + 1);

let crystalOptions4 = Math.floor(Math.random() * 12 + 1);

// ****************************crystal 1**************************
let crystal1 = $("<img>");

crystal1.addClass("crystal-image");

crystal1.attr("src", "assets/images/greenRupee.png");

crystal1.attr("data-crystalvalue", crystalOptions1);

$("#crystals").append(crystal1);


// ****************************crystal 2**************************

let crystal2 = $("<img>");

crystal2.addClass("crystal-image");

crystal2.attr("src", "assets/images/blueRupee.png");

crystal2.attr("data-crystalvalue", crystalOptions2);

$("#crystals").append(crystal2);


// ****************************crystal 3**************************

let crystal3 = $("<img>");

crystal3.addClass("crystal-image");

crystal3.attr("src", "assets/images/silverRupee.png");

crystal3.attr("data-crystalvalue", crystalOptions3);

$("#crystals").append(crystal3);

// ****************************crystal 4**************************


let crystal4 = $("<img>");

crystal4.addClass("crystal-image");

crystal4.attr("src", "assets/images/goldRupee.png");

crystal4.attr("data-crystalvalue", crystalOptions4);

$("#crystals").append(crystal4);

// make on click event to add a value to each crystal
$(".crystal-image").on("click", function() {

    let crystalValue = ($(this).attr("data-crystalvalue"));

    crystalValue = parseInt(crystalValue);

// hide values until user clicks
// update users score counter with clicked crystals value
    userScore += crystalValue;

    $("#userScore").text("Your current score is: " + userScore);
// user wins if score = randomly generated number
    if (userScore === targetNumber){
        wins++;
        $("#stats").text("Wins: " + wins);
        restart();
        
        // user loses if score > randomly generated number
    } else if (userScore > targetNumber){
        losses++;
        $("#stats").text("Losses: " + losses);
        restart();
        
    }
});

// game restarts when player wins/loses
function restart(){
    newTarget();
    $("#target-number").text(targetNumber);
    $("#userScore").text("Your current score is: " + userScore);
    userScore = 0;
    
    
}
// restart should generate new random number, assign new values to crystals, reset score counter to 0

// show players wins and losses

// ****random number between 19-120, crystal value between 1-12****