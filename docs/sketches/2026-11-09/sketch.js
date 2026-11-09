// p5.js
let BG = "#000000";
let FG = "#F1F1F1";
let PRIMARY = "#0000FF";
let SECONDARY = "#FF0000";

function setup(){
    createCanvas(880, 880);
    frameRate(2);
}

let k = 6;

function draw() {
  background(255);
  rectMode(CORNER);
  noStroke();
  fill(0);

  let rowH = height / k;    // 每行占多高
  let gap = rowH * 0.3;     // 行间隔，跟着 k 变
  let h = rowH - gap;       // 黑框实际高度

  for (let i = 0; i < k; i++) {
    let y = i * rowH + gap / 2;

    // 第一个框：从左边某处开始，宽度随机
    let x1 = random(0, width * 0.3);
    let w1 = random(30, width * 0.4);
    rect(x1, y + random(-15, 15), w1, h);

    // 第二个框：接在第一个后面，中间也留个空，宽度不超出画布
    let x2 = x1 + w1 + gap;
    let w2 = random(30, width - x2);
    rect(x2 - w1 + random(30), y + random(-15, 15), w2, h);
  }
}

