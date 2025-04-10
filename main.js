// Khởi tạo game
loadGame();
setInterval(function() {
  update();
  draw();
  updateUI();
}, 1000 / 60);

function update() {
  // Di chuyển người chơi
  if (keys["ArrowUp"] && !isWallCollision(player.x, player.y - player.speed)) player.y -= player.speed;
  if (keys["ArrowDown"] && !isWallCollision(player.x, player.y + player.height + player.speed)) player.y += player.speed;
  if (keys["ArrowLeft"] && !isWallCollision(player.x - player.speed, player.y)) player.x -= player.speed;
  if (keys["ArrowRight"] && !isWallCollision(player.x + player.width + player.speed, player.y)) player.x += player.speed;

  // Bắn đạn
  if (keys[" "]) shootBullet();

  // Cập nhật đạn
  updateBullets();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMap();
  ctx.drawImage(sprite, 0, 0, 32, 32, player.x, player.y, player.width, player.height);
  drawBullets();
  enemies.forEach(enemy => {
    ctx.drawImage(sprite, 32, 0, 32, 32, enemy.x, enemy.y, enemy.width, enemy.height);
  });
}
