//load today's date//
const clock = document.getElementById('clock');

function updateTime() {
    const now = moment().format("MMMM Do YYYY, h:mm:ss a");

    clock.textContent = "Today's date is: " + now; 
};

setInterval(updateTime, 1000);
updateTime();

//Change textarea background color based on time
var checkTime = function () {

