
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6;
var tree,ground,stone,sling,boy;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(350,650,900,20);
	tree = new Tree(600,400,300,500);
	stone = new Stone(150,300,30);

	mango1 = new Mango(600,200,30);
	mango2 = new Mango(550,230,30);
	mango3 = new Mango(650,300,30);
	mango4 = new Mango(600,350,30);
	mango5 = new Mango(720,320,30);
	mango6 = new Mango(540,350,30);

	boy = new Boy(150,450,100,400);

	sling = new Sling(stone.body,{x:120,y:350});

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  boy.display();

  stone.display();
  sling.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}
function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

if (distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}

}



