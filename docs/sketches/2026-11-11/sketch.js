let tilesX = 8;
let tilesY = 15;

function setup() {
    createCanvas(880, 880);
}

function draw() {
    background(0);

    let tilesW = width / tilesX;
    let tilesH = height / tilesY;

    translate(tilesW / 2, tilesH / 2);
    fill(255);
    noStroke();
    for (let y = 0; y < tilesY; y++) {
        for (let x = 0; x < tilesX; x++) {
            ellipse(tilesW * x, tilesH * y, tilesW, tilesH);
        }
    }
}

function updateTiles() {
    tilesX = Math.floor(constrain(map(mouseX, 0, width, 2, 20), 2, 20));
    tilesY = Math.floor(constrain(map(mouseY, 0, height, 2, 20), 2, 20));
}

function mouseMoved() {
    updateTiles();
}

function touchMoved() {
    updateTiles();
    return false;
}