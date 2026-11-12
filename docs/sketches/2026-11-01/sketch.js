// 2026-11-01

function setup() {
    createCanvas(880, 880);
}

function draw() {
    background(0);
    let amount = Math.max(1, Math.ceil(mouseX / 10));
    let w = width / amount;
    translate(w / 2, 0);
    for (let i = 0; i < amount; i++) {
        noStroke();
        fill(255);
        ellipse(i * w, height / 2, w, w);
    }
}