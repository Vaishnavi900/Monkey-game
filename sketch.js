var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground
var gameState = "Play"
var ST = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600);
  
monkey = createSprite(80,400,20,20)
monkey.addAnimation("running",monkey_running)
monkey.scale = 0.2

ground = createSprite(300,470,1500,5)
ground.velocityX = -5

bananaGroup = new Group();
obstacleGroup = new Group();


}


function draw() {
background("white");
textSize(30)
text("Survival Time = "+ST,150,100)
ST = ST+ Math.round(frameCount / 60)
if(gameState == "Play"){
if(ground.x < 0){
ground.x = ground.width / 2
}

console.log(monkey.y)

if(keyDown("space") && monkey.y > 300) {
monkey.velocityY = -10
}

spawnObstacle();
spawnBanana();

monkey.velocityY  = monkey.velocityY + 0.8
monkey.collide(ground)
  
}
if(gameState == "End"){
  
}  
  

 drawSprites()
}

function spawnBanana() {
  if (frameCount % 120 === 0) {
    var banana = createSprite(600,300,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    banana.lifetime = 400;
    
    bananaGroup.add(banana);
  }
  
}


function spawnObstacle() {
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(600,435,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
    
    obstacle.lifetime = 400;
    
    obstacleGroup.add(obstacle);
  }
  
}

