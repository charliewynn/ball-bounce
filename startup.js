function startup() {
  if (!window.requestAnimationFrame) {
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  }

  var ClearCountDown;
  let canvas = document.getElementById("canvas");

  requestAnimationFrame(animate);

  ClearCountDown = 0;
  const left = 0;
  const top = 0;
  const right = canvas.width;
  const bottom = canvas.height;

  function animate() {
    if (ClearCountDown > 0) ClearCountDown--;
    if (ClearCountDown == 1) {
    } else if (ClearCountDown == 0) {
    }
    calcCirc();
    //if we're done doing matches...
    render(canvas);
    requestAnimationFrame(animate);
  }

  let circLoc = { x: 50, y: 50 };
  let circDir = { x: 1, y: 1 };
  const circSize = 5;

  function render(canvas) {
    var c = canvas.getContext("2d");

    c.clearRect(0, 0, canvas.width, canvas.height);
    drawRect(c, 0, 0, canvas.width, canvas.height, blackFill);
    drawCirc(c, circLoc, circSize, ballColors[ballColor]);
  }

  let ballColor = 0;
  function calcCirc() {
    let newCirc = { x: circLoc.x + circDir.x, y: circLoc.y + circDir.y };
    let bounced = false;
    if (newCirc.x + circSize > right) {
      circDir.x = circDir.x * -1;
      bounced = true;
    }
    if (newCirc.x - circSize < left) {
      circDir.x = circDir.x * -1;
      bounced = true;
    }
    if (newCirc.y + circSize > bottom) {
      circDir.y = circDir.y * -1;
      bounced = true;
    }
    if (newCirc.y - circSize < top) {
      circDir.y = circDir.y * -1;
      bounced = true;
    }
    if (bounced) {
      ballColor = (ballColor + 1) % ballColors.length;
    }
    circLoc = newCirc;
  }

  function drawRect(context, x1, y1, x2, y2, color) {
    context.beginPath();
    context.fillStyle = color;
    context.fillRect(x1, y1, x2, y2);
    context.closePath();
    context.fill();
  }
  function drawCirc(context, loc, radius, color) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(loc.x, loc.y, radius, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
  }

  var redFill = "rgba(255,0,0,1)";
  var greenFill = "rgba(34,139,34,1)";
  var orangeFill = "rgba(255,140,0,1)";
  var blueFill = "rgba(0,0,255,1)";
  var blackFill = "rgba(0,0,0,1)";
  var brownFill = "rgba(139,69,19,1)";
  var purpleFill = "rgba(170,0,255,1)";
  const ballColors = [
    purpleFill,
    redFill,
    blueFill,
    greenFill,
    orangeFill,
    brownFill
  ];
}
