
let circleRadius = 3;
let circleAmount = 1000;
let failLimit = 30;
let discs = [];
let fails = 0;
class disc{
  constructor(position,radius,closeDiscs){
    this.position = position;
    this.radius = radius;
    this.discs = closeDiscs;
    if (closeDiscs == undefined);
  }

  draw(){
    fill(255);
    noStroke();
    circle(this.position.x,this.position.y,this.radius*2);
    for (let i =0; i < this.discs.length; i++) {
      stroke(255)
      //line(this.discs[i].position.x, this.discs[i].position.y, this.position.x,this.position.y)
    }
  }
}
function GetGridLocation(position,gridSize) {
  return createVector(Math.floor(position.x/gridSize), Math.floor(position.y/gridSize));
}
function FindItemsNearIndex3DArray(array,gridLocation){
  returnArray = [];
  //console.log(array)
  for (let i = gridLocation.y-1; i < gridLocation.y+1; i++) {
    if (i < 0 ) {
      //console.log(l)
      continue
    }
    if (i >= array.length) {

      continue
      
    }
    for (let j =gridLocation.x-1; j < gridLocation.x+1; j++) {
      if (j < 0 ) {
        //j++
        
        continue
        
      }
      if (j >= array[0].length) {
        
        continue
      }
      
      if (array[i][j] == undefined) {
        continue
      }
      
      //console.log(array[i][j])
      //console.log(i  +" "+ j)
      //console.log(array[i][j].length);
      for (let k = 0; k< array[i][j].length; k++) {
        returnArray.push(array[i][j][k]);
        
      }
    }
  }
  return returnArray;
}
let grid =[];

function setup(){
  createCanvas(400,400);
  for(let i =0; i< height/circleRadius; i++){
    a = [];
    for (let j=0; j < width/circleRadius; j++) {
      a.push([]);
    }
    grid.push(a);
  }
  i = 0;
  while ( i < circleAmount) {
    if (fails > failLimit) {
      return
    }
    //console.log(i)
    position = createVector(Math.random()*width, Math.random()*height);
    gridPosition = GetGridLocation(position,circleRadius)
  
    closeDiscs = FindItemsNearIndex3DArray(grid,gridPosition);
   // console.log(closeDiscs)
    if(closeDiscs.length < 1){
      
      b = new disc(position,circleRadius, []);
      discs.push(b);
      grid[gridPosition.y][gridPosition.x].push(b)
    } else {
      farCount = 0;
      for (let j =0; j < closeDiscs.length; j++) {
        
        distanceAway = closeDiscs[j].position.dist(position);
       
        if (distanceAway < circleRadius) {farCount++; fails++;}
      
        
      }
      if (farCount == 0) {
        b = new disc(position,circleRadius,closeDiscs);
        discs.push(b);
        grid[gridPosition.y][gridPosition.x].push(b)
      } else {
        i--;
      }
    }
    i++;
  }

  
}


function draw(){
  clear();
  background(0);
  stroke(255)
 for (let i =0 ; i< width/circleRadius; i++) {
   line(i*circleRadius,0,i*circleRadius,400);
 }
  for (let i =0 ; i< height/circleRadius; i++) {
   line(0,i*circleRadius,400,i*circleRadius);
 }
  for (let i =0 ; i < discs.length; i++) {
    discs[i].draw();

    
  }
}