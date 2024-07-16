// let days = document.getElementById("days");
// let hours = document.getElementById("hours");
// let minutes = document.getElementById("minutes");
// let seconds = document.getElementById("seconds");

let countdown = new Date("july 20,2024 00:00:00").getTime();
let now = new Date().getTime();
let gap = countdown-now;

let x=setInterval(function(){
    let now = new Date().getTime();
    let gap = countdown-now;

    let day = Math.floor(gap/(24*60*60*1000));
    let hour = Math.floor((gap%(24*60*60*1000))/(60*60*1000));
    let minute = Math.floor((gap%(1000*60*60))/(60*1000));
    let second = Math.floor((gap%(1000*60))/1000);

    days.innerHTML = day;
    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;
},1000);
