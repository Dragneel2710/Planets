const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var sun, earth;
var engine, world;
var angle,anglespeed;

function setup() {
  createCanvas(700,700);
  engine = Engine.create();
  world = engine.world;
  
  angle = 0;
  anglespeed = 0.5;

  sun = new Sun(250, 400, 150, 150);
  earth = new Earth(250,400,100,100);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  //if(frameCount % 2 === 0)
    angle = anglespeed + angle;
    push();
    translate(290, 250);
    rotate(angle);
    rectMode(CENTER);
    earth.display();
    sun.display();
    pop();
}
