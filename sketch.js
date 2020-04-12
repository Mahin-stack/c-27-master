const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hold,ball,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var hold_options ={
        isStatic : true   
       }
    ground = Bodies.rectangle(200,330,400,20,ground_options);
    World.add(world,ground);

    hold = Bodies.rectangle(200,100,200,20,hold_options);
    World.add(world,hold);

    var ball_options={
        restitution : 1.0,
        density : 1.0
    }

ball = Bodies.circle(220,200,40,ball_options);
World.add(world,ball)

var options = {
bodyA : ball,
bodyB: hold,
stiffness :0.004,
length :100  
}

var connecter = Constraint.create(options)
World.add(world,connecter)

fill("red");

}

function draw(){
    background(0);
    Engine.update(engine);

    text("Press space bar to oscillate the pendulum from left to right with mouse",10,20);
    text("Press enter to stop the pendulum from oscilating",100,50) 


    fill("brown")
    rectMode(CENTER)
    rect(hold.position.x,hold.position.y,200,20);

    fill (0);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

   fill("blue")
   ellipseMode(RADIUS)
   ellipse(ball.position.x,ball.position.y,40)

   strokeWeight(8);
   stroke("white")
   line(ball.position.x,ball.position.y,hold.position.x,hold.position.y)

   ball.position.y = mouseY;;
   ball.position.x = mouseX;
 

   if(keyIsDown(ENTER)){
    ball.position.x = 200  
  }
}












