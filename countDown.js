"use strict";

countDown();
setInterval("countDown(), 1000")

function countDown() {

    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();
    document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;
    var targetDay = 6;
    var daysUntilShabbos = (targetDay - currentDate.getDay() + 7) % 7;
    var targetDate = new Date(currentDate.getTime() + (daysUntilShabbos * 24 * 60 * 60 * 1000));
    var remainingTime = targetDate.getTime() - currentDate.getTime();

    var remainingDays = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
    var remainingHours = Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var remainingMinutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
    var remainingSeconds = Math.floor((remainingTime % (60 * 1000)) / 1000);


    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}