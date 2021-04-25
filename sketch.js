const Body = Matter.Body;

const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;


var bg = "snow2.jpg";
var human1, human1hat, human1hattop;
var snowflake;
var snowflakes = [];

function preload() {
  bgImg = loadImage(bg);
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  human1 = createSprite(200, 300, 50, 70);
  human1.shapeColor = "red";

  human1hat = createSprite(200, human1.y - 31, 100, 15);
  human1hat.shapeColor = "blue";

  human1hattop = createSprite(200, human1hat.y - 25, 40, 35);
  human1hattop.shapeColor = "green";

  snowflake = new Snowflake(300,100, {isStatic: false});
  console.log(snowflake)


}

function draw() {
  background(bgImg);  

  //if (frameCount%30 === 0) {
    //snowflakes.push(new Snowflake(random((1,300)), random((1,300))));
  //}

  //for (var i = 0; i < snowflakes.length; i++) {
    //snowflakes[i].display();
  //} 


  snowflake.display();
  drawSprites();
  
}