// get the date and time
const clock = document.getElementById('clock');

function updateTime() {
    const now = moment().format("MMMM Do YYYY, h:mm:ss a");

    clock.textContent = "Today's date is: " + now; 
};

setInterval(updateTime, 1000);
updateTime();

// change colorfor text area depending in the time

$(".description").each(function() {
    var currentTime = parseInt(moment().hour());
    var timeBlockElements = parseInt($(this).attr("id").replace("div", ""))
    if (currentTime > timeBlockElements) {
        $(this).removeClass("present");
        $(this).addClass("past");
    } else if (currentTime === timeBlockElements) {
        $(this).removeClass("future");
        $(this).addClass("present");
    } else if (currentTime < timeBlockElements) {
        $(this).addClass("future");
    }
})

checkTime();

// use local storage for saving tasks
var displayTasks = function() {
    currentTasks = JSON.parse(localStorage.getItem("tasks"));
    if (!currentTasks) {
        currentTasks = {
            9:"",
            10:"",
            11:"",
            12:"",
            13:"",
            14:"",
            15:"",
            16:"",
            17:"",
        };
    } else {
        $.each(currentTasks, function(id, text){
            $("#div" + id).text(text);
        })
    }
}