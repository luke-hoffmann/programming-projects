class boid{
    constructor(x,y){
        this.pos = new createVector(x,y);
        this.vel = p5.Vector.random2D();
        this.acc = new createVector(0,0);
        this.dir = this.vel.normalize();
        this.lengthOfArrow = 3;
    }
    nearby (grid){
        
        this.where = new createVector(Math.floor(this.pos.x/grid[0][2]),Math.floor(this.pos.y/grid[0][2]));
        this.possibleNearby = [];
        this.near = [];
        this.boxesToCheck = [new createVector(-1,-1),new createVector(0,-1),new createVector(1,-1),new createVector(-1,0),new createVector(0,0),new createVector(1,0),new createVector(-1,1),new createVector(0,1),new createVector(1,1)];
        for (this.i =0 ; this.i < this.boxesToCheck.length;this.i++) {
            this.place = normalizeToArray(this.boxesToCheck[this.i],new createVector(grid[0][0]/grid[0][2],grid[0][1]/grid[0][2]));
            this.temp = grid[1][this.place.y][this.place.x];
            
            for (this.j =0; this.j < this.temp.length; this.j++) {
                this.possibleNearby.push(this.temp[this.j]);
            }
        }
        
        for (this.i = 0; this.i< this.possibleNearby.length; this.i++) {
            if (this.pos.dist(this.possibleNearby[this.i].pos) <= grid[0][2]){
               this.near.push(this.possibleNearby[this.i]); 
            }
        }
        return this.near;
    }
    averagePosition(array){
        this.averagePos = new createVector(0,0);
        
        for (this.i =0; this.i < array.length;this.i++) {
            this.averagePos.add(array[this.i].pos);
        }
        return this.averagePos.div(array.length);
    }
    seperation(){

    }
    alignment(grid){
        this.close = this.nearby(grid);

    }
    cohesion(grid) {
        this.close = this.nearby(grid);
        if (this.close.length ==0) {return false;}
        this.avg = this.averagePosition(this.close);

        this.difference = (this.pos.sub(this.avg)).normalize();
        this.acc.add(this.difference);
    }
    step(){
        this.pos.add(this.vel);
        this.dir = this.vel.normalize();
    }
    graph(){
        stroke(0);
        noFill();
        circle(this.pos.x,this.pos.y,5);
        line(this.pos.x,this.pos.y,this.pos.x+ (this.dir.mult(this.lengthOfArrow)).x,this.pos.y+ (this.dir.mult(this.lengthOfArrow)).y);
    }
}

function normalizeToArray(place,max) {
    if (place.x < 0) place.x=0;
    if (place.y  <0) place.y =0;
    if (place.x >= max.x) place.x=max.x-1;
    if (place.y>= max.y) place.y=max.y-1;
    return place;
}
function gridStorage(elements,W,H,S){
    output =[[W,H,S],[]];

    for (let i=0; i < H/S;i++) {
        output[1].push([]);
        for (let j =0 ;j< W/S;j++) {
            output[1][i].push([]);
            
        }
    }
    
    for (let i= 0; i < elements.length;i++) {
        tempLow = new createVector(Math.floor(elements[i].pos.x/S),Math.floor(elements[i].pos.y/S));
    
        output[1][tempLow.y][tempLow.x].push(elements[i]);
        elements.splice(i,1);
    }
    return output;
}

let boids = [];
function setup(){
    createCanvas(600,600);
    for (let i =0 ; i <5000; i++) {
 
        boids.push(new boid(Math.random()*width,Math.random()*height));
    }
}
function draw(){
    clear();
    background(250);
    grid = gridStorage(boids,width,height,10);

    for (let i =0 ; i < boids.length;i++) boids[i].graph();
    for (let i =0 ; i < boids.length;i++) boids[i].step();
    for (let i =0 ; i < boids.length;i++) boids[i].cohesion(grid);
    
    //noLoop();

}


function keyPressed(){
    if (keyCode == ESCAPE) {
        noLoop();
    }
}