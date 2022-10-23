const p1 = {
  score: 0,
  button: document.querySelector("#playerOne"),
  display: document.querySelector("#numOne"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#playerTwo"),
  display: document.querySelector("#numTwo"),
};
// the spans in the heading

//the select and the options in it
const sk_number = document.querySelector("#sk-number");
let winngScore = 5;
sk_number.addEventListener("change", (e) => {
  winngScore = parseInt(e.target.value);
  resetFun();
});
let gameOver = false;
//player one Events
const playerOne = document.querySelector("#playerOne");
p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});
//player Two Events
const playerTwo = document.querySelector("#playerTwo");
p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});
//Reset Events
const reset = document.querySelector("#reset");
reset.addEventListener("click", resetFun);
function resetFun() {
  gameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerText = p.score;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
function updateScore(player, opponent) {
  if (!gameOver) {
    player.score += 1;
    if (player.score === winngScore) {
      gameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      opponent.button.disabled = true;
      player.button.disabled = true;
    }
    player.display.innerText = player.score;
  }
}
