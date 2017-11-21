var mic;
var capture;
var myImg,myImg2,myImg3;
function preload(){
    myImg=loadImage('./assets/fiori2.png');
    myImg2=loadImage('./assets/spazio.png');
    myImg3=loadImage('./assets/frida.png');
    myImg4=loadImage('./assets/unicorno.png');
}
function setup() {
  createCanvas(680,600); 
  
  capture = createCapture(VIDEO);
  capture.size(660,500);
  capture.hide();

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
background(0);
    textFont('Amatic SC');
    textSize(18.7);
    fill(128);
    text ('press tab',10,560);
 var myImage=capture;
  image(myImage,10,40,660,500);

push();
if(mouseX<=330){
    filter(GRAY);
} else {
    filter(POSTERIZE,5);
}
pop();
    
push();
var vol = mic.getLevel();
    
for(var x = 60; x < 590; x+=35)
  {
    for(var y = 440; y < 480; y+=15)
    { 
      var vol= mic.getLevel();
        
rotate(frameCount*3);
        
  fill('#FF9966');
  noStroke();
  ellipse(x, y, vol*40);

  fill('#FFD1DC')
  ellipse(x/3,y/2,vol*50);

  fill('#500000');
  
  ellipse(x+300,y-400,vol*40);     
    }
  }
pop();

push();
    if(mouseIsPressed) {
    
    console.log(mouseButton);
    
    if(mouseButton == 'left') {
      noStroke();
      noFill();
        
      rect(10,40,660,500);
      fill(211, 110, 112,50);
        
      tint(255,200,200);
      image(myImg,10,40,660,500);
     
      noTint();
      image(myImg3,190,50,300,290);
        
    } else if (mouseButton == 'right') {
      noStroke();
      noFill();
        
      rect(10,40,660,500);
      fill(250,218,221,50)
        
      tint(250, 250,200);
      image(myImg2,10,40,660,500);
        
      noTint();
      image(myImg4,240,45,210,200);
    }
    
  }
pop();

push();
keyPressed();
pop();
}

function keyPressed() {
    if(keyCode == UP_ARROW) {
        textFont('Amatic SC');
        textSize(30);
        fill(255);
        text('WOW! YOU ARE AMAZING!',240,35);
    } else if (keyCode == DOWN_ARROW) {
       textFont('Amatic SC');
        textSize(30);
        fill(255);
        text('WOW! YOU ARE MAGICAL!',240,35);
    } else if (keyCode == LEFT_ARROW){
        textFont('Amatic SC');
        textSize(30);
        fill(255);
        text('WOW! YOU ARE SPARKLING!',240,35);
    } else if(keyCode == RIGHT_ARROW) {
        textFont('Amatic SC');
        textSize(30);
        fill(255);
        text('WOW! YOU ARE BEAUTIFUL!',240,35);
    } else if(keyCode ==  TAB) {
        textFont('Amatic SC');
        textSize(18.7);
        fill(255);
        text('tray to move your mouse and hold down the buttons, you will be surprised! and press the arrows for a self-esteem injection!',10,580);
    }
    return 0;
}