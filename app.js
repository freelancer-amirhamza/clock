
// selector 
let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');
let dgClock = document.querySelector('.dg-clock span');
let dayText = document.querySelector('.date #day');
let dateText = document.querySelector('.date #date');

// set time clock 1
setInterval(()=>{
let clock = new Date();
let hh = clock.getHours() * 30;
let mm = clock.getMinutes() * 6;
let ss = clock.getSeconds() * 6;


hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform =   `rotateZ(${ss}deg)`;


// set time clock 2

let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
let dayNight = "AM"; 
if(hours > 12){
    hours = hours -12;
    dayNight = "PM"
};
if(hours == 0){
    hours = hours = 12;
}
if(hours < 10){
    hours = "0" + hours;
}
if(minutes < 10) {
    minutes = "0" + minutes;
};
if (seconds < 10 ){
    seconds = "0" + seconds;
}
dgClock.textContent = hours + "⁚" + minutes + "⁚" + seconds + " " + dayNight;

// set date

const date = new Date();
const dayNumber = date.getDate();
const years = date.getFullYear();
const dayName = date.toLocaleString("default", {weekday: 'long'});
const monthName = date.toLocaleString("default", {month: "long"});

dayText.textContent = dayName; 
dateText.textContent  = dayNumber + " " + monthName + " " + years;

},1000)





