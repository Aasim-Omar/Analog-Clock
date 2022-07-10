let ctx = canvas.getContext("2d");
let deg = (Math.PI * 2) / 360;
let radius = canvas.height / 2;
ctx.translate(radius, radius);

function drawClock() {
  clearArea(ctx, canvas);
  drawTime(ctx, radius);
}

function clearArea(ctx, canvas) {
  ctx.clearRect(-radius, -radius, canvas.width, canvas.height);
}

function drawTime(ctx, raduis) {
  let now = new Date();
  let h = now.getHours() % 12;
  let m = now.getMinutes();
  let s = now.getSeconds();
  let hour = h * 30 * deg + m * 0.505 * deg + s * 0.001666667 * deg;
  let minute = m * 6 * deg + s * 0.1 * deg;
  let second = s * 6 * deg;
  ctx.strokeStyle = "#b42e2e";
  drawHand(ctx, hour, radius * 0.4, radius * 0.05);
  drawHand(ctx, minute, radius * 0.6, radius * 0.05);
  ctx.beginPath();
  ctx.fillStyle = "#e65e1c";
  ctx.strokeStyle = "#e65e1c";
  ctx.arc(0, 0, radius * 0.05, 0, Math.PI * 2);
  ctx.fill();
  drawHand(ctx, second, radius * 0.7, radius * 0.015);
  drawHand(ctx, second, -radius * 0.15, radius * 0.015);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  // ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

drawClock();
let startClock = setInterval(drawClock, 1000);
