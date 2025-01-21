let calendarId = "calendar"
let selectMonthId = "month"
let nameCalendar = "tableCalendar";

let months= ["January", "Febuary", "March", "April", "May", "June", "July", "August","September","October","November","December"];

for (let i =0 ; i < 12;i++) {
    $("#month").append("<option value='"+months[i]+"_"+i+"'>"+months[i]+"</option>")
}
$("#month").change(function(){
    $("#"+nameCalendar).remove();
    selectedMonth = Number($("#month").val().split("_")[1]);
    selectedYear = 2024;
    Calendar(calendarId,selectedMonth,selectedYear,selectMonthId);
})
function Calendar(id,month,year,selectMonth,day){
    document.querySelector('#' + selectMonth).value = months[month];
    $("#" + selectMonth).prop("selectedIndex",month)
    

    // month needs to be 0-11
    // day needs to be 1-31
    background="#dde0ab";
    highlightDay = "#feffdf";
    cells = "#97cba9";
    headers = "#668ba4";
    firstDay = new Date(year, month,1);
    console.log(firstDay);
    totalDays = (new Date(year,month+1,0)).getDate();
    counter = 1;
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    content = "<table id='"+nameCalendar+"'style='background-color:"+background+";'> <tr>";
    for (let i =0 ; i < 7;i++) {
        content += "<th style='background-color:"+headers+";'>"  +days[i] + "</th>";
    }
    content += "</tr>"
    first = firstDay.getDay()+1;
    console.log(first);
    for (let i =0; i < 6;i ++) {
        if (counter >totalDays) {
            i=10;
            continue;
        }
        content += "<tr>"
        
        for (let j = 0;j < 7; j++) {
            if (counter <=totalDays) {
                content += "<td "+id+"_"+"calendar"+"_"+counter+"' style='background-color:"
                if (day &&  ((counter==first && day==1)||counter==day) && (first == 0 || counter==first)) {
                    
                    content+= highlightDay;
                } else if (counter <first){
                    
                    content+=background;
                } else {
                    content+=cells;
                }

                content += ";'>"
                if (counter == first) {
                    counter = 1;
                    first = 0;
                }
                if (!(counter < first) ) {
                    
                    content+= counter;
                }
                content+= "</td>"

            } else {
                content += "</tr>";
                i = 10;
            }
            
            counter++;
        }
        
        content += "</tr>"
    }


    content += "</table>"

    $("#" + id).append(content)
}


let today = new Date(Date.now());

Calendar(calendarId,today.getMonth(),today.getFullYear(),selectMonthId);//,today.getDay()+1)