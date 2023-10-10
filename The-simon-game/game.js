var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattren = [];

var started = false
var level = 0

// press any key to start the game
// pressing will call nextSequence() for the first time

// starting the game

$(document).keydown(function () {
    if (!started) {
        $("#level-title").text("level "+ level)
        nextSequence();
        started = true;
        // change title
    };
 });

// user pattren by clicking btn
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattren.push(userChosenColour);
   
    playSound(userChosenColour);
    animatePress(userChosenColour);
});


// game adding color to sequence
function nextSequence(){
    level++;
    $("#level-title").text("level "+ level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomColor = buttonColours[randomNumber] 
    gamePattern.push(randomColor);

    playSound(randomColor);
    animatePress(randomColor);
}


// Play sound to btn
function playSound(color){
    var soundPlay = new Audio("sounds/" + color + ".mp3");
    soundPlay.play();
};

// Animation to btn
function animatePress(color){
    $("#"+color).fadeIn(100).fadeOut(100).fadeIn(100);
    //changing style if pressed
    $("#"+color).addClass("pressed")
    setTimeout(() => {
        $("#"+color).removeClass("pressed");
    }, 100);
};

