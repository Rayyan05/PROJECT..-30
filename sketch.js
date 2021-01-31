const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world,ground,ground1,ground2;
var striker1

function setup() {
  createCanvas(1300,400);
 
  //lower case - engine, world are the ones we created
  //Creating our physics engine
  engine = Engine.create();
  //create world using our engine
  world = engine.world;
 

    var ground_options = {
        restitution:1.0,
        isStatic: true
    }

    var striker_options = {
      'isStatic':false,
      'restitution':1.0
    }

    

  //create bodies(objects ) in the world
  ground = Bodies.rectangle(650,390,1300,20,ground_options);
  //Add the object to the world we created
  World.add(world, ground);

 ground1 = Bodies.rectangle(700,250,400,20,ground_options)
World.add(world,ground1)

box1 = new Box(640,220,30,40)
 box2 = new Box(610,220,30,40)
 box3 = new Box(570,220,30,40)
 box4 = new Box(680,220,30,40)
 box5 = new Box(720,220,30,40)
 box6 = new Box(750,220,30,40)
 box7 = new Box(780,220,30,40)
 box8 = new Box(820,220,30,40)
 box9 = new Box(750,180,30,40)
 box10 = new Box(710,180,30,40)
 box11 = new Box(670,180,30,40)
 box12 = new Box(630,180,30,40)
 box13 = new Box(670,140,30,40)
 box14 = new Box(710,140,30,40)
 box15 = new Box(690,100,30,40)



 

striker1 = new Striker(200,250,50,50)
 sling1 = new Slingshot(striker1.body,{x:200,y:200})
}

function draw() {
  background("brown");  

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 1300,20);


 rectMode(CENTER);
  rect(ground1.position.x, ground1.position.y, 400,20);
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  striker1.display();
  sling1.display();

 // keyPressed();


  text("Aim the ball to crash the tower",650,100)
}

function mouseDragged(){
  Matter.Body.setPosition(striker1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling1.fly();
}


