// Function to format and display the current date and time
function updateDateTime() {
    const dateElement = document.querySelector('.interactive.date');
    const timeElement = document.querySelector('.interactive.time');
    const now = new Date();

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const formattedDate = now.toLocaleDateString(undefined, dateOptions);
    const formattedTime = now.toLocaleTimeString(undefined, timeOptions);

    dateElement.textContent = `Date: ${formattedDate}`;
    timeElement.textContent = `Time: ${formattedTime}`;
}

// Initial call to display the date and time immediately
updateDateTime();

// Set interval to update the date and time every second
setInterval(updateDateTime, 1000);
