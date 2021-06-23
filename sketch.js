var tom, jerry;
var BgImg;
var tomImg, jerryImg;
var mouseTeasing;
function preload() {
    BgImg.loadImage("images/garden.png")
    tomImg1.loadAnimation( "images/cat1.png");
    tomImg2.loadAnimation("images/cat2.png");
    tomImg3.loadAnimation("images/cat3.png");
    tomImg4.loadAnimation("images/cat4.png");

    jerryImg.loadAnimation(jerry, "images/mouse1.png");
    mouseTeasing.loadAnimation(teasing, "images/mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    background(BgImg); 
    
    tom = createSprite (10,20,300,200);
    tom.addAnimation (tomImg);
    tom.scale= 0.5;
   
     
    
    jerry.createSprite (15,25,100,200);
    jerry.addAnimation (jerryImg);
    jerry.scale = 0.5;
    
   

    
}

function draw() {

    background(255);
   if (cat.x - mouse.x (cat.width - mouse.width)/2) {
      tom.velocityX = 0;
      tom.addAnimation("tom_running",tomImg3);
      tom.x = 300;
      tom.scale = 0.2;
      tom.changeAnimation("tom_running");
      jerry.addAnimation("jerry_running",jerryImg3);
      jerry.scale = 0.15;
      jerry.changeAnimation("jerry_running");
   }



    drawSprites();
}


function keyPressed(){

  if (keycode === LEFT_ARROW) {
      tom.velocityX = -4;
      tom.addAnimation("tomRunning",tomImg3);
      tom.changeAnimation("tomRunning");
    
      jerry. addAnimation("mouse teasing", mouseImg2);
      jerry.changeAnimation("mouse teasing");
      jerry.frameDelay = 25;

  }
//I'm not sure what the notes were last class that I needed to add to this project

}
