// Boolean declarations

let isShownHome = true;
let isShownNotes = false;

// Element declarations CONST

const buttonHome = document.getElementById('buttonHome');
const buttonNotes = document.getElementById('buttonNotes');
const body = document.querySelector('body');
const home = document.getElementById('home');
const footer = body.children[1];

// Element declarations LET

let notes = document.querySelectorAll('.notes');

// Event listeners

buttonHome.addEventListener('click', function() {

    if (isShownHome == false) {

        console.log("Welcome to home!");

        home.style.display = 'block';

        notes.forEach(function(element) {
            element.style.display = 'none';
        });

        isShownHome = true;
        isShownNotes = false;

    } else {
        console.log("Your at home already!");
    }
});

buttonNotes.addEventListener('click', function() {

    if (isShownNotes == false) {

        home.style.display = 'none';

        const newDiv = document.createElement('div');

        newDiv.classList.add('notes');

        newDiv.textContent = 'This is the data saved at local storage';

        body.insertBefore(newDiv, footer);

        notes = document.querySelectorAll('.notes');

        isShownNotes = true;
        isShownHome = false;

    } else {

        const newDiv = document.createElement('div');

        newDiv.classList.add('notes');

        newDiv.textContent = 'This is new data created.';

        body.insertBefore(newDiv, footer);

        notes = document.querySelectorAll('.notes');
    }
});

document.addEventListener('DOMContentLoaded', function() {

    // Automatically updates year at footer

    function getCurrentYear() {

        const currentYear = document.getElementById('currentYear');
        const currentDate = new Date();
        const currentYearValue = currentDate.getFullYear();
    
        currentYear.innerText = currentYearValue.toString();
    }
  
    getCurrentYear();
  });
  