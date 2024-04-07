
let clock = document.querySelector(".clock");

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleString(); // there are other two methods also 1) for time only{tolocaletimestring()} and 2) for time only(tolocaletimestring)
},1000);