var car , wall;
var speed , weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed=random(55 , 90);
  weight=random(400 , 1500);

  car = createSprite(50 , 200 , 50 , 50);
  car.velocityX = speed;

  wall = createSprite( 1200 , 150 , 60 , 200);
}

function draw() {
  background("blue");  

  deformation();

  
  drawSprites();
}



function deformation(){
  if(wall.x - car.x < (car.width + wall.width/2)){

    car.velocityX = 0;
    var deformations = 0.5 * weight * speed * speed/22500;

    if(deformations > 180){
      car.shapeColor =color(255 , 0 , 0);
    }

    if(deformations< 180 && deformations > 100){
      car.shapeColor = color(230 , 230 , 0);
    }

    if(deformations < 100){
      car.shapeColor = color(0 , 255 , 0);
    }



  }
}