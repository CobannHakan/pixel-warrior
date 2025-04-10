function updateUI() {
  document.getElementById("stats").textContent = `Score: ${score} | Lives: ${lives}`;
}

function showGameOver() {
  alert(`Game Over! Final Score: ${score}`);
}
