var FR,MR;


function setup() {
  createCanvas(800,400);
  MR=createSprite(400, 200, 30, 50);
  FR=createSprite(200,200,30,50);
  MR.shapeColor="green";
  FR.shapeColor="green";
  MR.debug=true;
  FR.debug=true;
}

function draw() {
  background(255,255,255);  
 MR.x=World.mouseX;
 MR.y=World.mouseY;
 
  if (MR.x-FR.x<FR.width/2+MR.width/2&&
   FR.x-MR.x<FR.width/2+MR.width/2&&
   MR.y-FR.y<FR.height/2+MR.height/2&&
   FR.y-MR.y<FR.height/2+MR.height/2){
  MR.shapeColor="red"; 
  FR.shapeColor="red";
  
  }
  else{
    MR.shapeColor="green";
    FR.shapeColor="green";

  
  }
  drawSprites();
}
