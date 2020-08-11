function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds();
    var mon = date.getUTCMonth();
    var day = date.getDate();
    var y = date.getUTCFullYear();
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    mon = mon + 1;


    mon = (mon < 10) ? "0" + mon : mon;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    var time = mon + "/" + day + "/" + y + " " + h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();