
let radarDistance = 100;
let worldZoom = 1;
const radiansToDegrees = 180/Math.PI;

let worldSize = {x:900,y:900};


function badAngleToGoodAngle(x1,y1,x2,y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  
this.angle = Math.atan((this.y1-this.y2)/(this.x1-this.x2)) * 180 / Math.PI;
  
  if (this.x1 < this.x2) {
      if (this.y1 < this.y2) {
        this.angle = this.angle + 180
        
      } else {
        this.angle = 90 + 90-Math.abs(this.angle)
      }
    } else {
      if (this.y1 < this.y2) {
        this.angle = 360 - Math.abs(this.angle);
      } else {
        
        
      }
    }
  return this.angle
}
class obstacle{

  constructor(x,y){
    this.position = createVector(Math.random()*worldSize.x,Math.random()*worldSize.y);
   
  }
  draw(playerPos){
    stroke("black");
    this.difference = p5.Vector.sub(this.position,playerPos);
this.display = p5.Vector.add(this.difference, playerPos.position)//add(createVector(200,200))
    //console.log(this.display)
    //circle(this.display.x,this.display.y,10);
    ///this.display = p5.Vector.sub(this.display,createVector(200,200))
    this.polarCord = {r:Math.sqrt((this.display.x**2)+(this.display.y**2)), theta: badAngleToGoodAngle(this.display.x,this.display.y,0,0)*Math.PI/180 }


    this.polarCord.r = this.polarCord.r* worldZoom;
//console.log(Math.cos(this.polarCord.theta))//* radiansToDegrees)
    this.x = Math.cos(this.polarCord.theta)*this.polarCord.r
    this.y = Math.sin(this.polarCord.theta)*this.polarCord.r
    this.polarCord = createVector(this.x,this.y).add(createVector(200,200))
    //console.log(this.x)
    //line(this.polarCord.x,this.polarCord.y,200,200)
    //this.difference = p5.Vector.sub(this.polarCord,createVector(200,200));
    this.display = this.polarCord
    
    
    circle(this.display.x,this.display.y,10*worldZoom);
  }
}






class character{
  constructor(x,y){
    
    this.position = createVector(x,y);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.radarRadius = 40;
    this.radarInterval = 10;
    this.realWorldRingWidth = 100;
    this.radarIntervalToDistance =   this.radarRadius / this.radarInterval * this.realWorldRingWidth;
    this.target = this.position;
    this.viewDistance = 100;
    this.radarLoc = createVector(50,50);
    this.currentLightLance = false;
    this.selectedLightLanceTarget = createVector();
    this.maxSpeed = 4;
    this.maxForce = 2;
    this.slowingDistance = 50;
    this.radarBlipSize = 5;
  }

  draw(){
    noFill()
    stroke("red")
    //circle(200,200,radarDistance*2*worldZoom)
    //text(this.position.x,100,20);
    //text(this.position.y,100,40);
    this.radarIntervalToDistance = this.radarRadius/this.radarInterval*this.realWorldRingWidth;
    this.everyRingPropIs = this.radarIntervalToDistance/this.radarRadius/this.radarInterval
    this.viewDistance = (this.radarIntervalToDistance);
    noFill();
    stroke("red");
    circle(200,200,30*worldZoom)

    this.acceleration = createVector();
    if (keyIsPressed) {
      if (keyCode == 87) {
        // ww
        this.acceleration.add(createVector(0,-0.1))
      } else
      if (keyCode == 65) {
        // a
        //console.log("a")
        //console.log(this.acceleration)
        this.acceleration.add(createVector(-0.1,0))
        //console.log(this.acceleration)
      } else
      if (keyCode == 83) {
        // s
        this.acceleration.add(createVector(0,0.1))
      }else 
      if (keyCode == 68) {
        // d
        this.acceleration.add(createVector(0.1,0))
      }
    }
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.velocity.mult(0.98);
    this.position.add(this.velocity);
    
   
  }

  radar(obstaclesIn) {
    noStroke();
    fill("#aaaaaa")
    circle(50,50,(this.radarRadius*2) + this.radarBlipSize);
    for (let i=1 ; i <= this.radarRadius/this.radarInterval;i++) {
      stroke(0);
      noFill();
      
      circle(this.radarLoc.x,this.radarLoc.y,i*this.radarInterval*2)
    }
    this.radarDisplay = [];
    for (let i=0; i < obstaclesIn.length;i++) {
      stroke(255);

      this.radarBlip = p5.Vector.sub(obstaclesIn[i].position,(this.position));
      this.radarBlip.div(radarDistance/this.radarRadius);
      this.radarDisplay.push(this.radarBlip.limit(this.radarRadius));
    }
    for (let i =0; i < this.radarDisplay.length; i++) {
      fill("red");
      noStroke()
      circle(this.radarDisplay[i].x + this.radarLoc.x, this.radarDisplay[i].y + this.radarLoc.y, this.radarBlipSize);
    }
  }
  

  lightLance() {
    if(this.currentLightLance) {
      this.locationOfSelectedLightLance = obstacles[this.selectedLightLanceTarget]
      this.locationOfSelectedLightLance = createVector(this.locationOfSelectedLightLance.display.x,this.locationOfSelectedLightLance.display.y)
     stroke(255) 
      line(this.locationOfSelectedLightLance.x ,this.locationOfSelectedLightLance.y,200,200)
    }
  }
}


let player;

let obstacles = [];
let grid = [];


function setup(){
  
  createCanvas(400,400);
  player = new character(200,200);
  for (let i =0; i < 400; i++) {
  b = new obstacle();
  obstacles.push(b);
  }

  
}



function draw(){
  clear();
  background("#f6eee3");
  grid = [];
  for (let i =0;i < worldSize.x/radarDistance; i++){
    a = [];
    for (let j = 0;j < worldSize.y/radarDistance; j++) {
      a.push([])
    }
    grid.push(a)
  }

  for (let i =0; i < obstacles.length; i++) {
    x = Math.floor(obstacles[i].position.x/radarDistance);
    y = Math.floor(obstacles[i].position.y/radarDistance);
    grid[x][y].push(obstacles[i]);

  }
  
  player.draw();
  //player.lightLance();
  
  radarObs = [];
  
  for (let i =0; i < obstacles.length; i ++) {
    obstacles[i].draw(player.position)
    
  }

  playerGrid = createVector(Math.floor((player.position.x/radarDistance)), Math.floor((player.position.y/radarDistance)))

  for (let i = playerGrid.y-1;i < playerGrid.y+2; i++) {
    if (i < 0 ) {
      continue
    }
    if (i >= grid.length) {

      
      continue
    }
    for (let j =playerGrid.x-1; j < playerGrid.x+2; j++) {

      if (j < 0 ) {
        continue
        
      }
      if (j >= grid.length) {
        
        break;
      }
      
      //console.log(i + " " + j);
      for (let k =0; k < grid[j][i].length; k++) {
        
        distance = (((grid[j][i][k].position.y - player.position.y)**2) + ((grid[j][i][k].position.x- player.position.x)**2));
        //console.log(distance)
        if (distance < radarDistance**2) {
          radarObs.push(grid[j][i][k]);
        }
      }
    }
  }
  player.radar(radarObs);
  //noLoop();

  
}


function mouseWheel(event) {
  worldZoom += -(event.delta)/1000;
  //console.log(worldZoom)
  if (worldZoom < .7) {
    worldZoom = .7;
  }

  if (worldZoom > 4.3) {
    worldZoom = 4.3;
  }
  
}


function mousePressed() {
  

  player.target = createVector(mouseX-200+ player.position.x, mouseY- 200+ player.position.y);
}