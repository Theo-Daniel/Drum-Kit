var noofdrums=document.querySelectorAll(".drum").length;


// to detect button clicked
for(i=0; i<noofdrums; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
  function clicked(){
    var button = this.innerHTML;
    makesound(button);
    buttonanimation(button);
  }
}


// to detect key pressed
document.addEventListener("keydown",function(event){
  makesound(event.key);
  buttonanimation(event.key);
});



function makesound(key)
{
 switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

   default:console.log("hi");
}
}

function buttonanimation(currentkey){
  var activebutton = document.querySelector("." + currentkey);
  activebutton.classList.add("pressed");

  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);
}
