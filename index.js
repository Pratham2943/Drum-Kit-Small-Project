//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonanimation(buttonInnerHTML);//animation
  });
}

//Detecting Keypress on keyboard
document.addEventListener("keydown", function name(event) {
  makesound(event.key);
  buttonanimation(event.key);//animation
});

//Function to makes sound by identifying the event occoured.
function makesound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom4.mp3");
      tom4.play();
      break;
    default:
      console.log(this.buttonInnerHTML);
  }
}


//function to add the animation to the pressed or clicked key
function buttonanimation (currentkey) {
  var activeButton=document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");//removal of animation OR pressed class.
  },300);
}

