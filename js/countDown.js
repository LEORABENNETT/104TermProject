"use strict";

countDown();
setInterval(countDown, 1000)

function countDown() {

    var currentDate = new Date();
    var dateStr = currentDate.toLocaleDateString();
    var timeStr = currentDate.toLocaleTimeString();
    document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;
    var targetDay = 6;
    var daysUntilTargetDay = (targetDay - currentDate.getDay() + 7) % 7;
    var targetDate = new Date(currentDate.getTime() + (daysUntilTargetDay * 24 * 60 * 60 * 1000));
    var remainingTime = targetDate.getTime() - currentDate.getTime();

    var remainingDays = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
    var remainingHours = Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var remainingMinutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
    var remainingSeconds = Math.floor((remainingTime % (60 * 1000)) / 1000);


    document.getElementById("days").textContent = remainingDays;
    document.getElementById("hrs").textContent = remainingHours;
    document.getElementById("mins").textContent = remainingMinutes;
    document.getElementById("secs").textContent = remainingSeconds;
}