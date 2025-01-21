class player{
    constructor(pos){
        this.pos = pos;
        this.vel = new createVector(0,0);
        this.acc = new createVector(0,0);
        this.maxSpeed = 1;
        this.rad = 20;
        this.margin = 40;
        this.turnForce = 1.5;
        this.randomForce = 0.3
        this.trail = [];
        this.trailLength = 0;
        this.ticker = 1;
    }
    update(){
        this.ticker++;
        if (this.pos.x > width-this.margin) this.vel.x -= this.turnForce + this.randomForce*Math.random();
        if (this.pos.y > height-this.margin) this.vel.y -= this.turnForce + this.randomForce*Math.random();
        if (this.pos.x < 0+this.margin) this.vel.x += this.turnForce + this.randomForce*Math.random();
        if (this.pos.y < 0+this.margin) this.vel.y += this.turnForce+ this.randomForce*Math.random();
        if (this.vel.mag() > this.maxSpeed) {
            this.vel.normalize().mult(this.maxSpeed);
        }
        this.pos.add(p5.Vector.div(this.vel,1));
        stroke(0);
        noFill();
        circle(this.pos.x,this.pos.y,this.rad);
        this.liner = p5.Vector.mult(p5.Vector.normalize(this.vel),this.rad);
        for (this.i=0 ;this.i < this.trail.length;this.i++) {
            if (this.i > 0) {
                line (this.trail[this.i].x,this.trail[this.i].y,this.trail[this.i-1].x,this.trail[this.i-1].y)
            }
            circle (this.trail[this.i].x,this.trail[this.i].y,0.5);
        }
        if (this.trail.length>0) {
            line(this.trail[this.trail.length-1].x,this.trail[this.trail.length-1].y,this.pos.x,this.pos.y)
        }
        if (this.ticker % 50 == 0 ) this.trail.push(new createVector(this.pos.x,this.pos.y));
        if (this.trail.length > this.trailLength) {
            this.trail.splice(0,2);
        }
        line(this.pos.x,this.pos.y,this.pos.x + this.liner.x,this.pos.y + this.liner.y)
        this.vel.mult(0.998);
        if (this.vel.mag() > this.maxSpeed) {
            this.vel.normalize().mult(10);
        }
        return this.vel;
    }
    alignment(avg){
        this.averageVelocity = avg.mult(10)//new createVector(this.vel.x+ ((Math.random()*2)-1), this.vel.y + ((Math.random())*2)-1);
        this.difference = p5.Vector.sub(this.vel,this.averageVelocity);
        this.difference.normalize().div(1.2);
        this.vel.add(this.difference);
    }
    cohesion(avg) {
        this.vel.add(avg.sub(this.pos).normalize().div(50));
    }
    movePointer(pointer){
        this.vel.add((pointer.sub(this.pos)).normalize().mult(1));
    }
}
let plays = [];
function setup(){
    createCanvas(1400,650);
    for (let i =0 ; i < 150;i++) {
    plays.push(new player(new createVector(Math.random()*width,Math.random()*height)));
    }
}

function draw(){
    clear();
    background("#f6eee3");
    
    for (let i =0; i< plays.length;i++) {
        plays[i].update();
        avgVel = new createVector(0,0);
        avoidance = new createVector(0,0);
        avgPos = new createVector(0,0);
        count=0;
        for ( let j =0; j < plays.length;j++)  {
            if (j ==i)continue;

            distance = plays[i].pos.dist(plays[j].pos);
            if (distance <30) {
                avgVel.add(p5.Vector.mult(plays[j].vel,-1));
                
            
            
                avoidance.add(p5.Vector.sub(plays[i].pos,plays[j].pos));
            
            
                avgPos.add(plays[j].pos);
                count++;
            }
            
        }
        avgVel.div(plays.length-1);
        if (count == 0) continue;
        plays[i].vel.add(avoidance.div(count).normalize().div(10));
        plays[i].alignment(avgVel.div(count));
        plays[i].cohesion(avgPos.div(count));

    }
    
    

}

function keyPressed(){
    if (keyCode == 32) {
        for (let i =0; i< plays.length;i++) {
            plays[i].movePointer(new createVector(mouseX,mouseY));
        }
       
    }
}