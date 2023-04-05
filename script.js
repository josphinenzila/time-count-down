let daysElem = document.getElementById("days");
let hoursElem = document.getElementById("hours");
let minsElem = document.getElementById("minutes");
let secsElem = document.getElementById("seconds");

const countDown = () => {
  let newYearDate = new Date("1 Jan 2024");
  let currentDate = new Date();

  //get the difference in milliseconds since 1st jan 1970
  let diff = newYearDate - currentDate;

  //convert milliseconds to seconds
  let totalSeconds = diff / 1000;

  //To get the days, divide seconds with 60secs in a minute, 60 mins in an hour, 24 hrs in a day
  let days = Math.floor(totalSeconds / 60 / 60 / 24);
  //To get hours, you divide seconds with 60 secs and 60 minutes and to get remaining hours you do a modulo 24
  let hours = Math.floor(totalSeconds / 3600) % 24;
  //to get minutes, you divide by 60 secs, the number of seconds in a minute, the modulo 60, to get the remaining mins in an hour
  let minutes = Math.floor(totalSeconds / 60) % 60;
  //To get seconds you do modulo 60
  let seconds = Math.floor(totalSeconds % 60);

  daysElem.innerHTML = formatTime(days);
  hoursElem.innerHTML = formatTime(hours);
  minsElem.innerHTML = formatTime(minutes);
  secsElem.innerHTML = formatTime(seconds);
};
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
countDown();
setInterval(countDown, 1000);
