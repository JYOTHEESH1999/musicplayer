var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var tom1 = new Audio("[iSongs.info] 04 - ButtaBomma.mp3");
var tom2 = new Audio("[iSongs.info] 01 - Maguva Maguva.mp3");
  var tom3 = new Audio('[iSongs.info] 02 - Dinchak.mp3');
  var tom4 = new Audio('[iSongs.info] 01 - Okey Oka Lokam.mp3');
var tom5= new Audio('[iSongs.info] 03 - SarangaDariya.mp3');
var tom6 = new Audio('[iSongs.info] 07 - Orori Devudo.mp3');
var tom7 = new Audio('[iSongs.info] 01 - Nee Kannu Neeli Samudram.mp3');

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "b":
    {

      tom2.pause();
      tom3.pause();
      tom4.pause();
      tom5.pause();
      tom6.pause();
      tom7.pause();
      tom1.play();
      break;
}
    case "m":
    {



      tom1.pause();
      tom3.pause();
      tom4.pause();
      tom5.pause();
      tom6.pause();
      tom7.pause();
       tom2.play();

      break;
}
    case "d":
    {
      tom1.pause();
      tom4.pause();
      tom5.pause();
      tom6.pause();
      tom7.pause();
       tom2.pause();

      tom3.play();
      break;
}
    case "o":
    {
      tom2.pause();
      tom3.pause();
      tom1.pause();
      tom5.pause();
      tom6.pause();
      tom7.pause();
      tom4.play();
      break;
}
    case "s":
    {
      tom2.pause();
      tom3.pause();
      tom4.pause();
      tom1.pause();
      tom6.pause();
      tom7.pause();
      tom5.play();
      break;
}
    case "c":
    {
      tom2.pause();
      tom3.pause();
      tom4.pause();
      tom5.pause();
      tom1.pause();
      tom7.pause();
      tom6.play();
      break;
}
    case "u":
    {
      tom2.pause();
      tom3.pause();
      tom4.pause();
      tom5.pause();
      tom6.pause();
      tom1.pause();

      tom7.play();
      break;
}

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
