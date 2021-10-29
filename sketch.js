var backgroundimg
var player
var playerimg

function preload(){
backgroundimg = loadImage('assets/background.jpeg');
}
function setup(){
  createCanvas(windowWidth,windowHeight);
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.scale = 2.4;
bg.addImage("bgimg",backgroundimg);
}


function draw() {
  drawSprites();
}