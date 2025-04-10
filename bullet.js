const bullets = [];

function shootBullet() {
  const bullet = {
    x: player.x + player.width / 2,
    y: player.y,
    width: 4,
    height: 10,
    speed: 6,
    direction: -1 // -1 để bắn lên trên
  };
  bullets.push(bullet);
}

function updateBullets() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    const bullet = bullets[i];
    bullet.y += bullet.speed * bullet.direction;

    // Kiểm tra va chạm với tường
    if (bullet.y < 0 || bullet.y > canvas.height) {
      bullets.splice(i, 1); // Xóa viên đạn ra ngoài màn hình
    }

    // Kiểm tra va chạm với kẻ địch
    enemies.forEach((enemy, index) => {
      if (isColliding(bullet, enemy)) {
        score += 10;
        enemies.splice(index, 1);
        bullets.splice(i, 1);
      }
    });
  }
}

function drawBullets() {
  bullets.forEach(bullet => {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
  });
}
