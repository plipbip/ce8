var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rec1,rec2,rec3
var recA,recB,recC
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	rec1=createSprite(300,620,20,100);
	rec1.shapeColor="red"
	
	rec2=createSprite(450,620,20,100);
	rec2.shapeColor="red"

	rec3=createSprite(375,660,125,20);
	rec3.shapeColor="red"



	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	recA = Bodies.rectangle(300,620,20,100, {isStatic:true})
	World.add(world, recA);
	
	recB = Bodies.rectangle(450,620,20,100, {isStatic:true})
	World.add(world, recB);

	recC = Bodies.rectangle(375,660,125,20, {isStatic:true})
	World.add(world, recC);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false)
    
  }
}



