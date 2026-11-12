// 2026-11-11

function setup() {
  createCanvas(880, 880);
}

function draw() {
  background(0);
  let tilesX = Math.floor(map(mouseX, 0, width, 2, 20));
  let tilesY = Math.floor(map(mouseY, 0, height, 2, 20));

  let tilesW = width/tilesX;
  let tilesH = height/tilesY;

  translate(tilesW/2, tilesH/2);
  fill(255);
  noStroke();
  rectMode(CENTER);
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
        ellipse(tilesW * x, tilesH * y, tilesW, tilesH);
    }
  }
}
