// 2026-11-19
let helvetica;
const CAP = 0.717;

let text1 = "You lose the Now, and you return to it, again and again. Eventually, presence becomes your predominant state.";

function preload(){
   //data = loadImage('assets/filename.jpg')
   helvetica = loadFont('assets/Helvetica.ttf'); 
   //data = loadStrings(('assets/filename.txt'))
   //data = loadModel('assets/filename.obj');
   //data = loadSound('assets/filename.mp3');
}

function setup() {
    createCanvas(880, 880);
}

function draw() {
    background(255);
    fill(0);
    textFont(helvetica);

    let rowN = 9;
    let rowH = height/rowN;

    for (let i = 0; i < rowN; i++) {
        if ( i % 2 == 0) {
            fill(0);
            rect(0, rowH * i, width, rowH);
        }
    }

    
    let fontSize = (rowH / CAP) * 0.90;
    textSize(fontSize);
    textAlign(LEFT, TOP);
    let t = text1.toUpperCase();
    let w = textWidth(t);
    

    for (let i = 0; i < rowN; i++) {
        let speed;
        if ( i % 2 == 0) {
            speed = i * 0.4 + 1;
            fill(255);
        } else {
            speed = i + 1;
            fill(0); 
        }

        let x = width - ((frameCount - 1) * speed % (width + w));
        let y = rowH * i - 1;
        text(t, x, y);
    }
}
