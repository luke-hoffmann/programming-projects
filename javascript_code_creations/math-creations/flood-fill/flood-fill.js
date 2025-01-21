function CheckDifferences(origin,branch,check){
    for (let i = 0; i < branch.length;i++){
        for (let j =0 ; j < branch[i].length;j++ ){
            if (origin[i][j] != check && branch[i][j] == check){
                origin[i][j] = check;
            }
        }
    }
    return origin;
}

function GetAdjacent(matrix,row,col){
    out = [];
    if (row-1 >= 0 && matrix[row-1][col] != undefined) {
        out.push([[row-1,col],matrix[row-1][col]])
    }
    if (row+1 < matrix.length && matrix[row+1][col] != undefined) {
        out.push([[row+1,col],matrix[row+1][col]])
    }
    if (col-1 >= 0 &&matrix[row][col-1] != undefined) {
        out.push([[row,col-1],matrix[row][col-1]])
    }
    if (col+1 < matrix[0].length &&matrix[row][col+1] != undefined) {
        out.push([[row,col+1],matrix[row][col+1]])
    }
    return out;
}
function FloodFill(matrix,row,col,fill,filled){

    let adj = GetAdjacent(matrix,row,col);

    for (let i =0 ; i < adj.length;i++) {
        if (adj[i][1] == fill) {
            matrix[adj[i][0][0]][adj[i][0][1]] = filled;
            recur = FloodFill(matrix,adj[i][0][0],adj[i][0][1],fill,filled);

            matrix = CheckDifferences(matrix,recur,filled);
        }
    }
    return matrix;
}


let matrix = [
    [1,1,1,1,1,1],
    [1,1,0,0,1,0],
    [1,0,1,1,1,0]
]
console.log(FloodFill(matrix,0,0,1,2));