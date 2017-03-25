var playButton = document.querySelector("#play")
var pauseButton = document.querySelector("#pause")
var selector = document.querySelector("#selector")


function Jukebox() {
  this.audio = new Audio("06 Some Kind Of Drug (Earwulf Remix) copy.mp3")
}

var jukebox = new Jukebox()


Jukebox.prototype.play = function () {
  this.audio.play();
}

Jukebox.prototype.pause = function () {
  this.audio.pause();
}

playButton.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.play(selector.value)
  playButton.style.display= "block"
  playButton.style.display= "none"
  pauseButton.style.display= "block"
})
pauseButton.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.pause(selector.value)
  pauseButton.style.display= "block"
  pauseButton.style.display= "none"
  playButton.style.display= "block"
})

selector.addEventListener("change", function(event){
  event.preventDefault
  jukebox.audio.pause()
  jukebox.audio = new Audio(selector.value)
  jukebox.audio.play()

})
