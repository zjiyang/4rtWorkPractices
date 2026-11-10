// 2026-11-01

function setup() {
  createCanvas(880, 880);
}

function draw() {
  background(0);
  
  push();
  noStroke();
  fill(255);
  let wave1 = sin(radians(frameCount));
  ellipse(width/2 + wave1 * 300, height/2, 200, 200);
  pop();


}
