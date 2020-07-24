var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);

  //thickness
  thickness = random(22,83);

  //speed and weight
  speed = random(223,321);
  weight = random(30,52);

  //bullet and wall
  bullet = createSprite(50,200,30,20);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);

  //bullet speed
  bullet.velocityX = speed;

  //collision
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage <= 10){
      bullet.shapeColor = color('green');
    }

    if(damage > 10){
      bullet.shapeColor = color('red');
    }

  }

  //factors in text
  textSize(16);
  fill('white');
  textFont('Georgia');

  text("Speed (bullet): "+ speed, 10, 30);
  text("Weight (bullet):"+ weight,10,60);
  text("Thickness (wall):"+ thickness,10,90);
  
  let d = damage; 
  if(d> 10){
    fill('red');
    text("Wall is not effective",10,120);
  }

  if(d<=10){
    fill('green');
    text("Wall is effective",10,120);
  }

  drawSprites();

}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }

  else{
    return false;
  }

}