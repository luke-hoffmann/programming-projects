class spaceStation {
  constructor (amp,x,y,rate,size,color ) {
    this.color = color;
    this.size = size;
    this.x = x;
    this.y = y;
    this.amplitude = amp;
    this.angle = random(1,5);
    if (rate != null) {
      this.rate = rate;
    } else {this.rate = 0.01;}
    
    
  }

  draw(x,y,amp,height) {
    this.amplitude = amp + height;
    this.x = x + sin(this.angle) *this.amplitude;
    this.y = y + cos(this.angle) *this.amplitude;
    //fill(this.color.r,this.color.g,this.color.b);
    circle(this.x,this.y,3.5);
    this.hyp = Math.sqrt(16 + (this.amplitude *this.amplitude))
    this.newAng = this.angle + Math.atan(4/this.amplitude)
    this.x = x + Math.sin(this.newAng) * this.hyp
    //text(Math.atan(4/this.amplitude) * 180/PI, 100,100)
    this.y = y + Math.cos(this.newAng) * this.hyp
    circle(this.x,this.y,2);
    
    this.newAng = this.angle - Math.atan(4/this.amplitude)
    this.x = x + Math.sin(this.newAng) * this.hyp
    //text(Math.atan(4/this.amplitude) * 180/PI, 100,100)
    this.y = y + Math.cos(this.newAng) * this.hyp
    circle(this.x,this.y,2);
    
  }
  iterate (rate) {
    
    if(rate == null) {
      this.angle += this.rate
    } else {
      if (rate > 10) {
        rate = 10;
      }
      this.angle += Math.abs(20-rate)/500;}
      
  }
}