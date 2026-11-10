// p5.js
function setup(){
    createCanvas(880, 880);
}


function draw() {
    background(200);
    
    push();
    noStroke();
    fill(0);
    let wave1 = cos(radians(millis() * 0.036));
    ellipse(width/2 + wave1 * 450, height/2, 200, 200);
    pop();

    push();
    textFont("sans-serif");
    fill(200);
    textSize(28);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("Seeing Is Forgetting", width/2, height/2);
    pop();

    push();
    noStroke();
    fill(255);
    //let wave2 = tan(radians(frameCount));
    let wave2 = tan(radians(millis() * 0.036));
    ellipse(width/2 + wave2 * 300, height/2, 200, 200);
    pop();
    
}

