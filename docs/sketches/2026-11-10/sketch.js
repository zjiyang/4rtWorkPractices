// 2026-11-10

// Orbiting satellites with a tan() swing.
// The whole group shoots off one side and returns from the other;
// colors invert each time it passes through the center.
 
let isDark = true;
let prevWave = 0;
 
const swingAmount = 100; // how far the group swings left and right
const orbitRadius = 100; // satellite distance from the center
 
function setup() {
  createCanvas(880, 880);
  rectMode(CENTER);
}
 
function draw() {
  // ---- 1. Update state ----
  const wave = tan(radians(frameCount));
  if (prevWave < 0 && wave > 0) {
    // flip when passing through the center
    isDark = !isDark;
  }
  prevWave = wave;
 
  const bg = isDark ? 0 : 255;
  const fg = isDark ? 255 : 0;
 
  // ---- 2. Draw ----
  background(bg);
  noStroke();
  fill(fg);
 
  push();
  translate(width / 2 + wave * swingAmount, height / 2);
  rotate(radians(frameCount));
 
  // two satellites (i also sets spin speed: the second spins twice as fast)
  let x = orbitRadius;
  for (let i = 1; i <= 2; i++) {
    push();
    translate(x, 0);
    rotate(radians(frameCount * i));
    rect(0, 0, 50, 20);
    pop();
    x = -x;
  }
 
  // middle object
  push();
  rotate(radians(frameCount) / 10);
  noFill();
  stroke(fg);
  strokeWeight(20);
  if (isDark) {
    ellipse(0, 0, 60, 60);
  } else {
    rect(0, 0, 50, 50);
  }
  pop();
 
  pop();
}