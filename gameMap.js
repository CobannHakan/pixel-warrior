// Game map với tường
const gameMap = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// 1 là tường, 0 là không gian trống
const tileSize = 32;

function drawMap() {
  for (let row = 0; row < gameMap.length; row++) {
    for (let col = 0; col < gameMap[row].length; col++) {
      if (gameMap[row][col] === 1) {
        ctx.fillStyle = "#888";
        ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
      }
    }
  }
}

function isWallCollision(x, y) {
  const col = Math.floor(x / tileSize);
  const row = Math.floor(y / tileSize);
  return gameMap[row] && gameMap[row][col] === 1;
}
