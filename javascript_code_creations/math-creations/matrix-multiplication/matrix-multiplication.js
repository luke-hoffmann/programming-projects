//

/*

[
[1 , 0, 0],
[0, cos(thetaX), sin(thetaX)],
[0, -sin(thetaX), cos(0)]
]

[
    [cos(thetaY),0, -sin(thetaY)],
    [0,1,0],
    [sin(thetaY), 0, cos(thetaY)]
]


*/

let matrix1 = [
    [2,1,5],
    [4,3,2],
    [3,5,6],
    [2,4,5],
    [1,3,4]
];

let matrix2 = [
    [5,6,7],
    [6,4,9],
    [7,2,6]
    
]
function matrMult(matrix1, matrix2) {
    if (matrix1[0].length != matrix2.length)return;
    smallSum = 0;
    outputMatrix = [];
    for (i = 0; i < matrix1.length; i++) {
        a = [];
        for (j = 0; j < matrix2[0].length; j++) {
            a.push(null)
        }
        outputMatrix.push(a);
    } 
    for (k =0; k < matrix2[0].length; k++) {
    for (j = 0; j < matrix1.length; j++) {
        smallSum = 0;
    for (i = 0; i< matrix2.length; i++) {
        smallSum += matrix2[i][k] * matrix1[j][i];

    }
    outputMatrix[j][k] = smallSum
    }
}
    return(outputMatrix);

}





function myMatrMult (matrix1,matrix2) {
    if (matrix1[0].length != matrix2.length) return;
    outputMatrix = [];
    for ( j = 0; j < matrix1.length; j++) {
        b = [];
        for (i = 0; i< matrix2[0].length; i++) {
            b.push(null);
        }
        outputMatrix.push(b);
    }


    



}


console.log(matrMult(matrix1,matrix2))






function setup() {

    createCanvas(400,400);

}


function draw() {

    clear();
    background(0);

}