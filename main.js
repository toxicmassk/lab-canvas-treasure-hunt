// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

var numberOfTiles = 10
var TileSize = width / numberOfTiles

// Iteration 1
function drawGrid() {
    context.lineWidth = 3;
    for (let x = 0; x <= width; x += TileSize){
        for (let y = 0; y <= height; y += TileSize){
            context.moveTo(x, 0);
            context.lineTo(x, height);
            context.stroke();
            context.moveTo(0, y);
            context.lineTo(width, y);
            context.stroke();
        }
    }
}

class Character {
    constructor(initialCol,initalRow,imgPaths) {
      this.col = initialCol
      this.row = initalRow
      this.orientation = 'down'
      this.score = 0
    }
    
    moveUp(){
        this.row --
        this.orientation = 'up'
      }
      moveDown(){
        this.row ++
        this.orientation = 'down'
      }
      moveLeft(){
        this.col --
        this.orientation = 'left'
      }
      moveRight(){
        this.col ++
        this.orientation = 'right'
      }
    };
    var player = new Character(0,0,{
        left: 'images/character-left.png',
        up: 'images/character-up.png',
        right: 'images/character-right.png',
        down: 'images/character-down.png',
      });


function drawPlayer () {
   context.drawImage(
    player.imgs[player.orientation],
    player.col * TileSize, player.row * TileSize,
    TileSize,
    TileSize
   ) 
}

function drawEverything() {
  drawGrid(

  );
  // drawPlayer()
  // drawTreasure()
}

drawEverything();