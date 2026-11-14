// 2026-11-13

function setup() {
    createCanvas(900, 900);
}

function draw() {
    background(0);
    noStroke();

    let tilesX = width / 50;
    let tilesY = height / 50;

    let tilesW = width / tilesX;
    let tilesH = height / tilesY;


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
}