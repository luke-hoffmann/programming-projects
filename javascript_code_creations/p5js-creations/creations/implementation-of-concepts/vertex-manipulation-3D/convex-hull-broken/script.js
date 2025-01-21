let points=new Field();
let sizeOfSlice=400;
let planes = undefined;
let redPoints = [];
function setup(){
    createCanvas(1350,600);
    /*
    for (let i =0 ; i < 100;i++) {
        
        points.push([Math.floor(Math.random()*sizeOfSlice)-(sizeOfSlice/2),Math.floor(Math.random()*sizeOfSlice)+100,Math.floor(Math.random()*sizeOfSlice)]);
    }
    */
    
    for (let i =0 ; i < 100;i++) {
        
        thetaXY = Math.random() * Math.PI*2
        thetaZ = Math.random()* Math.PI*2;
        //points.push([Math.cos(thetaXY)*mag,Math.sin(thetaXY)*mag,Math.sin(thetaZ)*mag]);
        //points.push([Math.cos(thetaXY)*Math.sqrt(mag),Math.sin(thetaXY)*Math.sqrt(mag),Math.sin(thetaZ)*Math.sqrt(mag)]);

        points.array.push(Field.SpherePoint(200));
    }
        
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
    planes = (Field.QuickHull(points));
    console.log(planes)
}
function BoundFace(index){
    if (index>2){
        return index-2-1;
    }
    return index;
}
let increaseTime= true; 
let t =0.4;
function generateRandomColors(array,n){
    for (let i =0; i < n; i++) { 
        array.push("rgb(" + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + ")");
    }
    return array;
}
let colors = ["red","blue","green"];
colors = generateRandomColors(colors,10000)
console.log(colors)
function getPointsFromPlane(plane) {

    graphList = Plane.graph(plane);
    
    return graphList;
}

function draw(){
    clear();
    background(0);
    translate(width/2,height/2);
    
    
    
    
    /*
    for(let i =0;i<redPoints.length;i++){
        fill("red");
        stroke("red");
        
        graph = Vector.rotateAroundX(redPoints[i],t);
        graph = Vector.rotateAroundY(graph,t);
        circle(graph.x,graph.y,2);

        
    }
    */
    for(let i =0;i<planes.length;i++){
        
        stroke(255);
        fill(255)
        stroke(colors[i]);
        fill(colors[i])
        /*
        cent = Plane.computeCenter(planes[i]);
        norm = Plane.normalPlane(planes[i]);
        norm = Vector.scalarMult(norm,20);
        norm = Vector.add(cent,norm);

        graph = Vector.rotateAroundX(cent,t);
        graph = Vector.rotateAroundY(graph,t);

        graph1 = Vector.rotateAroundX(norm,t);
        graph1 = Vector.rotateAroundY(graph1,t);
        
        line(graph.x,graph.y,graph1.x,graph1.y);
        */
        planePoints = getPointsFromPlane(planes[i])

        last = undefined
        first = undefined
        
        for(let j =0;j<planePoints.length;j++){
            
            graph = Vector.rotateAroundX(planePoints[j],t);
            graph = Vector.rotateAroundY(graph,t);
            


            if (j==0) {
                first = graph;
            }

            circle(graph.x,graph.y,10);
            

            
            if (j >0) {
                line(last.x,last.y,graph.x,graph.y);
                
            }
            if (j == planePoints.length-1) {
                stroke("white")
                line(first.x,first.y,graph.x,graph.y);
                continue;
            }
            last = graph;
        }

        
    }
    for(let i =0;i<points.array.length;i++){
        stroke(255);
        fill(255)
        /*
        for (let j = 0; j < planes.length; j++) {
            if (Plane.isInUpSpace(points.array[i],planes[j],Plane.normalPlane(planes[j]))) {
                if (j==0) {
                    stroke("green")
                    fill('green')
                }
                if (j==1) {
                    stroke("blue");
                    fill("blue")
                }
                if (j==2) {
                    fill("red");
                stroke("red");
                }
            }
        }
        */
        
        graph = Vector.rotateAroundX(points.array[i],t);
        graph = Vector.rotateAroundY(graph,t);
        circle(graph.x,graph.y,2);
        textSize(7);
        //text(points.array[i].x,graph.x,graph.y);
    }
    

    if (increaseTime) {
        t+=0.01;
    }

}

function keyPressed(){
    if (increaseTime) {
        increaseTime = false;
        return
    }
    increaseTime = true;
}
