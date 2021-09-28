var Lander, Shell;
var Ground, Background;
var Target, Bullseye;
var Gamestate = "Play";
var Time = 100

function preload(){
  Shell = loadImage("Lander.png");
  Background = loadImage("Bg.jpg");
  Bullseye = loadImage("Target.png")
}

function setup() {
  createCanvas(300, 650);
  frameRate(100);

  Lander = createSprite(150,100,25,25);
  Lander.addImage(Shell);
  Lander.scale = 0.4;
  rectMode(CENTER);
  //Lander.debug = true;
  Lander.setCollider("Rectangle", 0, 0, 220, 185)

  Ground = createSprite(150,600,650,50);
  Ground.scale = 0.5;
  rectMode(CENTER);
}

function draw() {
  background(Background);

  fill(12, 249, 225);
  textSize(15);
  text("Land at Less than 1 m/s. Velocity: " + Lander.velocityY,25,25);

  Time -= 1

  if (Time < 0 && Time > -10){
    Lander.velocityY = 10
  }

  if (keyDown == "space"){
    Lander.velocityY -= 1
  }

  Lander.collide(Ground)

  drawSprites();
}


