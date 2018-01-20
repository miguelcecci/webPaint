var aux = 0;
var redi = 20;
var bluei = 20;
var greeni = 20;
var opacidade = 255;
var espessura = 4;

function setup() {
  textAlign(CENTER);
  textSize(16);
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

function limpar(){
  background(255);
}

function toolbar(){
  size = windowWidth/50;
  fill(200);
  stroke(200);
  noStroke();
  rect(0,0,windowWidth/50,windowHeight);
  buttonClear(0,0,size);
  buttonRedM(0,size,size);
  buttonShowR(0,2*size,size);
  buttonRedL(0,3*size,size);

  buttonBlueM(0,4*size,size);
  buttonShowB(0,5*size,size);
  buttonBlueL(0,6*size,size);

  buttonGreenM(0,7*size,size);
  buttonShowG(0,8*size,size);
  buttonGreenL(0,9*size,size);

  buttonEspM(0,10*size,size);
  buttonShowE(0,11*size,size);
  buttonEspL(0,12*size,size);
}

function buttonEspM(x, y, size){
  if(mouseX>x && mouseX<x+size && mouseY>y && mouseY<y+size){
    hoverEffect(x, y, size);
    if (mouseIsPressed && espessura>1){
      espessura = espessura-1;
    }
  }
  textSize(16);
  textAlign(CENTER);
  fill(0);
  text('-', x+size/2, y+size/2);
}

function buttonShowE(x, y, size){
    fill(redi*5, greeni*5, bluei*5);
    noStroke();
    ellipse(x+size/2, y+size/2, 2+espessura/10, 2+espessura/10);
}

function buttonEspL(x, y, size){
  if(mouseX>x && mouseX<x+size && mouseY>y && mouseY<y+size){
    hoverEffect(x, y, size);
    if (mouseIsPressed && espessura<100){
      espessura = espessura+1;
    }
  }
  textSize(16);
  textAlign(CENTER);
  fill(0);
  text('+', x+size/2, y+size/2);
}


function buttonBlueM(x, y, size){
  if(mouseX>x && mouseX<x+size && mouseY>y && mouseY<y+size){
    hoverEffect(x, y, size);
    if (mouseIsPressed){
      bluei = bluei-1;
    }
  }
  textSize(16);
  textAlign(CENTER);
  fill(0);
  text('-', x+size/2, y+size/2);
}

function buttonShowB(x, y, size){
    fill(0, 0, bluei*5);
    noStroke();
    rect(x, y, size, size);
}

function buttonBlueL(x, y, size){
  if(mouseX>x && mouseX<x+size && mouseY>y && mouseY<y+size){
    hoverEffect(x, y, size);
    if (mouseIsPressed){
      bluei = bluei+1;
    }
  }
  textSize(16);
  textAlign(CENTER);
  fill(0);
  text('+', x+size/2, y+size/2);
}


function buttonGreenM(x, y, size){
  if(mouseX>x && mouseX<x+size && mouseY>y && mouseY<y+size){
    hoverEffect(x, y, size);
    if (mouseIsPressed){
      greeni = greeni-1;
    }
  }
  textSize(16);
  textAlign(CENTER);
  fill(0);
  text('-', x+size/2, y+size/2);
}

function buttonShowG(x, y, size){
    fill(0, greeni*5, 0);
    rect(x, y, size, size);
}

function buttonGreenL(x, y, size){
  if(mouseX>x && mouseX<x+size && mouseY>y && mouseY<y+size){
    hoverEffect(x, y, size);
    if (mouseIsPressed){
      greeni = greeni+1;
    }
  }
  textSize(16);
  textAlign(CENTER);
  fill(0);
  text('+', x+size/2, y+size/2);
}


function buttonRedM(x, y, size){
  if(mouseX>x && mouseX<x+size && mouseY>y && mouseY<y+size){
    hoverEffect(x, y, size);
    if (mouseIsPressed){
      redi = redi-1;
    }
  }
  textSize(16);
  textAlign(CENTER);
  fill(0);
  text('-', x+size/2, y+size/2);
}

function buttonShowR(x, y, size){
    fill(redi*5, 0, 0);
    rect(x, y, size, size);
}

function buttonRedL(x, y, size){
  if(mouseX>x && mouseX<x+size && mouseY>y && mouseY<y+size){
    hoverEffect(x, y, size);
    if (mouseIsPressed){
      redi = redi+1;
    }
  }
  textSize(16);
  textAlign(CENTER);
  fill(0);
  text('+', x+size/2, y+size/2);
}

function buttonClear(x, y, size){
  if(mouseX>x && mouseX<x+size && mouseY>y && mouseY<y+size){
    hoverEffect(x, y, size);
    if (mouseIsPressed){
      background(255);
    }
  }
  textSize(16);
  textAlign(CENTER);
  fill(0);
  text('X', x+size/2, y+size/2);
}



function hoverEffect(x, y, size){
  fill(200,100, 250, 140);
  rect(x,y,size,size);
}

function paint(){

  if(mouseX>windowWidth/50){
    strokeWeight(espessura/10);

    if(mouseIsPressed){
      stroke(redi*5, greeni*5, bluei*5, opacidade);
      line(mouseX,mouseY,mousebufferX,mousebufferY);
      mousebufferX = mouseX;
      mousebufferY = mouseY;
    }else{
      mousebufferX = mouseX;
      mousebufferY = mouseY;
    }
  }
}
