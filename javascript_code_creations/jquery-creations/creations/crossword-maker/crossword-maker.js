let heightAm = 10;
let widthAm = 10;
let numCount = 1;
let selectedWord = null;
let selectDir = false;
let selectedRow = -1;
let typicalColor = "grey";
let selectedColor = "red";
let wordColor = "Green";
let mode = "make";
let selectedCol = -1;
let screenHeight = document.body.clientHeight;
let screenWidth = document.body.clientWidth;
if (screenHeight < screenWidth) {
  screenWidth = screenHeight
} else {
  screenHeight = screenWidth
}

let width = screenWidth/widthAm;
let height = screenHeight/heightAm;
let grid = [];
for (let i=0; i < heightAm-2;i++) {
  a = [];
  $('#container').append("<div style='width:"+ screenWidth+";height:"+height+"px;margin-top:1px;margin-bottom:1px;display:block;'id='row"+i+"'></div>")
  for (let j=0; j< widthAm-2;j++) {
    a.push({show:0,letter:0,downNum:0,rightNum:0,rightWord:0,downWord:0,rightArr:[],downArr:[],attempt:0});
    $('#row'+i).append('<div id="cell_'+i+'_'+j+'"class="cell"style="vertical-align:top;text-align:center;margin-left:1px;display:inline-block;width:'+width+'px;height:'+height+'px;background-color:grey;">       <span id="right" style="vertical-align:top;font-weight: bold;margin:0;"></span>       <span id="letter" style="vertical-align:top;font-weight: bold;margin:0;"></span>    <span id="down" style="vertical-align:top;font-weight: bold;margin:0;"></span>                </div> ');





    //$('#row'+i).append('<div id="cell_'+i+'_'+j+'"class="cell"style="text-align:center;margin-left:1px;display:inline-block;width:'+width+'px;height:'+height+'px;background-color:grey;">    <div style="vertical-align:top;display:inline-block;width:'+(width/3-2)+'px;height:'+(height/3-2)+'px;margin:0;" id="spacer"></div>        <div style="display:inline-block;width:'+(width/3-2)+'px;height:'+(height/3-2)+'px;" id="spacer"></div>     <div style="vertical-align:top;display:inline-block;width:'+(width/3-2)+'px;height:'+(height/3-2)+'px;" id="right"></div>        <div style="display:inline-block;width:'+(width/3-2)+'px;height:'+(height/3-2)+'px;" id="spacer"></div><div style="vertical-align:top;display:inline-block;width:'+(width/3-2)+'px;height:'+(height/3-2)+'px;" id="letter"></div>   <div style="vertical-align:top;display:inline-block;width:'+(width/3-2)+'px;height:'+(height/3-2)+'px;" id="spacer"></div><div style="vertical-align:top;display:inline-block;width:'+(width/3-2)+'px;height:'+(height/3-2)+'px;" id="down"></div><div style="vertical-align:top;display:inline-block;width:'+(width/3-2)+'px;height:'+(height/3-2)+'px;" id="spacer"></div><div style="vertical-align:top;display:inline-block;width:'+(width/3-2)+'px;height:'+(height/3-2)+'px;" id="spacer"></div></div> ');
  } 
  grid.push(a);
}

$(".cell").css("font-size",width/3 + "px");
function updateGrid(grid){
  
  for (let i =0; i < grid.length; i++) {
    for (let j =0; j < grid[0].length;j++) {
    
      
      data = grid[i][j];
      if (data.show==2) {
      $(("#cell_" + i +"_" + j)).children("#letter").text(data.letter);
      $(("#cell_" + i +"_" + j)).children("#right").text("");
      $(("#cell_" + i +"_" + j)).children("#down").text("");
      
      } else if (data.show ==1 ){
        $(("#cell_" + i +"_" + j)).children("#letter").text("");
      if (data.downNum >0) {
      $(("#cell_" + i +"_" + j)).children("#down").text(data.downNum);
      }
        
      if (data.rightNum >0) {
      $(("#cell_" + i +"_" + j)).children("#right").text(data.rightNum);
      }
      } else if (data.show ==3){
        $(("#cell_" + i +"_" + j)).children("#letter").text(data.letter);
        if (data.downNum >0) {
      $(("#cell_" + i +"_" + j)).children("#down").text(data.downNum);
      }
        
      if (data.rightNum >0) {
      $(("#cell_" + i +"_" + j)).children("#right").text(data.rightNum);
      }
      } else if (data.show == 5) {
        if (data.attempt != 0 ) {
        $(("#cell_" + i +"_" + j)).children("#letter").text(data.attempt);
        }
        
      if (data.downNum >0) {
      $(("#cell_" + i +"_" + j)).children("#down").text(data.downNum);
      }
        
      if (data.rightNum >0) {
      $(("#cell_" + i +"_" + j)).children("#right").text(data.rightNum);
      }


        
      }
    }
  }
  
}


updateGrid(grid);
function clearGrid(grid){
  for (let i =0; i < grid.length; i++) {
    for (let j =0; j < grid[0].length;j++) {
      $(("#cell_" + i +"_" + j)).children("#letter").text();
    }
  }
}
function showWordAndDir(grid){
   for (let i =0; i < grid.length; i++) {
    for (let j =0; j < grid[0].length;j++) {
      if(grid[i][j].show >0 && grid[i][j].letter != 0) {
        grid[i][j].show =3;
      }
    }
   }
  updateGrid(grid);
}
function showDirNoWords(grid){
  for (let i =0; i < grid.length; i++) {
    for (let j =0; j < grid[0].length;j++) {
      if(grid[i][j].show >0) {
        grid[i][j].show =1;
      }
    }
   }
  updateGrid(grid);
}
function showAttempts (grid) {
  for (let i =0; i < grid.length; i++) {
    for (let j =0; j < grid[0].length;j++) {
      if(grid[i][j].attempt != 0) {
        grid[i][j].show = 5;
      }
    }
   }
  updateGrid(grid);
}
function showAllWordsNoDir(grid){
  for (let i =0; i < grid.length; i++) {
    for (let j =0; j < grid[0].length;j++) {
      if(grid[i][j].show >0) {
        grid[i][j].show =2;
      }
    }
   }
  updateGrid(grid);
}
function newWord(grid,word,dir,row,col){
  
  row = Number(row);
  col = Number(col);
  for (let i =0; i< word.length;i++) {
    if (dir == 1) {
    goTo = Number(col)+Number(i)
    grid[row][goTo].letter = word[i];
    for (let j =0; j < word.length;j++) {
      goToer = Number(col)+Number(j);
      grid[row][goTo].rightArr.push({row:row,col:goToer});
    }
    grid[row][goTo].rightWord = word;
    grid[row][goTo].show = 2;
      if (i ==0) {
        grid[row][goTo].rightNum = numCount;
        numCount++;
      }
    }
    if (dir == 0) {
      goTo = Number(row)+Number(i);
    grid[goTo][col].letter = word[i];
      for (let j =0; j < word.length;j++) {
      goToer = Number(row)+Number(j);
      grid[goTo][col].downArr.push({row:goToer,col:col});
    }
    grid[goTo][col].downWord = word;
    grid[goTo][col].show = 2;
      if (i ==0) {
        grid[goTo][col].downNum = numCount;
        numCount++;
      }
    }
  }
}
function attemptWord(){
  
}

showDirNoWords(grid)
updateGrid(grid)


function highlightWord(row,col,dir,grid){
  //
  if (row > -1) {
  
  locArr = [];
  if (dir == 1) {
    locArr = grid[row][col].rightArr;
    if (locArr.length == 0) {
      locArr = grid[row][col].downArr;
    }
  } else if (dir == 0) {
    locArr = grid[row][col].downArr;
    if (locArr.length == 0) {
      locArr = grid[row][col].rightArr;
    }
  }
  for (let i =0; i< locArr.length;i++) {
    row = locArr[i].row;
    col = locArr[i].col;

    $(("#cell_" + row +"_" + col)).css("background-color",wordColor);
  }
  }
}


function selectCell(row,col,doer){
  if (doer) {
  $(("#cell_" + selectedRow +"_" + selectedCol)).css("background-color",typicalColor);
  }
  $(("#cell_" + row +"_" + col)).css("background-color",selectedColor);
  if (doer) {
  if (selectedCol == col && selectedRow == row) {
    return "flip"
  }
  selectedRow = row;
  selectedCol= col;
  return "selected"
  }
}
function deselectCells(){
  $(("#cell_" + selectedRow +"_" + selectedCol)).css("background-color",typicalColor);
  
  selectedRow = -1;
  selectedCol = -1;
}
function unHighlight(grid){
  for (let i =0; i < grid.length; i++) {
    for (let j =0; j < grid[0].length;j++) {
       $(("#cell_" + i +"_" + j)).css("background-color",typicalColor)
    }
  }
}
function highLightDir(row,col,dir,grid){
  if (dir == 1) {
    
  
    
    for (let j =0; j< grid[row].length;j++) {
      $(("#cell_" + row +"_" + j)).css("background-color","green")
    }
    
  } else if (dir ==0){
    for (let j =0; j< grid.length;j++) {
      $(("#cell_" + j +"_" + col)).css("background-color","green")
    }
  }
}
$( ".cell" ).mousedown(function() {
  
  if (mode == "make") {
  data = $(this).attr("id").split("_");
    
  unHighlight(grid);
  if (selectCell(data[1],data[2],true) == "flip") {
    selectDir = !selectDir;
    // false is left to right  1 is right
    // true is up to down 0 is down
    
  } else {
    selectDir = false;
    
  }

  if (selectDir == false) {
    
    highLightDir(selectedRow,selectedCol,1,grid);
    selectCell(data[1],data[2],false)
  } else {
    highLightDir(selectedRow,selectedCol,0,grid);
    selectCell(data[1],data[2],false)
  }
  } else if (mode == "play") {
    data = $(this).attr("id").split("_");
    unHighlight(grid);
    if (selectCell(data[1],data[2],true) == "flip") {
    selectDir = !selectDir;
    // false is left to right  1 is right
    // true is up to down 0 is down
    
  } else {
    selectDir = false;
    
  }
    if (selectDir == false) {
    
    //highLightDir(selectedRow,selectedCol,1,grid);
    selectCell(data[1],data[2],false)
  } else {
    //highLightDir(selectedRow,selectedCol,0,grid);
    selectCell(data[1],data[2],false)
  }
    if (selectDir ) {
      highlightWord(selectedRow,selectedCol,0,grid);
    }else {
      highlightWord(selectedRow,selectedCol,1,grid);
    }
    $(("#cell_" + selectedRow +"_" + selectedCol)).css("background-color",selectedColor);
  }
});

$(document).on('keyup', function(e) {
  
  if (e.key == "Enter"){
      if (mode == "make" && selectedRow>-1) {
        word = prompt("What word?")
        curDir = 1;
        if (selectDir == false) curDir = 1;
        if (selectDir == true) curDir = 0;
        console.log(selectedRow + " " + selectedCol);
        console.log("niceCOkc")
        console.log(grid[1][1])
        newWord(grid,word,curDir,selectedRow,selectedCol);
        showWordAndDir(grid);
        updateGrid(grid);
      }
  }
  
  if (e.key == "Escape"){
    deselectCells();
    unHighlight(grid);
  }

  if (mode == "play"&& selectedRow>-1) {
    console.log(e.keyCode);
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      grid[selectedRow][selectedCol].attempt = e.key;
      showAttempts(grid);
      



      
    }
  }
});


function changeMode(){
  if (mode == "make") {
    mode = "play"; 
    for (let i =0; i < grid.length;i++){
    for (let j =0; j < grid[i].length;j++) {
      grid[i][j].attempt = 0;
    }
  }
    
    $("#mode").text("play");
    unHighlight(grid);
  deselectCells(grid);
  showDirNoWords(grid);
  updateGrid(grid);
    return;
  }
  
  
  if (mode == "play") mode = "make";
  showWordAndDir(grid);
  
  updateGrid(grid);
  clearGrid(grid);
  $("#mode").text("make");
  
    
}