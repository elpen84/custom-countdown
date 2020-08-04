const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

let countdownTitle = "";
let countdownDate = "";

// Set Date Inpute Min with Todays Date
const today = new Date().toISOString().split("T")[0];

dateEl.setAttribute("min", today);

// takes values from form input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);
}

// event listener

countdownForm.addEventListener("submit", updateCountdown);
