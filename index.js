let timerInterval;

function startCountdown() {
    const userInput = document.getElementById("datetime-picker").value;
    const targetDate = new Date(userInput).getTime();

    if (isNaN(targetDate)) {
        alert("Please select a valid date and time.");
        return;
    }

    clearInterval(timerInterval);
    timerInterval = setInterval(() => updateCountdown(targetDate), 1000);
    updateCountdown(targetDate);
}

function updateCountdown(targetDate) {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerHTML = "The event has ended";
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}
