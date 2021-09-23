//load today's date//

const date = document.getElementById('date');

function updateTime() {
    const now = moment().format('MMMM Do YYYY, h:mm:ss a');;
   // const humanReadable = now.format('LL');

    date.textContent = "Today's date is: " + now; 
};

setInterval(updateTime, 1000);


//make divs editable//
