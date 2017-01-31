var aux = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  xw=windowWidth;
  yw=windowHeight;
  background(255);
  toolbar();
}

function draw(){
  toolbar();
  paint();
}

function clear(){
  background(255);
}

function toolbar(){
  fill(200);
  stroke(200);
  rect(0,0,windowWidth/50,windowHeight);
  buttonClear(0,0,windowWidth/50);
}

function buttonClear(x, y, size){
  if(mouseX>x && mouseX<x+size && mouseY>y && mouseY<y+size){
    hoverEffect(x, y, size);
    if (mouseIsPressed){
      background(255);
    }
  }
}

function hoverEffect(x, y, size){
  fill(200,100, 250, 140);
  rect(x,y,size,size);
}

function paint(){
  if(mouseX>windowWidth/50){

    if(mouseIsPressed){
      stroke(0);
      strokeWeight(5);
      line(mouseX,mouseY,mousebufferX,mousebufferY);
      mousebufferX = mouseX;
      mousebufferY = mouseY;
    }else{
      mousebufferX = mouseX;
      mousebufferY = mouseY;
    }
  }
}
