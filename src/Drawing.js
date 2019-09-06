export const Rectangle = (context, x1, y1, x2, y2, color) => {
  context.beginPath();
  context.fillStyle = color;
  context.fillRect(x1, y1, x2, y2);
  context.closePath();
  context.fill();
};

export const Circle = (context, loc, radius, color) => {
  context.beginPath();
  context.fillStyle = color;
  context.arc(loc.x, loc.y, radius, 0, Math.PI * 2, false);
  context.closePath();
  context.fill();
};
