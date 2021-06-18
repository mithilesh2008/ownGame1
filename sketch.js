
var girl , girl_running
var fly ,flyImage,obstacle, obstacleImage
var flyGroup, obstacleGroup
var score = 0;
var Ground ,invisible;

function preload(){
  
  
  girl_running = loadAnimation("girl.png")
  
  flyImage = loadImage("fly.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  PLAY=1;
  GameState=PLAY;
  END=0;
  
  flyGroup=new Group();
  obstacleGroup=new Group ();
  
  girl = createSprite(70,400,50,50);
  girl.addAnimation("girl",girl_running);
  girl.scale=0.4;
  
  Ground=createSprite(250,400,1000,10);
  Ground.x=Ground.width/2;
  Ground.velocityX=-2;
  invisible=createSprite(250,407,1000,10)
  invisible.x=Ground.width/2;
}


function draw() {
background("lightgreen")
  
  if(GameState===PLAY){
    Food();
  Obstacle();
    Ground.velocityX=-2;
  if (Ground.x<0){
    Ground.x=Ground.width/2;
  }
    if (invisible.x<0){
      invisible.x=invisible.width/2;
    }
    
    
  if(keyDown("space")&&girl.isTouching(Ground)) {
    girl.velocityY = -20;
  }
   
    score=Math.round(frameCount/3);
    survivalTime=Math.ceil(frameCount/frameRate());
    Ground.velocityX=-(5+2*score/100);
                      
     if(flyGroup.isTouching(girl)){
      flyGroup.destroyEach();
     }                 
                      
                       
    if(obstacleGroup.isTouching(girl)) {
      GameState=END;
    }                 
  }                    
   
  else if (GameState === END){
    Ground.velocityX = 0;
    invisible.velocityX = 0;
    obstacleGroup.setVelocityXEach(0);
    flyGroup.setVelocityXEach(0);
    flyGroup.setLifetimeEach(1);
    obstacleGroup.setLifetimeEach(1);
    
  }
  girl.velocityY = girl.velocityY+0.9;                  
  girl.collide(invisible);                  
      
  textSize(20);
  text("score;"+score,400,50);
  
    textSize(20);
    text("time taken;"+survivalTime,100,50);
      drawSprites();
}       

                      
 function Food(){
   if(frameCount%80===0){
     var fly=createSprite(400,200,10,20);
     fly.addImage("fly",flyImage);
     fly.velocityX=-(5+2*score/100);
     fly.y=Math.round(random(120,200));
     fly.scale=0.1;
     flyGroup.add(fly);
     flyGroup.setLifetimeEach(100);
   }
 }                     
                      
                      
  function Obstacle(){
   if(frameCount%200===0){
     var obstacle=createSprite(500,375,23,32);
      obstacle.addImage("obstacle",obstacleImage);
    obstacle.velocityX=-(5 + 2 * score /100);
     
     obstacle.scale=0.1;
  obstacleGroup.add(obstacle);
obstacleGroup.setLifetimeEach(100);
   }
 }                                         
                      
                      
                                                                            
    
    
    
    
    
  







