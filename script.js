var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}

window.addEventListener("load", function() {
    var elements = document.getElementsByClassName("rainbowTitle");
    for (let i = 0; i < elements.length; i++) {
      generateRainbowText(elements[i]);
    }
});
  
function generateRainbowText(element) {
    var text = element.innerText;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      let charElem = document.createElement("span");
      charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
      charElem.innerHTML = text[i];
      element.appendChild(charElem);
    }
}