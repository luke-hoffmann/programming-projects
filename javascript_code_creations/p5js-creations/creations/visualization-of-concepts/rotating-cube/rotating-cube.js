let sideLength= 100;
let points = [
  [0,0,0],
  [0,0,sideLength],
  [sideLength,0,0],
  [sideLength,sideLength,0],
  [sideLength,0,sideLength],
  [0,sideLength,sideLength],
  [0,sideLength,0],
  [sideLength,sideLength,sideLength],
]
let colors = [
  "red", "green", "blue", "yellow", "white", "purple", "orange", "pink"
  
]

let orthographic = [
  [1,0,0],
  [0,1,0],
  [0,0,0]
]
/*
let rotationX = [
  [1,0,0],
  [0,Math.cos(theta),-Math.sin(theta)],
  [0,Math.sin(theta),Math.cos(theta)]
]
let rotationY = [
  [Math.cos(theta),0,Math.sin(theta)],
  [0,1,0],
  [-Math.sin(theta),0,Math.sin(theta)]
]
let rotationZ = [
  [Math.cos(theta),-Math.sin(theta),0],
  [Math.sin(theta),Math.cos(theta),0],
  [0,0,1]
]

*/
function matrixMult(mat1,mat2) {
  let outMat = [];
  for (let i =0 ; i < mat1.length; i++) {
    b  =[];
    for (let j =0; j < mat2[0].length; j++) {
      b.push(0);
    }
    outMat.push(b);
  }

  // k is running through the numbers in rows and cols
  // i is running through the rows of first mat
  // j is running through the cols of mat 2
  for (let i =0 ; i< mat1.length; i++) {
    
    for (let j = 0; j < mat2[0].length; j++) {
      smallSum = 0;
      for (let k =0; k < mat1[0].length; k++) {
        smallSum += mat1[i][k] * mat2[k][j];
      }
      outMat[i][j] = smallSum
    }
  }
  return outMat
}
function setup(){
  createCanvas(400,400);
}
console.log(matrixMult(points,orthographic))
let theta = 0.05;
let circleTheta = 0;

let gridPoints = [];
for (let i =0 ; i < 5; i++) {
  for (let j =0; j < 5; j++) {
    gridPoints.push([i*15.5,0,j*15.5])
  }
}

for (i = 0 ; i < gridPoints.length; i++) {
  theta = 45;
  theta = theta * Math.PI /180
  rotationX = [
  [1,0,0],
  [0,Math.cos(theta),-Math.sin(theta)],
  [0,Math.sin(theta),Math.cos(theta)]];
  theta=15;
  rotationY = [
  [Math.cos(theta),0,Math.sin(theta)],
  [0,1,0],
  [-Math.sin(theta),0,Math.sin(theta)]
]
  gridPoints[i] = matrixMult(matrixMult([gridPoints[i]], rotationX),rotationY)
}
function draw() {
  
  clear();
  background(0);
  rotationX = [
  [1,0,0],
  [0,Math.cos(theta),-Math.sin(theta)],
  [0,Math.sin(theta),Math.cos(theta)]];
  
  rotationY = [
  [Math.cos(theta),0,Math.sin(theta)],
  [0,1,0],
  [-Math.sin(theta),0,Math.sin(theta)]
]
  
  rotationZ = [
  [Math.cos(theta),-Math.sin(theta),0],
  [Math.sin(theta),Math.cos(theta),0],
  [0,0,1]
]
  
  translate(200,200)
  
  points2 = matrixMult(points,rotationX)
  points2 = matrixMult(points2,rotationY)
  points2 = matrixMult(points2,rotationZ)
  newArray = [];
  circleTheta += .01;
  for (let l = 0; l < points.length;l++) {
    b = [points[l]]
    b = matrixMult(b,rotationX)
    b = matrixMult(b,rotationY)
    b = matrixMult(b,rotationZ)
    b[0][0] = b[0][0]
    b[0][1] = b[0][1]
    //console.log(b)
    newArray.push(b);
  }
  
  
  
  //weDontCareAboutZ = matrixMult(points2,orthographic);
  //console.log(newArray[0][0])
  
  //console.log(orderToDo)
  stroke(255);
  
  for (let i =0; i < newArray.length; i++) {
    fill(255)
    circle (newArray[i][0][0],newArray[i][0][1],5)
  }
  line(newArray[0][0][0],newArray[0][0][1],newArray[1][0][0],newArray[1][0][1])
  line(newArray[2][0][0],newArray[2][0][1],newArray[0][0][0],newArray[0][0][1])
  line(newArray[2][0][0],newArray[2][0][1],newArray[3][0][0],newArray[3][0][1])
  line(newArray[5][0][0],newArray[5][0][1],newArray[1][0][0],newArray[1][0][1])
  line(newArray[7][0][0],newArray[7][0][1],newArray[3][0][0],newArray[3][0][1])
  line(newArray[7][0][0],newArray[7][0][1],newArray[5][0][0],newArray[5][0][1])
  line(newArray[6][0][0],newArray[6][0][1],newArray[5][0][0],newArray[5][0][1])
  
  line(newArray[6][0][0],newArray[6][0][1],newArray[3][0][0],newArray[3][0][1])
  
  line(newArray[6][0][0],newArray[6][0][1],newArray[0][0][0],newArray[0][0][1])
  line(newArray[2][0][0],newArray[2][0][1],newArray[4][0][0],newArray[4][0][1])
  line(newArray[1][0][0],newArray[1][0][1],newArray[4][0][0],newArray[4][0][1])
  line(newArray[7][0][0],newArray[7][0][1],newArray[4][0][0],newArray[4][0][1])
  
  //noLoop()
  
  theta+=0.01;
  /*
  fill(255);
  for (let i =0 ; i< gridPoints.length; i++) {
    circle(gridPoints[i][0][0],gridPoints[i][0][1],5)
  }
  */
}




function drawPoint(index,array) {
  
}
function drawLine(x1,y1,x2,y2) {
  line(x1,y1,x2,y2);
}