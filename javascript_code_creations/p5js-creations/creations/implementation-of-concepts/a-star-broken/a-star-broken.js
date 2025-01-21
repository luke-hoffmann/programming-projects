
let locs = [];

function distance(x1,y1,x2,y2) {
    
    return Math.sqrt((y1-y2)**2 + (x1-x2)**2);
}
let obstacles = [];
let gridX = 25;
let gridY = 25;
for (i =0; i <gridX;i++) {
    locArr = []
    for (j = 0; j< gridY; j++) {
        locArr.push(0);
    }
    obstacles.push(locArr);
}

for (i = 0; i< gridX; i++) {
    arand = [];
    for (j = 0; j <gridY; j++) {
        a = 0;
        arand.push(a);
    }
    locs.push(arand);
}
obstacles[12][12] = 1;
obstacles[13][12] = 1;
obstacles[14][12] = 1;
obstacles[10][12] = 1;
obstacles[15][12] = 1;
obstacles[15][11] = 1;
obstacles[15][10] = 1;
obstacles[15][9] = 1;
obstacles[15][8] = 1;
obstacles[15][7] = 1;
obstacles[15][6] = 1;
obstacles[15][5] = 1;

function effeciency(array,currentIndex,endpointIndex) {
    distances = [];
    for (i = 0; i <array.length; i++) {
        //console.log(8)
        
        h = distance(array[i].x,array[i].y,endpointIndex.x,endpointIndex.y);
        //console.log(20);
        
        //console.log(array);
        distances.push(h);
        
    }
    //console.log(distances);
    leastDist = distances[0];
    leastDistIndexX = 0;
    leastDistIndexY = 0;
    for (i = 0;i < distances.length;i++) {
        
            if (distances[i] < leastDist) {
                leastDist = distances[i];
                leastDistIndexX = array[i].x;
                leastDistIndexY = array[i].y;
            }

        
    }
    return {x:leastDistIndexX, y:leastDistIndexY};
}
function setup () {
    createCanvas(400,400);
    distanceX = width/gridX;
    distanceY = height/gridY;
}
let index = {x:0,y:0};
let goal = {x:locs[locs.length-1].length-1,y:locs.length-1};
function draw() {
    clear();
    background(0);
    
    if (index == goal) {

    }
    locs[index.x][index.y] = 255;
    for (i=0; i <locs.length; i++) {
        for (j =0; j < locs[i].length; j++) {
            stroke(255);
            fill(locs[i][j]);
            if (obstacles[i][j]==1) {
                fill("red");
                
            }
            rect(i*distanceX,j*distanceY,distanceX,distanceY);
        }
        
    }
    closestPoints = [];
    left = {x:index.x-1,y:index.y}
    right = {x:index.x+1,y:index.y}
    topE = {x:index.x,y:index.y-1}
    bottomE = {x:index.x,y:index.y+1}
    closestPoints.push(left);
    closestPoints.push(right);
    closestPoints.push(topE);
    closestPoints.push(bottomE);
    for (i = 0;i < closestPoints.length;i++) {
        if (closestPoints[i].x > -1 && closestPoints[i].y > -1 && closestPoints[i].x < gridX && closestPoints[i].y < gridY) {
            if (obstacles[closestPoints[i].x][closestPoints[i].y] == 1) {
                closestPoints.splice(i,1);
                //console.log(closestPoints);
            }
        }   
    }
    b = effeciency(closestPoints,index,goal);
    //console.log(b);
    index = {x:b.x,y:b.y};
    //console.log(index);
    //console.log(index);
    
}
