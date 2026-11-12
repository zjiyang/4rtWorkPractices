// 2026-11-12

let t = 0; //substitute for frameCount, increment by +1

function setup() {
  createCanvas(880, 880);
  background(0);
}

function draw() {
  let stepsPerFrame = 5; //draw 5 per frame
  
  noStroke();
  fill(255);

  // run forloop 5 times per frame
  for (let s = 0; s < stepsPerFrame; s++) {
    let waveX = sin(radians(t) * 1.125) * 300;
    let waveY = cos(radians(t) * 1) * 300;

    for (let i = 0; i < 10; i++) {
        fill (waveX + 90, waveY + 90, 150, 180)
      ellipse(width/2 + i * 3 + waveX,
        height/2 + waveY + i * 3,
        2, 2);
    }
    t++;
  }
}