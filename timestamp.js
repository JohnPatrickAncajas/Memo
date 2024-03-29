// Element declarations CONST

let currentWeekday = document.getElementById('currentWeekday');
let currentTime = document.getElementById('currentTime');
let currentDate = document.getElementById('currentDate');
let currentPeriod = document.getElementById('currentPeriod');

let quote = document.getElementById('quote');

// Functions

function updateTimestamp() {

    const NOW = new Date();
    const SECONDS = NOW.getSeconds().toString().padStart(2, '0');
    const MINUTES = NOW.getMinutes().toString().padStart(2, '0');
    const HOURS = NOW.getHours();
    const DATE = NOW.getDate();
    const DAY = NOW.getDay();
    const MONTH = NOW.getMonth() + 1;
    const YEAR = NOW.getFullYear();

    const hoursValue = (HOURS % 12) || 12;
    const dayPeriod = HOURS < 12 ? "AM" : "PM";

    currentTime.innerText = `${hoursValue}:${MINUTES}:${SECONDS} ${dayPeriod}`;

    // This part controls the quotes every hour

    const quotesMap = new Map([
        [0, "In the embrace of midnight, dreams come alive."],
        [1, "Under the canopy of night, stars whisper their secrets."],
        [2, "In the depth of night, find serenity in the quiet."],
        [3, "The night holds mysteries, waiting to be uncovered."],
        [4, "As the world sleeps, the night sky paints its canvas."],
        [5, "Night's silence welcomes the first light of dawn."],
        [6, "With the dawn's arrival, new opportunities arise."],
        [7, "Morning sun heralds a brand new day with endless promise."],
        [8, "In the gentle morning light, find your inner strength."],
        [9, "Morning is a canvas; paint it with your aspirations."],
        [10, "In the heart of morning, discover your purpose and passion."],
        [11, "Amid the morning hustle, nurture your inner calm."],
        [12, "Noon sun shines, fueling the fire of possibilities."],
        [13, "In the heart of the day, seize the moment and shine."],
        [14, "Afternoon unveils the world's beauty in full spectrum."],
        [15, "The sun may wane, but your spirit continues to blaze."],
        [16, "As the day ages, find peace in the afternoon's grace."],
        [17, "In the golden hour, treasure the beauty of the afternoon."],
        [18, "Dusk descends, painting the world in warm hues."],
        [19, "Evening's arrival marks the transition to tranquil night."],
        [20, "In the quiet of the night, dreams come to life."],
        [21, "Night's serenade invites you to explore the cosmos."],
        [22, "Under the night's embrace, find your inner universe."],
        [23, "In the stillness of night, introspection and wonder reside."]
    ]);
    
    const quoteText = quotesMap.get(HOURS) || "Invalid hour";
    
    quote.innerText = quoteText;

    // Controls the theme that depends on the period of day

    let greetingPeriod = "evening";

    if (HOURS >= 0 && HOURS < 6) {
    } else if (HOURS >= 6 && HOURS < 12) {
        greetingPeriod = "morning";
    } else if (HOURS >= 12 && HOURS < 18) {
        greetingPeriod = "afternoon";
    } else if (HOURS >= 18 && HOURS < 24) {
        greetingPeriod = "evening";
    }

    // Handles the greeting

    const dayMap = new Map([
        [0, "Sunday"],
        [1, "Monday"],
        [2, "Tuesday"],
        [3, "Wednesday"],
        [4, "Thursday"],
        [5, "Friday"],
        [6, "Saturday"]
    ]);

    const weekday = dayMap.get(DAY) || "Invalid day";

    currentWeekday.innerText = `${weekday}`;

    const monthMap = new Map([
        [0, "January"],
        [1, "February"],
        [2, "March"],
        [3, "April"],
        [4, "May"],
        [5, "June"],
        [6, "July"],
        [7, "August"],
        [8, "September"],
        [9, "October"],
        [10, "November"],
        [11, "December"]
    ]);

    const monthPeriod = monthMap.get(MONTH - 1) || "Invalid month";

    let lastDigitType = "th";

    const lastDigit = DATE % 10;
    secondToLastDigit = Math.floor(DATE / 10) % 10;
      
    if (lastDigit === 1 && secondToLastDigit !== 1) {
        lastDigitType = "st";
    } else if (lastDigit === 2 && secondToLastDigit !== 1) {
        lastDigitType = "nd";
    } else if (lastDigit === 3 && secondToLastDigit !== 1) {
        lastDigitType = "rd";
    } else {
        lastDigitType = "th";
    }

    currentPeriod.innerText = `${greetingPeriod}`;

    currentDate.innerText = `${DATE}${lastDigitType} of ${monthPeriod}, ${YEAR}`;
}

setInterval(updateTimestamp, 1000);

updateTimestamp();