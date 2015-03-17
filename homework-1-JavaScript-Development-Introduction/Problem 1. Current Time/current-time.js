    var d = new Date(), minutes = d.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var seconds = d.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var day = "";
    switch (d.getDay()) {
        case 0: day = "Sunday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
        default: day = ""; break;
    }

    var month = "";
    switch (d.getMonth()) {
        case 0: month = "Jan"; break;
        case 1: month = "Feb"; break;
        case 2: month = "Mar"; break;
        case 3: month = "Apr"; break;
        case 4: month = "May"; break;
        case 5: month = "Jun"; break;
        case 6: month = "Jul"; break;
        case 7: month = "Aug"; break;
        case 8: month = "Sep"; break;
        case 9: month = "Oct"; break;
        case 10: month = "Nov"; break;
        case 11: month = "Dec"; break;
    	default: month = ""; break;
    }

    var currentTime = day + ", " + d.getDate() + " " + month + " " + d.getFullYear() + " " + d.getHours() + ":" + minutes + ":" + seconds + " GMT+2";
    console.log(currentTime);