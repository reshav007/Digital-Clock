function showTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am_pm = "AM";

    if(h > 12){
        h = h - 12;
        am_pm = "PM";
    }

    h = (h<10)? "0" + h : h;
    m = (m<10)? "0" + m : m;
    s = (s<10)? "0" + s : s; 

    hour = document.getElementById("hour").innerText = h;
    minutes = document.getElementById("minutes").innerText = m;
    seconds = document.getElementById("seconds").innerText = s;
    ampm = document.getElementById("ampm").innerText = am_pm

    setTimeout(showTime,1000);
}

showTime();