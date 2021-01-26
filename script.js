const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const AlisaBirthDate = "Nov 2, 2021 00:00:00";


function countdown(){
  const BirthDate = new Date(AlisaBirthDate);
  const currentDate = new Date();

  const timeleft = BirthDate - currentDate;


  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);

  if ( timeleft < 0)
    {
      document.getElementById("demo").innerHTML = "Happy BirthDay Alisa";
      document.getElementById("days").style.visibility="hidden";
      document.getElementById("hours").style.visibility="hidden";
      document.getElementById("mins").style.visibility="hidden";
      document.getElementById("seconds").style.visibility="hidden";
      document.getElementById("countdown-Container").style.visibility="hidden";
    }
}



function formatTime(time){
  return time < 10 ? (`0${time}`):time;
}
//initial call
countdown();

setInterval(countdown, 1000);
