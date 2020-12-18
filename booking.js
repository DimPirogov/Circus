

const monthNames=['',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function calendar(arr) {
    let year=arr[2];
    let month=arr[1];
    let day=arr[0];
    console.log(year+" "+ month + " "+ day)

    let daysOfAMonth=(new Date(year, month, 0)).getDate();
    let firstDay=(new Date(year + "-" + month + "-01")).getDay();
    if(firstDay==0) firstDay=7;
    console.log("days of he month: "+daysOfAMonth+"   first day: "+firstDay);

    $("#schedule").append(
        $(`<table class ="table table-responsive table-striped bg-white table-hover" style = "width: 25em;">`)
            .append($("<caption>").text(monthNames[month]+" "+year.toString()))
            .append(
                $("<tbody>")
                    .append(
                        $("<tr>")
                            .append($(`<th style="width: 14.3%;">`).text("Mon"))
                            .append($(`<th style="width: 14.3%;">`).text("Tue"))
                            .append($(`<th style="width: 14.3%;">`).text("Wed"))
                            .append($(`<th style="width: 14.3%;">`).text("Thu"))
                            .append($(`<th style="width: 14.3%;">`).text("Fri"))
                            .append($(`<th style="width: 14.3%;">`).text("Sat"))
                            .append($(`<th style="width: 14.3%;">`).text("Sun"))
                    )
                    .append(function () {
                            let result="";
                            let weekCount=1;
                            let x = 3;
                            for(let i=1;i<=daysOfAMonth;i++) {
                                if(weekCount==1)
                                    result=result.concat("<tr>"); // starts a new row
                                if( (i==1) && (firstDay!=1) ) {
                                    for(let j=1;j<firstDay;j++)
                                        result=result.concat("<td>&nbsp;</td>");
                                    weekCount=firstDay;
                                }
                                if(i!=day){
                                    if(weekCount==5 || weekCount==6){
                                        result=result.concat(`<td class=\"bg-info text-white\" onclick=\"selectDay([${i},${month},${year}])\">`);
                                    }
                                    else
                                    result=result.concat(`<td onclick=\"selectDay([${i},${month},${year}])\">`);
                                }
                                else
                                    result=result.concat(`<td class=\"bg-warning text-white\" onclick=\"selectDay([${i},${month},${year}])\">`);
                                result=result.concat(i.toString()).concat("</td>");

                                if(weekCount==7) {
                                    result=result.concat("</tr>");
                                    weekCount=0;
                                }
                                weekCount++;
                            }
                            if(weekCount!=1) {
                                for(let i=weekCount;i<=7;i++)
                                    result=result.concat("<td>&nbsp;</td>");
                                result=result.concat("</tr>");
                            }
                            return result;
                        }
                    )
            )
    );
}
let selectedDay = [0, 0, 0]

function selectDay([day, month, year]) {
    console.log("New day selected");
    selectedDay = [day, month, year];
    console.log(selectedDay);
    $("#timetable").removeClass("d-none").addClass("d-block");
    $("#hiddenText").removeClass("d-none").addClass("d-block");
    checkAvailability(selectedDay);
}

function checkAvailability(params) {
    let i = 0;
 clearTimetable();
 console.log(`The date is ${params[0]}`);
    for(i = 0; i < preData.length; i++) {
        if ((params[0] == preData[i][0]) && (params[1] == preData[i][1]) && (params[2] == preData[i][2]))
        {
            if(preData[i][4] >= 8){
            document.getElementById(preData[i][3]).innerHTML ="Full!";
            document.getElementById(preData[i][3]).style.backgroundColor ="red"
             document.getElementById(preData[i][3]).style.color ="white"
            }
            else {
                document.getElementById(preData[i][3]).innerHTML ="Book table!"
                document.getElementById(preData[i][3]).style.backgroundColor ="green"
                document.getElementById(preData[i][3]).style.color ="white"
            }
        }
    }
    for (let j =14; j <= 20; j++) 
    {
        if(document.getElementById(j).innerHTML === "null") 
        { document.getElementById(j).innerHTML = "Book table!";
        document.getElementById(j).style.backgroundColor ="green"
        document.getElementById(j).style.color ="white"
    }
    }
}

function makeLessOpaque() {
    for (let j =14; j <= 19; j++) 
    {
        document.getElementById(j).style.opacity = 0.1;
    }
}



function clearTimetable() {
    for (let j =14; j <= 20; j++) 
    {
        document.getElementById(j).innerHTML = "null"
        document.getElementById(j).style.opacity = 1;
    }
}




//day, month, year, time, no. of tables booked
let preData = [
[3, 12, 2020, 14, 6],
[3, 12, 2020, 17, 6],
[3, 12, 2020, 19, 2],
[10, 12, 2020, 14, 6],
[10, 12, 2020, 19, 8],
[10, 12, 2020, 20, 6],
[18, 12, 2020, 14, 6],
[18, 12, 2020, 15, 6],
[18, 12, 2020, 16, 8],
[19, 12, 2020, 14, 8],
[19, 12, 2020, 16, 8],
[19, 12, 2020, 20, 8]
];




















































// function timetable ()
// {
//     console.log("Opening the timetable");
//     $("#schedule").append(
//         $("<table>").append($("<caption>").text("Book a table"))
//         .append(
//             $("<tbody>")
//                     .append(
//                         $("<tr>")
//                         .append($("<th scope = \"col\">").text("Time"))
//                         .append($("<th scope = \"col\">").text("Show"))
//                         .append($("</tr>").append(
//                             $("<tr>")
//                             .append($("<td>").text("14:00"))
//                             .append($("<td>").text("No"))
//                             .append($("</tr>").append(
//                                 $("<tr>")
//                             .append($("<td>").text("14:00"))
//                             .append($("<td>").text("No"))
//                             .append($("</tr>").append(
//                                 $("<tr>")
//                                 .append($("<td>").text("14:00"))
//                                 .append($("<td>").text("No"))
//                                 .append($("</tr>").append(
//                                     $("<tr>")
//                                     .append($("<td>").text("14:00"))
//                                     .append($("<td>").text("No"))
//                                     .append($("</tr>").append(
//                                         $("<tr>")
//                                         .append($("<td>").text("14:00"))
//                                         .append($("<td>").text("No"))
//                                         .append($("</tr>").append(
//                                             $("<tr>")
//                                             .append($("<td>").text("14:00"))
//                                             .append($("<td>").text("No"))
//                                             .append($("</tr>").append(
//                                                 $("<tr>")
//                                                 .append($("<td>").text("14:00"))
//                                                 .append($("<td>").text("No"))
//                                                 .append($("</tr>").append(
                            

//     )))))))))))))))))));
// }