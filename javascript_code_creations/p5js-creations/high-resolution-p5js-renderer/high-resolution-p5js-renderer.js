let renderWidth = 4000;
let renderHeight = 4000;
let renderGraphic;
let viewWidth = 400;
let viewHeight = 400;
let sF = 1;
function setup(){
    createCanvas(viewWidth,viewHeight);
    renderGraphic = createGraphics(viewWidth, viewHeight);
    
}

function draw() {
    image(renderGraphic, 0, 0);
    renderGraphic.scale(sF);
    // do stuff here
}

function exportHighRes() {
    // HighRes Export
    sF = scaleFactor
    renderGraphic = createGraphics(renderWidth, renderHeight);
    renderGraphic.background(255);
    draw();
    
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