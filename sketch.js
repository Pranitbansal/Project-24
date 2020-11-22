
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var engine,world,paper,ground,dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(400,680,800,10,{isStatic: true});
	World.add(world,ground);
	paper = new Paper(100,660);
	dustbin1 = new Dustbin(440, 650, 20, 100);
	dustbin2 = new Dustbin(500, 650, 100, 20);
	dustbin3 = new Dustbin(560, 650, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  fill("yellow");
  rect(400,680,800,10);

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
  keyCode();
 
}
function keyPressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



