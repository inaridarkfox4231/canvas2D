let gr;
let ratio;

function setup(){
  createCanvas(windowWidth, windowHeight);
  gr = createGraphics(400,400);
  gr.background(220);
  gr.fill("red");
  gr.rect(10,10,380,380);
  ratio = max(1,windowWidth/window.screen.width);
}

function draw(){
  clear();
  image(gr, width/2-ratio*gr.width/2, height/2-ratio*gr.height/2, ratio*gr.width,ratio*gr.height,0,0,gr.width,gr.height);
}
