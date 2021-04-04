const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object,ball;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(300,600,200,20,object_options);
    World.add(world,object);

   var ball_options={
       'restitution':1.0
   }
ball=Bodies.circle(300,300,20,ball_options)
World.add(world,ball)
    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,600,10);
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,10,10)
}
