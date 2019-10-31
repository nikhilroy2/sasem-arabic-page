var countDownDate = new Date('Feb 8, 2020 15:37:25').getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance/(1000 * 60 * 60 * 24));
    
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000) ;
    document.querySelector('.timeDay').innerHTML = days;
    document.querySelector('.timeHour').innerHTML = hours;
    document.querySelector('.timeMin').innerHTML = minutes;
    document.querySelector('.timeSec').innerHTML = seconds;
}, 1000)

document.querySelector('video').volume = '.05'