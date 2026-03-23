// JavaScript to reveal special message when button is clicked
document.getElementById("magicButton").addEventListener("click", function() {
  var specialMessage = document.getElementById("specialMessage");
  specialMessage.classList.toggle("hidden");
});
