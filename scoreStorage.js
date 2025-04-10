function saveGame() {
  localStorage.setItem("score", score);
  localStorage.setItem("lives", lives);
}

function loadGame() {
  score = parseInt(localStorage.getItem("score")) || 0;
  lives = parseInt(localStorage.getItem("lives")) || 3;
}

function clearGame() {
  localStorage.removeItem("score");
  localStorage.removeItem("lives");
}
