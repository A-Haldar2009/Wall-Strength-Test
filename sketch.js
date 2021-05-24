var bullet,wall;
var speed,weight,thickness;

function preload(){
  Bullet=loadImage("Yellow Bullet2.png")
  Wall=loadImage("wall2.png")
  BrokenWall=loadImage("broken wall(png).png")
  
}

function setup() {
  createCanvas(1600,400);
 
   wall=createSprite(1200,200,thickness, height/2);
 wall.addImage(Wall)
  

 bullet=createSprite(20,200,40,10);
  bullet.addImage(Bullet)
 speed=random(223,321)
weight=random(30,52)
 thickness=random(22,83)

bullet.velocityX=speed;



 
  
  
  
  
 
}



function draw() {
  background("cyan");  
  drawSprites();
  
  
  
  if(hasCollided(bullet,wall)) {
   
   bullet.velocityX=0
    
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
   
   if(damage>10){
     wall.addImage(Wall)
   }
    
    if(damage<10){
      wall.addImage(BrokenWall)
    }
   
 }
  
  wall.debug=true
  bullet.debug=true
  bullet.setCollider("rectangle",0,0)
  




}

function hasCollided(lbullet, lwall){
  
var  bulletRightEdge=lbullet.x+lbullet.width;
var  wallLeftEdge=lwall.x;
  
  if(bulletRightEdge>=wallLeftEdge){
    
    return true
  }
  
  return false
  
}











