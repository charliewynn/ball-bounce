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

export const Loop = fn => {
  window.requestAnimationFrame(() => {
    fn();
    Loop(fn);
  });
};
