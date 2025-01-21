class star {
  constructor(x, y, width, height, type) {
    this.x = x;
    this.y = y
    this.angle = random(1, 360);
    this.color = random(20,60)
    if (type == 2) {
      this.angle = 200;
      this.y = random(1,height)
      this.x = random(1,width)
      this.color = 255;
    }
    this.distance2 = (width+height)/2
    this.distance = random(1, this.distance2)

    this.width = width;
    this.height = height;
    this.type = type;
    this.rand = random(1, 6)
    this.randY = random(1, 6)

    if (type == undefined) {
      this.type = 1;
    }
  }

  draw() {
    
    if (this.type == 1) {
      this.angle += .0003;
      this.x = cos(this.angle) * this.distance;
      this.y = sin(this.angle) * this.distance
      stroke(this.color);
      circle(this.x + this.width / 2, this.y + this.height / 2, 1);
    }
    if (this.type == 2) {

      this.x += this.rand / 10
      this.y += this.randY / 10

      this.x2 = this.x - this.rand 
      this.y2 = this.y - this.randY 

      line(this.x2,this.y2,this.x,this.y);

      fill(50);
      stroke(50);
      line(this.x2-this.rand,this.y2-this.randY,this.x,this.y);

      circle(this.x, this.y, 1);
      if (this.x > this.width) {
        //console.log(this.x)
        this.x = 0;
        //console.log(this.x)
      }
      if (this.y > this.height) {
        //console.log(this.y)
        this.y = 0;
      }
    }

  }

}