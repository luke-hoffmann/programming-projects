let mode = "draw"
let pixel = [];
let widthX = 25;
let heightY = 25;

for (i =0; i < widthX; i++){
    b = [];
    for(j = 0; j < heightY; j++){
        c = {x: i, y: j, color: 255};
        b.push(c);
    }
    pixel.push(b);
}

function floodMode() {
  mode="flood";
}
function penMode() {
  mode="draw";
}
function floodFill(mainArray, color, x,y ) {
  search = true;
  queue = [{x:x, y:y}];
  searched = [];
  a = newSearch(x, y)
  up = a.up;
  down = a.down;
  left = a.left;
  right = a.right;
  count = 0;
  b =[];
  if (up.x > 0 && up.y > 0) {
    b.push(up)

  }
  if (down.x > -1 && down.y > 0) {
    b.push(down)
  }
  if (left.x > -1 && left.y > 0 ) {
    b.push(left)
  }
  if (right.x > -1 && right.y > -1) {
    b.push(right)
    }
  
  searches = [b];
  if (mainArray[x][y].color != color) {
    return false;
  } else {mainArray[x][y].color = "red";}
  removeList = [];
  goodColo =[]
  searching = true;
  while (searching) {
    for (i =0; i< searches.length;i++) {
      for (j=0;j<searches[i].length;j++) {
        
      if (mainArray[searches[i][j].x] > 0) {
        queue[searches[i][j].x].splice(searches[i][j].y,1);
        searches[i].splice(j,1);
          j++;
        //break;
      }
        if (mainArray[searches[i][j].y] > 0) {
        queue[searches[i][j].x].splice(searches[i][j].y,1);
          searches[i].splice(j,1);
          j++;
          //break;
      }
     

        
        
      //if (mainArray[searches[i][j].x][searches[i][j].y].color != undefined){
        
      if (color == mainArray[searches[i][j].x][searches[i][j].y].color) {
        //goodColo.push([i,j])
        mainArray[searches[i][j].x][searches[i][j].y].color = "red";
        searched.push({x:searches[i][j].x,y:searches[i][j].y});
        
        
        a = newSearch(searches[i][j].x, searches[i][j].y);
        //searches[i].splice(j,1);
        up = a.up;
        down = a.down;
        left = a.left;
        right = a.right;
        b = [];
        if (up.x > -1 && up.y > -1 && up.x < widthX+1 && up.y < heightY+1) {
          b.push(up);

        }
        if (down.x > -1 && down.y > -1 && down.x < widthX+1 && down.y < heightY) {
          b.push(down);
        }
        if (left.x > -1 && left.y > -1 &&left.x < widthX+1 && left.y < heightY+1) {
          b.push(left);
        }
        if (right.x > -1 && right.y > -1 && right.x < widthX && right.y < heightY+1) {
          b.push(right);
        }
        if (b.length > 0) {
          searches.push(b);
        }
        
        
        //console.log(searches)
      } else {
        a = [i,j];
        removeList.push(a);
      }
      // } else {
      //   queue[b[i].x].splice(b[i].y,1)
      // }
      
    }
    }
    if (searches.length == 0) {
      //console.log(11);
      break
    }
    if (count >200) {
      //console.log(count)
      //console.log(10);
      searching = false;
      queue = []
      return
    }
    
    count++;
    if (goodColo.length > widthX*heightY) {
      searching = false;
      searches = [];
      return
    }
    for (i=0; i <removeList.length;i++) {
      searches[removeList[i][0]].splice(removeList[i][1],1);
      console.log(1);
      removeList.splice(i,1);
      //console.log(i + " " + j)
    }
  }
  
}

function newSearch(x,y){
  up = {x:x,y:y-1};
  down = {x:x,y:y+1};
  left = {x:x-1, y:y};
  right = {x:x+1,y:y};
  return {up:up,down:down,left:left,right:right};
}

//for (i =0; i < widthX; i++){
//    b = [];
//    for(j = 0; j < heightY; j++){
//        c = {x: i, y: j, color: 255};
//        b.push(c);
//    }
//    pixel.push(b);
//}




let changeX;
let changeY;
function setup() {
  createCanvas(400,400);
  changeX = width/widthX;
  changeY = height/heightY;
}

function clearCanvas() {
    for (i =0; i < pixel.length; i++){
        
        for(j = 0; j < pixel[i].length; j++){
            pixel[i][j].color = 255;
            
        }
        
    }
}
function filler() {
  b ={x:0,y:0};
  floodFill(pixel,255, 1,3);
}
function draw() {
    clear();
    background(0);
    if (mouseIsPressed === true) {
        if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
        if (mode == "draw"){
        x = (Math.floor(mouseX/changeX));
        y = (Math.floor(mouseY/changeY));
        if (mouseButton == LEFT) {
            coloR = 1;
            pixel[x][y].color = coloR;
        }
        if (mouseButton == RIGHT) {
            
            pixel[x][y].color = 255;
        }
        }
        if (mouseButton == LEFT){
        if (mode =="flood") {
          x = (Math.floor(mouseX/changeX));
          y = (Math.floor(mouseY/changeY));
          colorty = pixel[x][y].color;
          floodFill(pixel,colorty,x,y);
          //console.log("wow")
        }
        }
          
    }
        
    }
    //console.log(mouseIsPressed);
    for (i =0; i < widthX; i++){
        
        for(j = 0; j < heightY; j++){
            fill(pixel[i][j].color);
            stroke(0);
            rect(pixel[i][j].x*changeX,pixel[i][j].y*changeY,changeX,changeY)
        }
    }

}