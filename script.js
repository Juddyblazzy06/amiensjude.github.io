const dateElement = document.querySelector("#currentDayofWeek");
const timeElement = document.querySelector("#currentUTCTime");

function formatTime(date) {
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const isAm = date.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}


function formatDate(date) {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MONTHS = ["January", "Febuuary", "March", "April", "May", "June", "July", "September", "October", "November", "December"];

    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

    setInterval (() => {
        const now = new Date();

        dateElement.textContent = formatDate(now);
        timeElement.textContent = formatTime(now);
    }, 200);
//function updateDayOfWeek() {
    //const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //const today = new Date();
    //const dayOfWeek = daysOfWeek[today.getDay()];
//
  //  document.querySelector('[data-testid="currentDayofTheWeek"]').textContent = dayOfWeek;
//}
//
//
//function updateUTCTime() {
  //  const currentTimeUTC = Date.now();
//
  //  document.querySelector('[data-testid="currentUTCTime"]').textcontent = currentTimeUTC
//}
//
//updateDAyofWeek();
//updateUTCTime();
