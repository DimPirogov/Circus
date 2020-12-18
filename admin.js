

const monthNames = ['',
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
    let year = arr[2];
    let month = arr[1];
    let day = arr[0];
    console.log(year + " " + month + " " + day)

    let daysOfAMonth = (new Date(year, month, 0)).getDate();
    let firstDay = (new Date(year + "-" + month + "-01")).getDay();
    if (firstDay == 0) firstDay = 7;
    console.log("days of he month: " + daysOfAMonth + "   first day: " + firstDay);

    $("#schedule").append(
        $(`<table class ="table m-5 table-responsive table-striped bg-white table-hover" style = "width: 25em;">`)
            .append($("<caption>").text(monthNames[month] + " " + year.toString()))
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
                        let result = "";
                        let weekCount = 1;
                        let x = 3;
                        for (let i = 1; i <= daysOfAMonth; i++) {
                            if (weekCount == 1)
                                result = result.concat("<tr>"); // starts a new row
                            if ((i == 1) && (firstDay != 1)) {
                                for (let j = 1; j < firstDay; j++)
                                    result = result.concat("<td>&nbsp;</td>");
                                weekCount = firstDay;
                            }
                            if (i != day) {
                                if (weekCount == 5 || weekCount == 6) {
                                    result = result.concat(`<td class=\"showDay\" onclick=\"selectDay([${i},${month},${year}])\">`);
                                }
                                else
                                    result = result.concat(`<td onclick=\"selectDay([${i},${month},${year}])\">`);
                            }
                            else
                                result = result.concat(`<td class=\"today\" onclick=\"selectDay([${i},${month},${year}])\">`);
                            result = result.concat(i.toString()).concat("</td>");

                            if (weekCount == 7) {
                                result = result.concat("</tr>");
                                weekCount = 0;
                            }
                            weekCount++;
                        }
                        if (weekCount != 1) {
                            for (let i = weekCount; i <= 7; i++)
                                result = result.concat("<td>&nbsp;</td>");
                            result = result.concat("</tr>");
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
    seeTables(selectedDay);
}

function seeTables(params) {
    clearTables();
    for (let i = 0; i < bookingData.length; i++) {
        console.log("Running through the data " + i)
        if ((params[0] == bookingData[i][0]) && (params[1] == bookingData[i][1]) && (params[2] == bookingData[i][2])) {
            console.log((bookingData[i][4]) + (bookingData[i][3]));
            document.getElementById((bookingData[i][4]).toString() + (bookingData[i][3]).toString()).innerHTML = (bookingData[i][5]);
            document.getElementById((bookingData[i][4]).toString() + (bookingData[i][3]).toString()).style.backgroundColor = "coral"
        }
    }
    for (let i = 0; i <= 7; i++) {
        for (let j = 14; j <= 20; j++) {
            if (document.getElementById(([i].toString() + [j].toString())).innerHTML == "null")
                document.getElementById((bookingData[i][4]).toString() + (bookingData[i][3]).toString()).innerHTML = "empty"
        }
    }
}


function clearTables() {
    for (let i = 0; i <= 7; i++) {
        for (let j = 14; j <= 20; j++) {
            document.getElementById(([i].toString() + [j].toString())).innerHTML = null;
            document.getElementById(([i].toString() + [j].toString())).style.backgroundColor = "white"
        }
    }
}







//day, month, year, table, name
let bookingData = [
    [3, 12, 2020, 14, 0, "Peter"],
    [3, 12, 2020, 14, 1, "Pike"],
    [3, 12, 2020, 19, 0, "Jonas"],
    [10, 12, 2020, 14, 0, "Musse"],
    [10, 12, 2020, 19, 0, "Markus"],
    [10, 12, 2020, 19, 1, "Bugsy"],
    [11, 12, 2020, 15, 0, "Louis"],
    [11, 12, 2020, 15, 1, "Bart"],
    [11, 12, 2020, 15, 2, "Bullen"]
];