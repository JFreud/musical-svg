var cb = document.getElementById("clear");
var svg = document.getElementById("svgfield");

var c, old_x, old_y, picked;


var makeDots = function() {
  c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", event.offsetX);
  c.setAttribute("cy", event.offsetY);
  c.setAttribute("r", 30);
  c.setAttribute("stroke", "white");
  c.setAttribute("fill", "navy");
  c.addEventListener('click', changeColor);
  svg.appendChild(c);
}

var makeRandom = function() {
  c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", Math.floor(Math.random() * 500));
  c.setAttribute("cy", Math.floor(Math.random() * 500));
  c.setAttribute("r", 30);
  c.setAttribute("stroke", "white");
  c.setAttribute("fill", "navy");
  c.addEventListener('click', changeColor);
  svg.appendChild(c);
}

var changeColor = function(event) {
  if (this.getAttribute("fill") == "green") {
    svg.removeChild(this);
    event.stopPropagation();
    makeRandom();
  }
  else {
    this.setAttribute("fill", "green");
    event.stopPropagation();
  }
}

var clear = function() {
  svg.innerHTML = " ";
}


svg.addEventListener('click', makeDots);
cb.addEventListener('click', clear);
