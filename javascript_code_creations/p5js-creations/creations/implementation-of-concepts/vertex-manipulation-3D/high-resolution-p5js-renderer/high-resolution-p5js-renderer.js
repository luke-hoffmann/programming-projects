let points=new Field();
let sizeOfSlice=400;
let planes = undefined;
let redPoints = [];

1350,600
let renderWidth = 2000;
let renderHeight = 2000;
let renderGraphic;
let viewWidth = 700;
let viewHeight = 700;
let sF = 1;
function setup(){
    createCanvas(viewWidth,viewHeight);
    
    renderGraphic = createGraphics(viewWidth, viewHeight);
    for (let i =0 ; i < 100;i++) {
        thetaXY = Math.random() * Math.PI*2
        thetaZ = Math.random()* Math.PI*2;
        points.array.push(Field.SpherePoint(200));
    }
    planes = (Field.QuickHull(points));
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



function draw() {
    image(renderGraphic, 0, 0);
    
    renderGraphic.background(255);
    
    renderGraphic.scale(sF);
    renderGraphic.push()
    renderGraphic.translate(width/2,height/2);
    // do stuff here
    for(let i =0;i<planes.length;i++){
        renderGraphic.stroke("black");
        renderGraphic.fill("black")
        renderGraphic.stroke(colors[i]);
        renderGraphic.fill(colors[i])
        planePoints = getPointsFromPlane(planes[i])
        last = undefined
        first = undefined
        for(let j =0;j<planePoints.length;j++){
            graph = Vector.rotateAroundX(planePoints[j],t);
            graph = Vector.rotateAroundY(graph,t);
            if (j==0) {
                first = graph;
            }
            renderGraphic.circle(graph.x,graph.y,10);
            if (j >0) {
                renderGraphic.line(last.x,last.y,graph.x,graph.y);
            }
            if (j == planePoints.length-1) {
                renderGraphic.stroke("black")
                renderGraphic.line(first.x,first.y,graph.x,graph.y);
                continue;
            }
            last = graph;
        }
    }
    for(let i =0;i<points.array.length;i++){
        renderGraphic.stroke("black");
        renderGraphic.fill("black")
        graph = Vector.rotateAroundX(points.array[i],t);
        graph = Vector.rotateAroundY(graph,t);
        renderGraphic.circle(graph.x,graph.y,2);
        renderGraphic.textSize(7);
    }
    renderGraphic.pop();
    if (increaseTime) {
        t+=0.01;
    }

}

function exportHighRes() {
    // HighRes Export
    sF = renderWidth/viewWidth;
    renderGraphic = createGraphics(renderWidth, renderHeight);
    
    renderGraphic.background(255);
    increaseTime = false;
    draw();
    noLoop();
    save(renderGraphic, "convex-hull-test-export", 'png');
    
    // Reset Default
    sF=1;
    
    renderGraphic = createGraphics(viewWidth, viewHeight);
    renderGraphic.background(100);
    draw();
}

// Export when key is pressed
function keyReleased() {
    if (key == 'e' || key == 'E') exportHighRes(width,height);
}


function keyPressed(){
    if (increaseTime) {
        increaseTime = false;
        return
    }
    increaseTime = true;
}
