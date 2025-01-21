let points=new Field();
let sizeOfSlice=400;
let planes = undefined;
let redPoints = [];
function setup(){
    createCanvas(800,600);
    /*
    for (let i =0 ; i < 100;i++) {
        
        points.push([Math.floor(Math.random()*sizeOfSlice)-(sizeOfSlice/2),Math.floor(Math.random()*sizeOfSlice)+100,Math.floor(Math.random()*sizeOfSlice)]);
    }
    */
    /*
    for (let i =0 ; i < 100;i++) {
        
        thetaXY = Math.random() * Math.PI*2
        thetaZ = Math.random()* Math.PI*2;
        //points.push([Math.cos(thetaXY)*mag,Math.sin(thetaXY)*mag,Math.sin(thetaZ)*mag]);
        //points.push([Math.cos(thetaXY)*Math.sqrt(mag),Math.sin(thetaXY)*Math.sqrt(mag),Math.sin(thetaZ)*Math.sqrt(mag)]);

        points.array.push(Field.SpherePoint(200));
    }
    */
    /*
    temp = [
        new Vector(50,50,50),
        new Vector(-50,-50,-50),
        new Vector(-50,50,50),
        new Vector(50,-50,-50),
        new Vector(50,-50,50),
        new Vector(-50,50,-50),
        new Vector(-50,-50,50),
        new Vector(50,50,-50)
    ]
    points.array = temp;
    */
    
    temp = [
        new Vector(0,100,0),
        new Vector(0,100,100),
        new Vector(0,150,0),
        new Vector(0,0,100),
        new Vector(100,100,100)
    ]
        
    points.array = temp;

    planes = (Field.QuickHull(points));

    console.log(planes)
    old = planes[1]
    planes = planes[0];
}
function BoundFace(index){
    if (index>2){
        return index-2-1;
    }
    return index;
}


function generateRandomColors(array,n){
    for (let i =0; i < n; i++) { 
        array.push("rgb(" + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + ")");
    }
    return array;
}
let colors = ["red","blue","green"];
colors = generateRandomColors(colors,10000)
function getPointsFromPlane(plane) {

    graphList = Plane.graph(plane);
    
    return graphList;
}


function draw(){
    function graphLine(l,color){
        stroke(color);
        fill(color);
        line(l.p1.x,l.p1.y,l.p2.x,l.p2.y);
    }
    
    function graphPlane(plane,color){
        let linesToBeGraphed = Plane.returnPlaneCreatedByLines(plane);
        for (let i =0; i < linesToBeGraphed.length;i++) {
            graphLine(linesToBeGraphed[i],color);
        }
    }
    function graphPlanes(planes,color){
    
        for(let i =0;i<planes.length;i++){
            normalLineOfPlane = Plane.calculateNormalLineFromPlane(planes[i],20);
            graphLine(normalLineOfPlane,color)
            
            graphPlane(planes[i],color)
    
            
        }
    }

    clear();
    background(0);
    translate(width/2,height/2);
    
    
    graphPlanes(old,"white")
    graphPlanes(planes,"red");
    
    /*
    for(let i =0;i<redPoints.length;i++){
        fill("red");
        stroke("red");
        
        graph = Vector.rotateAroundX(redPoints[i],t);
        graph = Vector.rotateAroundY(graph,t);
        circle(graph.x,graph.y,2);

        
    }
    */
    Field.graphField(points,4,"white");
    
    

        
    rotateAmount = 0.01;
    planes = Plane.rotatePlanes(planes,rotateAmount,rotateAmount,0);
    old= Plane.rotatePlanes(old,rotateAmount,rotateAmount,0);
    points= Field.rotateFieldOfPoints(points,rotateAmount,rotateAmount,0);

}

function keyPressed(){
    
    noLoop();
    
}
