var Ball, database;
var position;
var game,player,form;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var car1, car2, car3, car4;
var cars =[];
var whiteCar,redCar,blueCar,blackCar;
var track,ground;

function preload (){
  whiteCar = loadImage ("images/car1.png");
  redCar = loadImage ("images/car2.png");
  blueCar = loadImage ("images/car3.png");
  blackCar = loadImage ("images/car4.png");
  track = loadImage ("images/track.jpg");
  ground = loadImage ("images/ground.png");
}


function setup(){
  database = firebase.database();
 
  createCanvas(displayWidth -20 ,displayHeight -30);
  game = new Game ();
game.getState ();
game.start();


}

function draw(){
  if (playerCount == 4){
    gameState = 1
    game.update (1);
  }

  if (gameState==1){
    clear ();
    game.play ();
  }

  if (gameState == 2){
    game.end();
  }
}

