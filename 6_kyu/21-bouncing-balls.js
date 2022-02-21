// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

const { drop } = require("prelude-ls");

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

const bouncingBall = (h,  bounce,  window) => {
  const conditions = (h < 0) || (bounce <= 0 || bounce >= 1) || (window >= h); // tirar o igual do window talvez
  if (conditions) { return -1; }

  let dropping = 0; // how many times the ball is falling
  while(h > window) {
    h *= bounce;
    if (h <= window) { return ((dropping * 2) + 1); } // multiplies by 2 because it includes dropping and going up + 1 because the last seen
    dropping += 1;
  }
}

// console.log(bouncingBall(-1, 0.55, 26));
// console.log(bouncingBall(30, 1));
// console.log(bouncingBall(30, 0.55, 30));
bouncingBall(3.0, 0.66, 1.5);
bouncingBall(30.0, 0.66, 1.5);
// console.log(bouncingBall(3.0, 0.66, 1.5), bouncingBall(30.0, 0.66, 1.5));