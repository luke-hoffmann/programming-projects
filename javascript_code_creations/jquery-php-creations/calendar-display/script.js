

$(document).on("change", "#month, #year", function() {
    let month = $("#month").val();
    let year =$("#year").val();
    let date = year + "-" + month + "-01"
    date = new Date(date);
    let daysMonth = new Date(year, month,0).getDate();
    console.log(daysMonth);
    let firstDate = date.getDay(1);
    //alert(firstDate);
    content = "<table>";


    thisDay = 1;
    for (i = 0; i < Math.ceil((daysMonth + firstDate) /7); i++) {
        
        content+="<tr>"

        for (let k =0; k < 7 ;k++) {
            if (thisDay > daysMonth) {
                break
            }
            if (k >= firstDate || i != 0) {
                content+= '<td><div class="calendarDate" id="date_' + year+ "_"  + month + "_" + thisDay + '"style="width:125px;height:125px; background-color:lightgrey;">' + thisDay +'</div></td>'
                thisDay++;
            } else {
                content+= '<td> </td>'
            }
            
            //content+= '<td>' +k +'</td>'
        }



        content+= "</tr>"
        
    }

    content+="</table>"
    $("#calendar").html(content)
})



$(document).on("click",".calendarDate" ,  function(){
    console.log($(this).attr("id"));
    splitDate =$(this).attr("id").split("_")
    date = new Date();
    date.setMonth(splitDate[2]-1);
    month = date.toLocaleString('en-US', {month: 'long',});
    outputDate = `${month}, ${splitDate[3]} ${splitDate[1]}`
    $("#divDate").html(outputDate)
    $("#overlay").css("visibility", "visible")
})

$("#closePop").click(function(){
    
    $("#overlay").css("visibility", "hidden")
})