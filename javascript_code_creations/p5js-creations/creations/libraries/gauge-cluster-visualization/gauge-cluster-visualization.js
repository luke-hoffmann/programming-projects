
function drawNums(centerX,centerY, start, amp, array) {
  div = 360/array.length
  for (i= 0; i < array.length; i++) {
    ang = i*-div + 180+ -div;
  x = centerX +amp *Math.sin(ang* PI/180);
  y = centerY +amp *Math.cos(ang * PI/180);
    textSize(15);
    textAlign(CENTER, CENTER)
    
    text(array[i],x,y);
  }

  
}

function drawIncs(centerX,centerY, start, radius,incrementsAmount,spacing) {
  start = start
  for (i= 0; i <= incrementsAmount; i++) {
    ang = (start +(i *spacing))* Math.PI/180
    length = 10;
    x = centerX + (radius) *Math.sin(ang);
    y = centerY + (radius) *Math.cos(ang);
    x2 = centerX + (radius-length) *Math.sin(ang);
    y2 = centerY + (radius-length) *Math.cos(ang);
    line(x,y,x2,y2);
    
    
  }

  
}



function drawCircle( x, y, startAngle, length, radius, direction, res) {
  if (res == undefined) {
    res = 1;
  }
  
  //direction =-1;
  this.x = x;
  this.y = y;
  
  going = true;
  i = startAngle;
  this.count = 0;
  if (direction == 1) {
  
    for (let i =startAngle ; i < startAngle+ length; i++) {
    
    
      angle =  Math.PI/180 * (i);
        
      this.x1 = this.x + (Math.cos(angle)*radius);
      this.y1 = this.y + (Math.sin(angle)*radius);
        
      point(this.x1,this.y1);
      
      
    }
  } else {
    for (let i =startAngle ; i > startAngle- length; i--) {
  
  
    angle =  Math.PI/180 * (i);
      
    this.x1 = this.x + (Math.cos(angle)*radius);
    this.y1 = this.y + (Math.sin(angle)*radius);
      
    point(this.x1,this.y1);
    
    
  }
  }
  
}

function DrawGauge(position,percentage) {
  noStroke();
  fill("#333333");
  radius = 50;
  circle(position.x,position.y,(radius*2)+10);
  fill("#dddddd");
  circle(position.x,position.y,radius*2);
  stroke(0);
  startAngle = 135
  startAngle = startAngle * Math.PI/180;
  angle = ((270*percentage)*Math.PI/180)+startAngle;
  backLeftAngle = angle + (190 * Math.PI/180);
  backRightAngle = angle + (-190 * Math.PI/180);
  frontOfNeedle = createVector(position.x + (Math.cos(angle)*(radius-10)) ,position.y + (Math.sin(angle)*(radius-10)))
  backLeftOfNeedle = createVector(position.x + (Math.cos(backLeftAngle)*(15)) ,position.y + (Math.sin(backLeftAngle)*(15)))
  backRightOfNeedle = createVector(position.x + (Math.cos(backRightAngle)*(15)) ,position.y + (Math.sin(backRightAngle)*(15)))
  line(frontOfNeedle.x,frontOfNeedle.y,backRightOfNeedle.x,backRightOfNeedle.y);
  line(frontOfNeedle.x,frontOfNeedle.y,backLeftOfNeedle.x,backLeftOfNeedle.y);
  line(backRightOfNeedle.x,backRightOfNeedle.y,backLeftOfNeedle.x,backLeftOfNeedle.y);
  circle(position.x,position.y,5);
  drawIncs(position.x,position.y,45,radius-10,27,10)
}
function drawThickCircle( x, y, startAngle, length, radius, width, direction, res) {
  if (res == undefined) {
    res = 1;
  }
  
  //direction =-1;
  this.x = x;
  this.y = y;
  
  going = true;
  i = startAngle;
  this.count = 0;
  
  beginShape();
  if (direction == 1) {
  
    for (let i =startAngle ; i < startAngle+ length; i++) {
    
    
      angle =  Math.PI/180 * (i);
        
      this.x1 = this.x + (Math.cos(angle)*radius);
      this.y1 = this.y + (Math.sin(angle)*radius);
        
      vertex(this.x1,this.y1);
      
      
    }
  } else {
    for (let i =startAngle ; i > startAngle- length; i--) {
  
  
    angle =  Math.PI/180 * (i);
      
    this.x1 = this.x + (Math.cos(angle)*radius);
    this.y1 = this.y + (Math.sin(angle)*radius);
      
    vertex(this.x1,this.y1);
    
    
  }
  }




  if (direction == 1) {
  
    for (let i =startAngle+length ; i > startAngle; i--) {
    
    
      angle =  Math.PI/180 * (i);
        
      this.x1 = this.x + (Math.cos(angle)*(radius+width));
      this.y1 = this.y + (Math.sin(angle)*(radius+width));
        
      vertex(this.x1,this.y1);
      
      
    }
  } else {
    for (let i =startAngle-length ; i < startAngle; i++) {
  
  
    angle =  Math.PI/180 * (i);
      
    this.x1 = this.x + (Math.cos(angle)*(radius+width));
    this.y1 = this.y + (Math.sin(angle)*(radius+width));
      
    vertex(this.x1,this.y1);
    
    
  }
  }
  
  endShape();
}


class DrawSlowlyFilledSquare{
  constructor(position,size,percentage,backFill,barFill){
   this.position = position;
    this.size = size;
    this.backFill = backFill;
    this.barFill = barFill;
    this.drawFromArray = [];
    for (let i = position.y; i < position.y+size; i++) {
      
      for (let j = position.x; j < position.x+size; j++) {
        this.saviour = [j,i]
        
        this.drawFromArray.push(this.saviour)
        //console.log(this.saviour)
      }
    }


  
    this.drawEveryFrame = [];

    for( let i = 0 ; i< size*size*percentage;i++) {
      this.takeFromHere = Math.round(Math.random()*(this.drawFromArray.length-1));
      this.drawEveryFrame.push(this.drawFromArray[this.takeFromHere]);
      this.remove = this.drawFromArray.splice(this.takeFromHere,1)
    }
    console.log(this.drawEveryFrame)
  }

  
  draw() {
    noStroke();
    fill(this.backFill);
    square(this.position.x,this.position.y,this.size);
    fill(255);
    for(let i =0; i < this.drawEveryFrame.length; i++) {
      
      square(this.drawEveryFrame[i][1],this.drawEveryFrame[i][0],1)
    }
    
  }

  
}
function DrawPercentBar(position ,width ,height,percentage,amountOfIncs,backFill,barFill){
  noStroke();
  //percentage is between 0 to 1
  fill(backFill)
  rect(position.x,position.y,width,height);
  fill(barFill)
  rect(position.x,position.y,width*percentage,height);
  stroke(0);
  for (let i =1; i < width/amountOfIncs; i++) {
    line(position.x+ i * width/amountOfIncs,position.y, position.x+ i * width/amountOfIncs, position.y+height);
  }
  
}
let percentage = 1;
let speedBar;
let filledSquare;
function setup(){
  createCanvas(400,400)
  speedBar = createVector(100,90);
  rectangleBar = createVector(200,50);
  filledSquare = new DrawSlowlyFilledSquare(createVector(200,200),40,.99,"#222222","#22dd22")
}

function draw(){
  clear();
  background(0);

  
  
  noStroke();
  fill("#222222")
  drawThickCircle(speedBar.x,speedBar.y,135,270,50,20,1);
  fill("RED")
  drawThickCircle(speedBar.x ,speedBar.y ,135,270*percentage,50,20,1);
  textAlign(CENTER);
  textSize(32);
  stroke(255);
  fill(255);
  text(Math.round(percentage*100),speedBar.x,speedBar.y)
  
  DrawPercentBar(rectangleBar,150,25,percentage,10,"#222222","#22dd22");
  DrawGauge(createVector(100,250),percentage)
  filledSquare.draw();
  incrementAmount = 0.01;
  if (keyIsPressed) {
  if (keyCode === 87) {
    percentage+= incrementAmount;
  } else if (keyCode === 83) {
    percentage-= incrementAmount;
  }
  if (percentage > 1) {
    percentage = 1;
  }
  if (percentage < 0) {
    percentage = 0;
  }
  }
}