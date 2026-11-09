// p5.js
let BG = "#000000";
let FG = "#F1F1F1";
let PRIMARY = "#0000FF";
let SECONDARY = "#FF0000";

function setup(){
    createCanvas(880, 880);
}

function draw()
{
  background(255);
  stroke(0);
  strokeWeight(10);
  noFill();
  
  for(let i=0; i<constrain(frameCount,1,24); i++)
  {
    ellipse(width/2,height/2,i*30,i*30);
    ellipse(mouseX,mouseY,i*30,i*30);
  }
}
