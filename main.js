var now = new Date();
var seconds = now.getSeconds();
var minutes = now.getMinutes();
var hours = now.getHours();



sec_adder = function() {
	seconds += 1;
var date_sec = seconds % 60; 
now.setSeconds(date_sec);

if (date_sec == 0) {minutes += 1;};
var date_min = minutes % 60;
now.setMinutes(date_min);

if (date_min == 0 && date_sec == 0) {hours += 1;};
var date_hours = hours % 60;
now.setHours(date_hours);


// document.querySelector(".clock").textContent = now;
console.log(date_sec);
console.log("minutes:" + date_min);
document.querySelector(".hours").textContent = now.getHours();
document.querySelector(".minutes").textContent = now.getMinutes();
document.querySelector(".seconds").textContent = now.getSeconds();
};

setInterval(sec_adder,1000);



