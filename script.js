const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Inpute Min with Todays Date
const today = new Date().toISOString().split("T")[0];

dateEl.setAttribute("min", today);

// populatae countdown / complete UI
function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log("distance", distance);
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    // poplulatae countdown
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    //hide input
    inputContainer.hidden = true;
    //show countdown
    countdownEl.hidden = false;
  }, second);
}

// takes values from form input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);
  //check for valid date
  if (countdownDate === "") {
    alert("please select a date for the countdown.");
  } else {
    //Get number verison of current date, update DOM
    countdownValue = new Date(countdownDate).getTime();
    console.log("countdown value:", countdownValue);
    updateDOM();
  }
}

//reset all values
function reset() {
  //hide countdowns, show input
  countdownEl.hidden = true;
  inputContainer.hidden = false;
  //stop countdown
  clearInterval(countdownActive);
  //Reset values
  countdownTitle = "";
  countdownDate = "";
}

// event listener

countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
