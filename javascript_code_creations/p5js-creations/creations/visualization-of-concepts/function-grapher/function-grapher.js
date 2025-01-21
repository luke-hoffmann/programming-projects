function setup (){
    createCanvas(600,600);
}


let theta = 0;
let points = [];
let oldPoints =[]
let oldColor = "red";
let newColor = 255;
function draw(){
    clear();
    background(0);  
    r = 5;
    a = 50;
    graphY = 200;
    graphX = 100;
    barWidth = 20;
    y = graphY + (Math.sin(theta)*a);
    x = graphX +(400 * (theta/(Math.PI*2)));
    points.push(new createVector(x,y));
    barWhere = 350;
    horizontalBarLeft = new createVector(0,y-graphY+barWhere);
    horizontalBarRight = new createVector(width, y-graphY+barWhere);

    // top bar
    line(horizontalBarLeft.x,horizontalBarLeft.y, horizontalBarRight.x, horizontalBarRight.y);

    // bottom bar
    line(horizontalBarLeft.x,horizontalBarLeft.y+barWidth, horizontalBarRight.x, horizontalBarRight.y+barWidth);
    
    // vertical bar
    line(x, horizontalBarLeft.y, x, horizontalBarLeft.y-((barWhere-graphY)+(a*2)));
    stroke(255);
    noFill();

    // left angle line
    line(graphX-(a),barWhere,(graphX-(a)) + (Math.cos(theta)*a),barWhere+ (Math.sin(theta)*a))
    circle(graphX-(a),barWhere,a*2);

    // right angle line
    line((graphX +400 + a),barWhere,(graphX +400 + a) + (Math.cos(theta)*a),barWhere+ (Math.sin(theta)*a))
    circle((graphX +400 + a),barWhere,a*2);

    stroke(oldColor);
    fill(oldColor)
    for (let i =0 ; i < oldPoints.length;i++) {
        circle(oldPoints[i].x,oldPoints[i].y,r)
    }
    stroke(newColor);
    fill(newColor)
    for (let i =0 ; i < points.length;i++) {

        circle(points[i].x,points[i].y,r)
    }
    stroke(255);
    fill(255);
    circle(x,y,30)
    theta+= Math.PI/64;
    if (theta >= Math.PI*2) {
        theta = 0;
        oldPoints = points;
        points = []
        temp = oldColor;
        oldColor= newColor;
        newColor = temp;
    }
}