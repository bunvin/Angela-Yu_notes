
// a bit too general, if we add another before it would apply to them as well

// for (var i =0; i <= 7 ; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         alert("i got clicked");
//     });
// }

// specific for the drum class

for (var i =0; i < document.querySelectorAll(".drum").length ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //this -> the event that was clicked as html element
    // for testing -> this.style.color = "white"
    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});}

// for key board just add event listener to the whole doc

var keyPlay = document.addEventListener("keydown", function(event){
    var keyPressed = event.key;
    makeSound(keyPressed)
    buttonAnimation(keyPressed);
});
    
//make sounds
    function makeSound(key){

        switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play();
                break;

            case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3")
                    tom2.play();
                    break;

            case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3")
                    tom3.play();
                    break;

            case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3")
                    tom4.play();
                    break;

            case "j":
                    var snare = new Audio("sounds/snare.mp3")
                    snare.play();
                    break;

            case "k":
                    var crash = new Audio("sounds/crash.mp3")
                    crash.play();
                    break;

            case "l":
                    var kick = new Audio("sounds/kick-bass.mp3")
                    kick.play();
                    break;
                    
            default: console.log(key);
                break;
        }
    };
        
// animation to buttom

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}