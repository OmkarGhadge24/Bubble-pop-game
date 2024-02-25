var timer = 60;
var score = 0;
var hitnum = 0;
function makebubble() {
  var clutter = "";

  for (var i = 1; i <= 160; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbottom").innerHTML = clutter;
}
function runtimer() {
  var timeint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timeint);
      document.querySelector("#pbottom").innerHTML = `<h2>Game Over</h2>`;
    }
  }, 1000);
}
function gethit() {
  hitnum = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitnum;
}
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbottom").addEventListener("click", function (dets) {
  var num = Number(dets.target.textContent);
  if (num == hitnum) {
    increaseScore();
    makebubble();
    gethit();
  }
});

makebubble();
runtimer();
gethit();
