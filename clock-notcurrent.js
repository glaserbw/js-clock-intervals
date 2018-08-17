//current time attempt
// var currentTime = new Date();
// var currentSeconds = currentTime.getTime();
// var currentMinutes = currentTime.getTime();

//create variables for my hands in index.html 
var hourHand = document.getElementById("hour");
var minuteHand = document.getElementById("minute");
var secondHand = document.getElementById("second");

//define rotation logic for seconds hand
var secondDegrees = 0;

var rotateSecondHand = function(){
	secondHand.style.transform = "rotate(" + (secondDegrees += 6) + "deg)";
}

//invoke interval for seconds hand
setInterval(rotateSecondHand, 1000);

//define rotation logic for minutes hand
var minuteDegrees = 0;

var rotateMinuteHand = function(){
	minuteHand.style.transform = "rotate(" + (minuteDegrees +=6) + "deg)";
}

//invoke interval for minutes hand
setInterval(rotateMinuteHand, 60000); 

//define rotation logic for hour hand
var hourDegrees = 0;

var rotateHourHand = function(){
	hourHand.style.transform = "rotate(" + (hourDegrees +=30) + "deg)";
}

//invoke interval for hour hand
setInterval(rotateHourHand, 3600000); 