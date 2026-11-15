// 2026-11-14
let tileSize = 30;

function setup() {
    createCanvas(900, 910);
}

function draw() {
    background(255);
    noStroke();

    let tilesX = Math.ceil(width / tileSize);
    let tilesY = Math.ceil((height - 10) / tileSize);

    let tilesW = width / tilesX;
    let tilesH = (height - 10) / tilesY;


    let a = map(sin(radians(frameCount)), -1, 1, 0, 7);

    for (let y = 0; y < tilesY; y++) {
        for (let x = 0; x < tilesX; x++) {
            push();
            let b = map(sin(radians(x + y)), -1, 1, -50, 50);
            let c = map(tan(radians(frameCount * 4 + a * x + a * y * b)), -1, 1, 0, 255);
            fill(c);
            rect(x * tilesW, y * tilesH, tilesW, tilesH);
            pop();
        }
    }
    drawIndicator();
}

function drawIndicator() {
    let x = map(tileSize, 10, 100, 0, width);

    if (frameCount % 60 < 30) {
        fill(0);
        push();
        noStroke();
        triangle(x, height - 9,
            x - 4, height,
            x + 4, height);
        pop();
    }
}

function mouseMoved() {
    tileSize = constrain(map(mouseX, 0, width, 10, 100), 10, 100);
}

function mousePressed() {
    if (isLooping()) {
        noLoop();
    } else {
        loop();
    }
}