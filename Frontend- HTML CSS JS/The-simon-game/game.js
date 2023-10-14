var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattren = [];

var started = false
var level = 0

// starting the game

$(document).keydown(function () {
    if (!started) {
        $("#level-title").text("level "+ level)
        nextSequence();
        started = true;
    };
 });

 // restarting the game
 function startOver() {
    started = false;
    level = 0;
    gamePattern = [];
 };

// picked color saved in array, userClickedPattren.

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattren.push(userChosenColour);
    checkAnswer(userClickedPattren.length-1);
   
    playSound(userChosenColour);
    animatePress(userChosenColour);

});

 // checking user answer

 function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattren[currentLevel]){
        console.log("right");
        if (gamePattern.length === userClickedPattren.length)
        setTimeout(function() {
            nextSequence();
            }, 1000);

    }
    else {
        $("#level-title").text("Game Over- Press any key to restart")

        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
            }, 200);
        
        startOver();

}};

// game adding color to sequence, gamePattern
// resetting the user clicked sequence

function nextSequence(){
    userClickedPattren = [];
    
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

