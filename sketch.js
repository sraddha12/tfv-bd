

function preload(){

bgimg=loadImage("images/bg.jpg")
ironman=loadImage("images/iron.png")
}

function setup() {
createCanvas(1000, 600);
bg=createSprite(500,300);
bg.addImage(bgimg)
bg.scale=2
bg.velocityX=-5
ironMan=createSprite(100,430);
ironMan.addImage(ironman)
ironMan.scale=0.25;

}

function draw(){
background("lightblue")
drawSprites()
if(bg.x<240){
    bg.x=500
}
if(keyDown("up")){
  ironMan.velocityY=-10
}
if(keyDown("left")){
  ironMan.x=ironMan.x-5
}
if(keyDown("right")){
  ironMan.x=ironMan.x+5
}
  ironMan.velocityY=ironMan.velocityY+0.5;
}

  