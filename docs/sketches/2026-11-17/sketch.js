// 2026-11-17

function setup() {
    createCanvas(880, 880);
    rectMode(CENTER);
    frameRate(2);
}

function draw() {
    background(225);
    
    let tilesN = Math.floor(map(constrain(mouseX, 0, width), 0, width, 7, 20));
    let tilesL = width / (sqrt(2) * tilesN);
    let p = sqrt(2) * tilesL / 2;

    for (let y = 0; y < tilesN; y++) {
        for (let x = 0; x < tilesN; x++) {
            push();
            translate(p * (2 * x + 1), p * (2 * y + 1));
            if (random(1) < 0.01) {
                rotate(radians(45));
            }
            fill(0);
            square(0, 0, tilesL);
            pop();

        }
    }
}
