let renderWidth = 500;
let renderHeight = 500;
let renderGraphic;
let viewWidth = 400;
let viewHeight = 400;
let sF = 1;

function scalePositionToRGB(x,y,w,h){
    return [x/(w)*255,80,y/(h)*255];
  }
  
  
  
  function strokeOrFillRGB(array,filler){
    
    if (filler == "fill") {
      renderGraphic.fill(array[0],array[1],array[2]);
    }
    if (filler == "stroke") {
      renderGraphic.stroke(array[0],array[1],array[2]);
    }
  }
function setup(){
    createCanvas(viewWidth,viewHeight);
    renderGraphic = createGraphics(viewWidth, viewHeight);
    
}

function draw() {
    image(renderGraphic, 0, 0);
    renderGraphic.background(255);
    renderGraphic.scale(sF);
    renderGraphic.push();
    // do stuff here

    renderGraphic.pop();
}

function exportHighRes() {
    // HighRes Export
    sF = renderWidth/viewWidth;
    renderGraphic = createGraphics(renderWidth, renderHeight);
    renderGraphic.background(255);
    draw();
    
    save(renderGraphic, "convex-hull-test-export", 'png');
    
    // Reset Default
    sF=1;
    
    renderGraphic = createGraphics(viewWidth, viewHeight);
    renderGraphic.background(255);
    draw();
}

// Export when key is pressed
function keyReleased() {
    if (key == 'e' || key == 'E') exportHighRes(width,height);
}