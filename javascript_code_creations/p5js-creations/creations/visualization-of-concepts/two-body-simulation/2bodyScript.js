let masses = [];
let stars = [];
let greatestDis = 0;
let onLoop = false;
let control = null;
let pauser = true;
let sunVal = 0;
let comVal = 0;
let ap = 0;
let stationHeight2 = 5;
let lockerSun = true;
let sunCords = { x: null, y: null, angle: 0 };
let commetCords = { x: null, y: null, angle: 0 };
let spaceStations = [];
let stationHeight = 1;
const GRAVITY = .01
let widtherwea = document.documentElement.clientWidth - 525
$("#toggler").css("width", widtherwea);
$("#popUpper").css("width", document.documentElement.clientWidth -30)
$("#popUpper").css("height", document.documentElement.clientHeight -5)
$("#controls").css("pointer-events", "none");
$("#game").css("margin-top", -$("controls").height());
$("#controls").hide();
$("#popUpper").css("margin-top", 0);

function setup() {
  c = {r:255,g: 202,b: 40};
  b = new spaceStation(10, 3, .1, .01,5, {r:255,g: 202,b: 40});
  spaceStations.push(b);
  b = new spaceStation(1, 3, 4, .03,2.5,  );
  spaceStations.push(b);
  let canvaser = createCanvas(document.documentElement.clientWidth - $("#controls").width()-40, $("#controls").height()+13);
  if (document.documentElement.clientWidth < 800) {
    let canvaser = createCanvas(document.documentElement.clientWidth - 50, document.documentElement.clientHeight-10);
    $("#toggler").css("width", document.documentElement.clientWidth - 50);
    
    
    $("#toggler").css("height", 50);
    $("#toggler").show();
    $("#game").css("posistion", "relative");
    $("#game").removeClass("right");
    $("#game").css("top", 0);
    $("#game").css("left", 0);
    $("#toggler").css("left", 0);
    $('#game').css("transform","translate(525 0)");
    $("#game").css("margin-top", -$("#controls").height()-20);
    $("#controls").hide();
    //$("#game").css("margin-top", "-1505px");
    //$("#info").css("margin-top", "-145px");
  } else {
    $("#controls").hide();
    $("#toggler").hide();
    $("#game").removeClass("bottom");
    $("#game").removeClass("posistion");
    $("#game").css("posistion", "relative");
    $("#game").css("margin-top", 0);
    $('#game').css("float", "right");
    $('#game').css("top",0);
    $('#game').css("transform","translate(0 0)");
    $("#game").css("margin-top", -$("#controls").height()-20);
    //$('#game').css("background", "rgb(255,0,0)")
  }
  canvaser.parent('game');
  b = new mass(250, 100, 1, 2, .2, 1)
  masses.push(b);
  b = new mass(width / 2, height / 2, 113, 0, 0, 2)
  masses.push(b);
  //for (i = 0; i < 1000; i++) {
  //b = new star(width, height, width, height, 1)
  //stars.push(b);
  //}


}
function resetSim () {
  
  masses = [];
  stars = [];
  greatestDis = 0;
  onLoop = false;
  control = null;
  pauser = true;
  sunVal = 0;
  comVal = 0;
  ap = 0;
  lockerSun = true;
  sunCords = { x: null, y: null, angle: 0 };
  commetCords = { x: null, y: null, angle: 0 };
  spaceStations = [];
  stationHeight = 0;
  
  setup();
  popUp();
}
function resetLocations () {
  onLoop = true;
  pauser = false;
  masses[0].x = width/2;
  masses[0].y = height/4;
  masses[1].x = width/2;
  masses[1].y = width-width/4
}
$(window).resize(function() {
  let canvaser = createCanvas(document.documentElement.clientWidth - $("#controls").width()-40, $("#controls").height()+13); 
  // This will execute whenever the window is resized
  if (document.documentElement.clientWidth < 800) {
    canvaser = createCanvas(document.documentElement.clientWidth - 50, document.documentElement.clientHeight-10);
    $("#toggler").css("width", document.documentElement.clientWidth - 50);
    $("#popUpper").css("width", document.documentElement.clientWidth -30)
    $("#popUpper").css("height", document.documentElement.clientHeight -5)
    $("#toggler").show();
    
  } else {
    
    $("#popUpper").css("width", document.documentElement.clientWidth -30)
    $("#popUpper").css("height", document.documentElement.clientHeight -5)
    //$('#controls').slideToggle(1);
    $("#toggler").hide();
    $("#controls").show();
    $("#game").css("margin-top", -$("#controls").height()-20);
    $("#game").removeClass("left");
    $("#game").css("right", 0);
    
    
  }
  canvaser.parent('game');
});
//console.log($('#controls').height());

function lockSun() {
  lockerSun = !lockerSun;
}
function sliderUP() {
  if (document.documentElement.clientWidth < 800) {
    $("#controls").slideToggle(1000);
    $("#game").css("transform", "translate(0px -338px)");
    $("#game").css("top", 0);
    $("#game").css("margin-top", "60px");
  }  else {
    $("#controls").slideToggle(1000);
    
    $("document").css("width", 1000);
   
  }
    //$("#controls").slideToggle(1000);
  
}


function mousePressed() {
  if ((mouseX > 0 && mouseX < width) && (mouseY > 0 && mouseY < width)) {


    if (control == "sun") {
      dis = Math.sqrt((Math.round(masses[1].x - mouseX) ** 2) + (Math.round(masses[1].y - mouseY) ** 2));
      rad = (masses[1].mass / 3) / 2 + 20;
      if (dis <= rad) {
        sunVal = 1;
        sunControl = 1;
      } else {
        xChange = masses[1].x - mouseX;
        yChange = masses[1].y - mouseY;
        angle = Math.atan((xChange) / (yChange));
        //console.log(angle)
        angle = angle * 180 / PI;
        //console.log(angle)
        if ((masses[1].x < mouseX) && masses[1].y < mouseY) {
          angle = angle;
        }
        if (mouseY == masses[1].y) {
          angle = (angle + 180);
        }
        if ((masses[1].x < mouseX) && (masses[1].y > mouseY)) {
          angle = angle + 180;
        }
        if ((masses[1].x > mouseX) && (masses[1].y > mouseY)) {
          angle = angle - 180;
        }
        angle = angle * PI / 180;
        sunCords = { x: mouseX, y: mouseY, angle: angle };
      }
    }
    if (control == "comet") {
      dis = Math.sqrt((Math.round(masses[0].x - mouseX) ** 2) + (Math.round(masses[0].y - mouseY) ** 2));
      rad = (masses[0].mass / 3) / 2 + 20
      if (dis <= rad) {
        comVal = 1;
        comControl = 1;
      } else {
        xChange = masses[0].x - mouseX
        yChange = masses[0].y - mouseY
        angle = Math.atan((xChange) / (yChange));
        //console.log(angle)
        angle = angle * 180 / PI
        //console.log(angle)
        if ((masses[0].x < mouseX) && masses[0].y < mouseY) {
          angle = angle
        }
        if (mouseY == masses[0].y) {
          angle = (angle + 180)
        }
        if ((masses[0].x < mouseX) && (masses[0].y > mouseY)) {
          angle = angle + 180
        }
        if ((masses[0].x > mouseX) && (masses[0].y > mouseY)) {
          angle = angle - 180
        }
        angle = angle * PI / 180;

        commetCords = { x: mouseX, y: mouseY, angle: angle };
        //console.log(commetCords)
      }
    }

  }
}
function mouseReleased() {
  sunVal = 0;
  comVal = 0;
  sunControl = 0;
}
function controlSun() {
  
  
  control = "sun";
}
function controlComet() {

  control = "comet";
}
function onOff() {
  //onLoop = !onLoop
  if (onLoop) {
    pauser = false;
  } else {
    if (document.getElementById("cometVel").value != null && document.getElementById("cometVel").value != 0 && commetCords.angle != null) {
      masses[0].xVelocity = (Math.sin(commetCords.angle) * document.getElementById("cometVel").value)
      masses[0].yVelocity = (Math.cos(commetCords.angle) * document.getElementById("cometVel").value)
      commetCords = { x: null, y: null, angle: null };
    }
    if (document.getElementById("sunVel").value != null || document.getElementById("sunVel").value != 0 && commetCords.angle != null) {
      masses[1].xVelocity = (Math.sin(sunCords.angle) * document.getElementById("sunVel").value);
      masses[1].yVelocity = (Math.cos(sunCords.angle) * document.getElementById("sunVel").value);
      console.log((Math.cos(sunCords.angle) * document.getElementById("sunVel").value))
      sunCords = { x: null, y: null, angle: null };
    }
    pauser = true;

  }
  onLoop = !onLoop
}

//$("#game").css("margin-top", "-700px");
function popUp(){
  
  //console.log(1);
  //document.documentElement.clientWidth -30
  $("#popUpper").hide();
  $("#info").hide();

  $("#popUpper").css("pointer-events","none");
  $("#game").css("visibility", "visible");
  $("#okayPop").css("background","red")
  
  
  //display: inline-block;
  //
  $("#controls").show();
  $("#controls").css("pointer-events","auto");
  //-----------------------------------------//

  if (document.documentElement.clientWidth < 800) {
    
    $("#toggler").css("width", document.documentElement.clientWidth - 50);
    $("#popUpper").css("width", document.documentElement.clientWidth -30)
    $("#popUpper").css("height", document.documentElement.clientHeight -5)
    $("#toggler").show();
    $("#toggler").css("height", 50);
    $("#game").removeClass("bottom");
    $("#game").css("posistion", "relative");
    $("#game").removeClass("right");
    cb = document.documentElement.clientHeight-10
    $("#toggler").css("margin-top", cb + "px");
    $("#game").css("top", 225);
    //$("#game").css("margin-top", -$("controls").height());
    $("#game").css("right", 0);
    $('#game').css("float", "left");
    $('#game').css("margin-top","-100px");
    $("#toggler").css("left", 0);
    $("#controls").css("pointer-events", "auto");
    
  } else {
    
    $("#popUpper").css("width", document.documentElement.clientWidth -30)
    $("#popUpper").css("height", document.documentElement.clientHeight -5)
    //$('#controls').slideToggle(1);
    $("#toggler").hide();
    $("#controls").show();
    
    //$("#game").css("margin-top", "0px");
    //$('#game').css("background", "rgb(255,0,0)")
    $("#game").css("margin-top", -$("#controls").height()-20);
  }
  
  
}
function draw() {
  clear();
  background(1);
  if (onLoop) {
    $("#onOff").css("background-color","lightgreen");
  } else {$("#onOff").css("background-color","#FF7F7F");}
  if (lockerSun) {
    $("#lockSun").css("background-color","lightgrey");
  } else{$("#lockSun").css("background-color","lightgreen");}


  if (control =="sun") {
    $("#contSun").css("background-color","lightgreen");
  } else {$("#contSun").css("background-color","lightgrey");}
  if (control =="comet") {
    $("#contComet").css("background-color","lightgreen");
  } else {$("#contComet").css("background-color","lightgrey");}


  stroke(255);
  if (commetCords.x != undefined && commetCords.y != undefined) {
    length = (masses[0].mass / 3) / 2 + document.getElementById("cometVel").value * 10
    x1 = masses[0].x + (Math.sin(commetCords.angle) * length)
    y1 = masses[0].y + (Math.cos(commetCords.angle) * length)
    line(masses[0].x, masses[0].y, x1, y1);
  }
  if (sunCords.x != undefined && sunCords.y != undefined) {
    length = (masses[1].mass / 3) / 2 + document.getElementById("sunVel").value * 10
    x1 = masses[1].x + (Math.sin(sunCords.angle) * length)
    y1 = masses[1].y + (Math.cos(sunCords.angle) * length)
    line(masses[1].x, masses[1].y, x1, y1);
  }

  if ((control == "sun") && mouseX < (masses[1].x + (masses[1].mass / 3 + masses[1].changecir) / 2 + 20) && mouseX > (masses[1].x - (masses[1].mass / 3 + masses[1].changecir) / 2 - 20) && mouseY < (masses[1].y + (masses[1].mass / 3 + masses[1].changecir) / 2 + 20) && mouseY > (masses[1].y - (masses[1].mass / 3 + masses[1].changecir) / 2 - 20) && onLoop != true) {
    dis = Math.sqrt((Math.round(masses[1].x - mouseX) ** 2) + (Math.round(masses[1].y - mouseY) ** 2));
    fill(255);

    rad = (masses[1].mass / 3) / 2 + 20
    if (dis <= rad) {
      //console.log(1);
      //document.getElementById("squareIN").value = dis;
      noFill();
      stroke(255);
      circle(masses[1].x, masses[1].y, masses[1].mass / 3 + 40)
    }
  }

  if (sunVal == 1 && onLoop != true) {
    dis = Math.sqrt((Math.round(masses[1].x - mouseX) ** 2) + (Math.round(masses[1].y - mouseY) ** 2));
    rad = (masses[1].mass / 3) / 2 + 20
    if ((dis <= rad) || sunControl == 1) {
      greatestDis = 0;
      masses[1].x = mouseX;
      masses[1].y = mouseY;
      masses[1].xVelocity = 0;
      masses[1].yVelocity = 0;
    }
    sunControl = 1;
  } else { sunControl = 0; }
  // wdwdwadawd
  /*  wdawdwad */
  //--------------------------//
  if ((control == "comet") && mouseX < (masses[0].x + (masses[0].mass / 3 + masses[0].changecir) / 2 + 20) && mouseX > (masses[0].x - (masses[0].mass / 3 + masses[0].changecir) / 2 - 20) && mouseY < (masses[0].y + (masses[0].mass / 3 + masses[0].changecir) / 2 + 20) && mouseY > (masses[0].y - (masses[0].mass / 3 + masses[0].changecir) / 2 - 20) && onLoop != true) {
    dis = Math.sqrt((Math.round(masses[0].x - mouseX) ** 2) + (Math.round(masses[0].y - mouseY) ** 2));

    rad = (masses[0].mass / 3) / 2 + 20
    //console.log(1);
    if (dis <= rad) {

      //console.log(1);
      noFill();
      stroke(255);
      circle(masses[0].x, masses[0].y, masses[0].mass / 3 + 40)
    }
  }
  if (comVal == 1 && onLoop !=true) {
    dis = Math.sqrt((Math.round(masses[0].x - mouseX) ** 2) + (Math.round(masses[0].y - mouseY) ** 2));
    rad = (masses[0].mass / 3) / 2 + 20
    if ((dis <= rad) || comControl == 1) {
      greatestDis = 0;
      masses[0].x = mouseX;
      masses[0].y = mouseY;
      masses[0].xVelocity = 0;
      masses[0].yVelocity = 0;
    }
    comControl = 1;
  } else { comControl = 0; }
  /*
  cometArr = ((document.getElementById("cometVel").value + "").split(" "))
  cometXVel = cometArr[0];
  cometYVel = cometArr[1];
  sunArr = ((document.getElementById("sunVel").value + "").split(" "))
  sunXVel = sunArr[0];
  sunYVel = sunArr[1];
  */
  //text(cometXVel,60,100)
  //console.log(cometXVel)
  sunMass = document.getElementById("sunMass").value;
  masses[1].mass = sunMass
  cometMass = document.getElementById("cometMass").value;
  masses[0].mass = cometMass
  //console.log(a);


  if (onLoop != true) {
    textFont('Avenir');
    textAlign(CENTER)
    //----------------COMET---------------------------//
    if (width - (masses[0].x+(masses[0].mass / 3) / 2 + 20) > 100) {
      if ((masses[0].y+(masses[0].mass / 3) / 2 + 20) >120) {
        line(masses[0].x,masses[0].y,masses[0].x+50,masses[0].y-50)
        text("c o m e t",masses[0].x+50,masses[0].y-60);
      }
      if ((masses[0].y+(masses[0].mass / 3) / 2 + 20) <120) {
        line(masses[0].x,masses[0].y,masses[0].x+50,masses[0].y+50)
        text("c o m e t",masses[0].x+50,masses[0].y+60);
      }
    }
    if ((masses[0].x+(masses[0].mass / 3) / 2 + 20) > width-100) {
      if ((masses[0].y+(masses[0].mass / 3) / 2 + 20) >120) {
      line(masses[0].x,masses[0].y,masses[0].x-50,masses[0].y-50)
      text("c o m e t",masses[0].x-50,masses[0].y-60);
      }
      if ((masses[0].y+(masses[0].mass / 3) / 2 + 20) <120) {
        line(masses[0].x,masses[0].y,masses[0].x-50,masses[0].y+50)
        text("c o m e t",masses[0].x-50,masses[0].y+60);
      }
    }
    //----------------COMET---------------------------//

    //----------------PLANET--------------------------//
    if (width - (masses[1].x+(masses[1].mass / 3) / 2 + 20) > 100) {
      if ((masses[1].y+(masses[1].mass / 3) / 2 + 20) >120) {
        line(masses[1].x,masses[1].y,masses[1].x+50,masses[1].y-50);
        text("p l a n e t",masses[1].x+50,masses[1].y-60);
      }
      if ((masses[1].y+(masses[1].mass / 3) / 2 + 20) <120) {
        line(masses[1].x,masses[1].y,masses[1].x+50,masses[1].y+50);
        text("p l a n e t",masses[1].x+50,masses[1].y+60);
      }
    }
    if ((masses[1].x+(masses[1].mass / 3) / 2 + 20) > width-100) {
      if ((masses[1].y+(masses[1].mass / 3) / 2 + 20) >120) {
      line(masses[1].x,masses[1].y,masses[1].x-50,masses[1].y-50);
      textAlign(CENTER)
      text("p l a n e t",masses[1].x-50,masses[1].y-60);
      }
      if ((masses[1].y+(masses[1].mass / 3) / 2 + 20) <120) {
        text("p l a n e t",masses[1].x-50,masses[1].y+60);
        line(masses[1].x,masses[1].y,masses[1].x-50,masses[1].y+50);
      }
    }
    //----------------PLANET--------------------------//



  }









  for (i = 0; i < stars.length; i++) {
    stars[i].draw();
  }
  for (i = 0; i < masses.length; i++) {
    masses[i].draw();
  }
  dis = Math.sqrt((Math.round(masses[0].x - masses[1].x) ** 2) + (Math.round(masses[0].y - masses[1].y) ** 2));
  if (greatestDis < dis) {
    greatestDis = dis
  }
  textAlign(LEFT)
  fill(255);
  text("(in pixels)", 30, 15);
  text("Furthest Distance:    " + Math.round(greatestDis), 30, 30);
  text("Comet Location     X: " + Math.round(masses[0].x) + "      Y: " + Math.round(masses[0].y), 30, 45);
  text("Earth Location     X: " + Math.round(masses[1].x) + "      Y: " + Math.round(masses[1].y), 30, 60);
  //text(dis,300,100)
  acceleration = ((GRAVITY * masses[0].mass * masses[1].mass) / (dis * dis))

  //text(force, 300,200)
  xChange = (masses[0].x - masses[1].x);
  yChange = (masses[0].y - masses[1].y);

  angle = Math.atan((xChange) / (yChange));
  //console.log(angle)
  textAlign(LEFT);
  angle = angle * 180 / PI
  //text(angle, 30, 80)
  //text(angle,10, 10)
  if (masses[1].x < masses[0].x) {
    //angle = (angle + -180 * PI)
  }

  /*
  if ((masses[1].x > masses[0].x) && masses[1].y < masses[0].y) {
    angle = angle-180
  }
  if (masses[0].y == masses[1].y) {
   angle = (angle +180)
  }
  if ((masses[1].x < masses[0].x) && masses[1].y < masses[0].y) {
    angle = angle-180
  }
  */
  //angle = angle *180/PI
  //text(angle, 30, 40)
  if (onLoop) {

    p2 = { x: masses[1].x, y: masses[1].y };
    masses[0].grav(null, null, masses[1].mass, p2, dis);
    if (lockerSun) {
      p2 = { x: masses[0].x, y: masses[0].y };
      masses[1].grav(null, null, masses[0].mass, p2, dis);
    }
    spaceStations[0].iterate(stationHeight);
    spaceStations[1].iterate(stationHeight2);
  }

  spaceStations[0].draw(masses[1].x, masses[1].y, masses[1].mass / 3 / 2 + 2, stationHeight);
  spaceStations[1].draw(masses[1].x, masses[1].y, masses[1].mass / 3 / 2 +2, stationHeight2);

  

}

function stationUp() {
  stationHeight += 1;
}
function stationDown() {
  stationHeight -= 1;
}


function stationUp2() {
  stationHeight2 += 1;
}
function stationDown2() {
  stationHeight2 -= 1;
}