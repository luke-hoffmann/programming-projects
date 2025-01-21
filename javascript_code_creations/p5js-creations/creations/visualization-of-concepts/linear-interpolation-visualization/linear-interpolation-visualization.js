

function Lerper (x1,y1,x2,y2,t) {


  x = (1 - t) * x1 + t * x2;
  y = (1 - t) * y1 + t * y2;
  return {x:x,y:y};
}

function QuadLerp(p1,p2,p3,p4,t) {

  x1 = p1.x;
  y1 = p1.y;
  x2 = p2.x;
  y2 = p2.y;
  x3 = p3.x;
  y3 = p3.y;
  x4 = p4.x;
  y4 = p4.y;
  stroke(255);
  b = Lerper(x1,y1,x2,y2,t);
  c = Lerper(x2,y2,x3,y3,t);
  line(b.x,b.y,c.x,c.y);
  a = Lerper(b.x,b.y,c.x,c.y,t);
    
  b = Lerper(x2,y2,x3,y3,t);
  c = Lerper(x3,y3,x4,y4,t);
  line(b.x,b.y,c.x,c.y);
  d = Lerper(b.x,b.y,c.x,c.y,t);
  e = Lerper(a.x,a.y,d.x,d.y,t);
  line(d.x,d.y,e.x,e.y);
  return e
}

function MakeBezierBetweenTwo(p1,p2,iterations){

  for (let i =0;i < iterations;i++) {
    pointer1 = Lerper(p1.x,p1.y,p1.x,p2.y,i/iterations);
    pointer2 = Lerper(p1.x,p2.y,p2.x,p2.y,i/iterations);
    
    line(pointer1.x,pointer1.y,pointer2.x,pointer2.y)
    pointer3 = Lerper(pointer1.x ,pointer1.y,pointer2.x ,pointer2.y,i/iterations);
    fill(255);
    stroke(255);
    circle(pointer3.x,pointer3.y,2);
    
  }
}
function setup(){
  createCanvas(400,400);
}
let p1 = {x:0,y:200};
let p2 = {x:200,y:15};
let p3 = {x:200,y:405};
let p4 = {x:400,y:200};
function draw(){
  clear();
  background(0);
  //MakeBezierBetweenTwo(p1,p2);
  iterations = 100;
  for (let i =0;i < iterations;i++) {
    pointer = QuadLerp(p1,p2,p3,p4,i/iterations);
    stroke(255);
    fill(255);
    circle(pointer.x,pointer.y,1);
  }
  
  

  
}