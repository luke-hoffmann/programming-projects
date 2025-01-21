function factorialize(num) {
    if (num === 0 || num ===1) {
        return 1;
    }
    for (let i = num -1; i >= 1; i --) {
        num *= i;
    }
    return num;
}

let numButtons = 16;
let searchButton = Math.round(Math.random() * numButtons);
if (searchButton == 0 ) {
    searchButton = 1;
}
function unblur () {
    $("#buttonDiv").css("filter", "none")
    $("#popup").css("display", "none")
    clicked = []; 
    searchButton = Math.round(Math.random() * numButtons);
    if (searchButton == 0 ) {
        searchButton = 1;
    }
    $("#buttonDiv").empty();
    for (i =0; i < numButtons; i++) {
        if (i % 4 ==0) {
            $("#buttonDiv").append("<br>");
        }   
        $("#buttonDiv").append("<button class='probabilityButton' id='" + "button_"  + (i+1)  + "'style='margin-left:5px;margin-right:5px;margin-bottom:5px;width:100px;height:100px;background-color:lightgreen; display:inline-block;'>" + (i+1) +"</button>");
    }

    let notFound = true;
    $("#factor").html( "Percentage to Click the Good Square: " + 100/ (numButtons-clicked.length));
}
//console.log(searchButton);
for (i =0; i < numButtons; i++) {
    if (i % 4 ==0) {
        $("#buttonDiv").append("<br>");
    }   
    $("#buttonDiv").append("<button class='probabilityButton' id='" + "button_"  + (i+1)  + "'style='margin-left:5px;margin-right:5px;margin-bottom:5px;width:100px;height:100px;background-color:lightgreen; display:inline-block;'>" + (i+1) +"</button>");
}
let clicked = []; 
$("#buttonDiv").append("<h1 id='factor'>" + "Percentage to Click the Good Square: "  + (100/ (numButtons-clicked.length)) + "</h1>") ;
let notFound = true;
$(".probabilityButton").on("click", function() {
    if (notFound ) {
    b = (($(this).attr("id")).split("_")[1]);
    for (i = 0; i< clicked.length; i++) {
        if (Number(b) == clicked[i]) {
            return
        }
    }
    
    clicked.push(b);
    $("#factor").html( "Percentage to Click the Good Square: " + 100/ (numButtons-clicked.length));

    // $("#factor").html(factorialize(numButtons - clicked.length));
    
    if (Number(b) === searchButton) {
        //console.log(Number(b))

        $(this).css("background-color", "gold");  
        $("#buttonDiv").css("filter", "blur(8px)")
       

        $("body").append("<div id='popup'style='posistion:absolute; transform:translate(0px -50%);background-color:red; width:200px; height:150px'> Wow <button type='button' onclick='unblur()'>  Reset</button>  </div>")
        notFound = false;
    } else {
        $(this).css("background-color", "red");
    }
}


})