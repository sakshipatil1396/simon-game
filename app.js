let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["yellow", "green", "purple", "red"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 500);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`; 
  let randIdx = Math.floor(Math.random() * 4); 
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`); 


  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randbtn);
}

function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = "Game Over! Press Any Key to Start";
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id"); 
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) { 
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}