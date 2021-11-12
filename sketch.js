
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var basket, basket_img;
var bg_img;
var coconutGroup, coconut_img;
function preload()
{
	basket_img = loadImage("basket.png");
	bg_img = loadImage("bg.jpg");
	coconut_img = loadImage("coconut.png");
}

function setup() {
	createCanvas(1000, 565);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	basket = createSprite(500,500,20,20);
    basket.addImage(basket_img);
    basket.scale = 0.15;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg_img);
  if(keyDown(37)){
	  basket.position.x = basket.position.x - 7;
  }
  if(keyDown(39)){
	basket.position.x = basket.position.x + 7;
}
 spawnCoconuts();
  
  drawSprites();
}

function spawnCoconuts(){
	if(frameCount % 50 == 0){
		var a = Math.round(random(20,880));
		var coconut = createSprite(a, 0, 20, 20);
        coconut.addImage(coconut_img);
		coconut.velocityY = 3
		coconutGroup.add(coconut);
	}
}



