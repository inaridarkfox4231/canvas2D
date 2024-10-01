let gr;
let ratio;

function setup(){
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  gr = createGraphics(400,400);

  ratio = max(1,windowWidth/window.screen.width);
}

function draw(){
  clear();
  image(gr, width/2-ratio*gr.width/2, height/2-ratio*gr.height/2, ratio*gr.width,ratio*gr.height,0,0,gr.width,gr.height);

  gr.background("navy");
  gr.noStroke();
  gr.textAlign(LEFT,TOP);
  gr.textSize(18);
  gr.text("Hello, world.", 5, 5);
  gr.text("windowWidth:" + windowWidth, 5, 35);
  gr.fill(255);
  gr.circle(200+150*cos(frameCount*TAU/120),200+150*sin(frameCount*TAU/120),10);
}
