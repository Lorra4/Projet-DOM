var btn = document.getElementById("change-color-btn");
var box = document.getElementById("color-box");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
  
  function setRandomColor() {
    box.style.background = `#${getRandomColor()}` ;
  }