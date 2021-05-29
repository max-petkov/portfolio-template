const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const color = "#9DAFC2";
let circle = [];

canvas.width = innerWidth;
canvas.height = innerHeight;

// CIRCLE SHAPE
class Circle {
  constructor(x, y, dx, radius, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.directionX = dx;
    this.directionY = dy;

    this.maxRadius = Math.random() * (32 - 8) + 8;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.draw();
    // It will contact with the edge of the ball not with it center...
    if (
      this.x + this.maxRadius + 14 > canvas.width ||
      this.x - this.maxRadius < 0
    ) {
      this.directionX = -this.directionX;
    }

    if (
      this.y + this.maxRadius > canvas.height ||
      this.y - this.maxRadius < 0
    ) {
      this.directionY = -this.directionY;
    }

    if (this.radius >= this.maxRadius) {
      this.radius = this.maxRadius;
    }

    this.y += this.directionY;
    this.x += this.directionX;

    this.radius += 0.05;
  }
}

function init() {
  for (let i = 0; i < 32; i++) {
    let radius = Math.random() * (3 - 0) + 0;
    let maxRadius = 32;
    // It wont spawn on canvas corner... It will spawn only from where it can bounce
    let x = Math.random() * (innerWidth - maxRadius * 2) + maxRadius;
    let y = Math.random() * (innerHeight - maxRadius * 2) + maxRadius;
    let dx = Math.random() * (0.5 - 1.0) - 0.5;
    let dy = Math.random() * (0.5 - 1.0) - 0.5;

    circle.push(new Circle(x, y, dx, radius, dy));
  }
}

init();

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  circle.forEach((drawcirc) => {
    drawcirc.update();
  });
}

animate();

addEventListener("resize", () => {
  circle = [];

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});
