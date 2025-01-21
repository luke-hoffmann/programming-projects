let date = new Date();
let minutes = date.getMinutes();
let hours = date.getHours();
let seconds = date.getSeconds();
if (hours > 12) {
hours = hours - 12;
}

function setup() {
  createCanvas(400,400);
}

let minutesList = [];

for (i = 1; i <= 12;i++) {
  //if (i % 15 ==0) {
  minutesList.push(i);
  //}
}

function draw() {
  clear();
  background(0);
  noFill();
  stroke(255);
  start = -75;
  end = 0;
  secondsAngle = 180 + -seconds * 6;
  minutesAngle = 180 + -minutes * 6;
  hoursAngle = 180 + ((-hours )  * 30);
  text(seconds, 20,20)
  text(hoursAngle, 20,40)
  fill(167, 91, 222);
  stroke(1);
  //arc(200,200,100,100,start* PI/180, end * PI/180, PIE);
  stroke(255);
  noFill();
  circle(200,200, 200);
  
  secondsAmp = 90;
  minutesAmp = 60;
  hoursAmp = 30;
  secondsX = secondsAmp *Math.sin(secondsAngle* PI/180);
  secondsY = secondsAmp *Math.cos(secondsAngle * PI/180);
  
  minutesX = minutesAmp *Math.sin(minutesAngle* PI/180);
  minutesY = minutesAmp *Math.cos(minutesAngle * PI/180);
  
  hoursX = hoursAmp *Math.sin(hoursAngle* PI/180);
  hoursY = hoursAmp *Math.cos(hoursAngle * PI/180);
  line(200,200,hoursX+200,hoursY+200);
  line(200,200,minutesX+200,minutesY+200);
  line(200,200,secondsX+200,secondsY+200);

  drawNums(200,200, 0,110, minutesList)
  drawIncs(200,200, 0,105)


  
}
function setTime() {
  date = new Date();
  minutes = date.getMinutes();
  hours = date.getHours();
  seconds = date.getSeconds();
}

setInterval(setTime, 300000)
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

function drawIncs(centerX,centerY, start, amp) {
  div = 360/60
  for (i= 0; i < 60; i++) {
    ang = i*-div + 180+ -div;
    length = 10
    x = centerX + (amp) *Math.sin(ang* PI/180);
    y = centerY + (amp) *Math.cos(ang * PI/180);
    x2 = centerX + (amp-length) *Math.sin(ang* PI/180);
    y2 = centerY + (amp-length) *Math.cos(ang * PI/180);
    line(x,y,x2,y2);
    
    
  }

  
}
function addTime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0
    minutes++
    
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  if (hours > 12) {
    hours = 1;
  }
}
setInterval(addTime, 1000);