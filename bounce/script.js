let box = document.getElementById("box");
let ground = document.querySelector(".ground");
let groundWidth = ground.getBoundingClientRect().width;
let groundheight = ground.getBoundingClientRect().height;
let groundx = ground.getBoundingClientRect().x;
let groundy = ground.getBoundingClientRect().y;

let x = 0;
let y = 0;
let boxwidth = 60;
let boxheight = 60;
let yspeed = 2;

function bounce() {
  y += yspeed;
  if (y + boxwidth > groundy || y < 0) {
    yspeed = -yspeed;
  }

  box.style.top = y + "px";

  requestAnimationFrame(bounce);
}

bounce();
