
class mass {
  constructor(x, y, mass, xV, yV,type) {
    this.x = x;
    this.y = y;
    this.mass = mass;
    this.xVelocity = xV;
    this.yVelocity = yV;
    this.lineArray = [];
    this.clicker = true;
    this.type = type;
    this.changecir = 0;
    this.timer = 0;
    
  }

  draw() {
    stroke(255);
    
    textAlign(CENTER, CENTER);
    fill(255)
    //textSize(this.mass/2);
    if (this.lineArray.length > 60) {
      this.lineArray.splice(0, 1)
    }
    this.b = { x: this.x, y: this.y }
    this.opa = -10;
    this.opa2 = 0;
    this.divO = 255 / this.lineArray.length
    this.div2 = this.mass / this.lineArray.length
    if (this.type == 1){

    for (this.i = 0; this.i < this.lineArray.length; this.i++) {
      stroke(this.opa/2,this.opa - this.opa/6,this.opa+20)
      circle(this.lineArray[this.i].x, this.lineArray[this.i].y, this.opa2)
      this.opa += this.divO
      this.opa2 += this.div2/3;
    }
    }
    
    if (this.type == 2) {
      fill(86,186,173)
      
    }
    
    noStroke();
    circle(this.x, this.y, this.mass/3 + this.changecir);
   
    
    this.lineArray.push(this.b)
    //console.log(1);
    //text(this.mass,this.x,this.y);
    

    this.timer += .25;
  }
  grav(angle2, force, m2, p2,dis) {
    //angle = angle * 180/PI
    //text(angle,30,200);
    this.baryCenter = dis/(1 + (this.mass/m2));
    acceleration = ((GRAVITY * this.mass * m2) / (dis * dis))
    force = acceleration*m2/1.1
    //text(force, 300,200)
    xChange = (p2.x - this.x);
    yChange = (p2.y - this.y);

    angle = Math.atan((xChange) / (yChange));
    angle = angle * 180 / PI
    //text(angle, 30, 80)
    //text(angle,10, 10)
    if (masses[1].x < masses[0].x) {
      //angle = (angle + -180 * PI)
    }


    if ((this.x > p2.x) && this.y > p2.y) {
      angle = angle - 180
    }
    if (p2.y == this.y) {
      angle = (angle + 180)
    }
    if ((this.x < p2.x) && (this.y < p2.y)) {
      angle = angle - 360
    }
    if ((this.x < p2.x) && (this.y > p2.y)) {
      angle = angle -180
    }
    angle = angle * PI / 180;
    //text(angle*180/PI,30,30)
    this.xCh = (Math.sin(angle) * force);
    this.yCh = (Math.cos(angle) * force);
    this.xVelocity += this.xCh;
    this.yVelocity += this.yCh;
    
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    //line(this.x,this.y, this.xCh,this.yCh);
  }
}