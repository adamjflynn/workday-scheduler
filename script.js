//load today's date//

const date = document.getElementById('date');

function updateTime() {
    const now = moment().format('MMMM Do YYYY, h:mm:ss a');;

    date.textContent = "Today's date is: " + now; 
};

setInterval(updateTime, 1000);


