let score = 0;
let aWidth;
let aHeigh;
let timer;
let iterations = 0;

window.addEventListener("load", setGameAreaBound);

function setGameAreaBound() {
  aWidth = innerWidth;
  aHeigh = innerHeight;

  aWidth -= 22;
  aHeigh -= 97;

  document.getElementById("gameArea").style.width = aWidth + "px";
  document.getElementById("gameArea").style.height = aHeigh + "px";

  document.getElementById("dot").addEventListener("click", detectionHit);

  aHeigh -= 74;
  aWidth -= 74;

  moveDot();
}

function detectionHit() {
  score += 1;

  document.getElementById("scoreLable").innerHTML = `Score: ${score}`;
}

function moveDot() {
  let x = Math.floor(Math.random() * aWidth);
  let y = Math.floor(Math.random() * aHeigh);

  if (x < 10) {
    x = 10;
  }
  if (y < 10) {
    y = 10;
  }

  document.getElementById("dot").style.left = x + "px";
  document.getElementById("dot").style.top = y + "px";

  if (iterations < 30) {
    timer = setTimeout("moveDot()", 1000);
  } else {
    document.getElementById("scoreLabel").innerHTML += `  Game Over!`;
    document.getElementById("dot").removeEventListener("click", detectionHit);
    clearTimeout(timer);
  }
  iterations++;
}
