// 2026-11-15

let faceW, faceH;
let eyeDistance, eyeY, eyeW, eyeH;
let noseW, noseH, noseY;
let mouthW, mouthH, mouthY, mouthMode;

function setup() {
    createCanvas(880, 880);
    frameRate(2);
}

function draw() {
    background(255);

    generate();

    //face
    push();
    strokeWeight(10);
    translate(width / 2, height / 2);
    ellipse(0, 0, faceW, faceH);
    pop();

    //eyes
    push();
    translate(width/2, eyeY);
    strokeWeight(10);
    ellipse(-eyeDistance/2, 0, eyeW, eyeH)
    ellipse(eyeDistance/2, 0, eyeW, eyeH)
    pop();

    //nose
    push();
    fill(0);
    translate(width/2, noseY);
    strokeWeight(3);
    strokeJoin(ROUND); 
    triangle(0, 0, -noseW, noseH, 0, noseH);
    pop();

    //mouth
    push();
    translate(width/2, mouthY);
    strokeWeight(10);
    if(mouthMode < 1) {
        arc(0, 0, mouthW, mouthH, 0, radians(180));
    } else {
        arc(0, 0, mouthW, mouthH, radians(180), radians(360));
    }
    pop();

}

function generate() {
    faceW = width / random(1.1, 1.8);
    faceH = height / random(1.1, 1.8);

    eyeW = random(10, 60);
    eyeH = random(10, 60);
    //eyeMode = random(2);
    noseW = random(20, 60);
    noseH = random(20, 50);
    mouthW = random(10, 200);
    mouthH = random(10, 90);
    mouthMode = random(2);

    let eyeNoseGap = random(0, 30);
    let noseMouthGap = random(30, 80);
    let chin = height/2 + faceH/2 - 30;

    let eyeMax = min(height/2 + faceH * 0.05,
                     chin - mouthH - noseMouthGap - noseH - eyeNoseGap - eyeH/2);
    eyeY = random(height/2 - faceH * 0.4, eyeMax);

    let dy = abs(eyeY - height/2) + eyeH/2;
    let halfW = faceW/2 * sqrt(1 - (dy / (faceH/2)) ** 2);
    eyeDistance = random(faceW/9, 2 * (halfW - eyeW/2 - 10));

    noseY = eyeY + eyeH/2 + eyeNoseGap;

    mouthY = noseY + noseH + noseMouthGap + mouthH/2;

    dy = abs(mouthY - height/2) + mouthH/2;
    halfW = faceW/2 * sqrt(1 - (dy / (faceH/2)) ** 2);
    mouthW = min(mouthW, 2 * (halfW - 15));
}

// old ver.
// function generate() {
//     faceW = width / random(1.1, 1.8);
//     faceH = height / random(1.1, 1.8);

//     eyeY = random(height/2 - faceH * 0.45, height/2 + faceH * 0.05);
//     eyeW = random(10, 60);
//     eyeH = random(10, 60);
//     let dy = abs(eyeY - height/2) + eyeH/2;
//     let halfW = faceW/2 * sqrt(1 - (dy / (faceH/2)) ** 2);
//     eyeDistance = random(faceW/9, 2 * (halfW - eyeW/2 - 10));

//     noseW = random(30, 90);
//     noseH = random(30, 90);
//     noseY = random(eyeY + eyeH/2 - 5, eyeY + 120);

//     mouthMode = random(2);
//     mouthW = random(10, 200);
//     mouthH = random(10, 90);
//     mouthY = random(noseY + noseH + 30, height / 2 + faceH / 2 - mouthH);
// }