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

// Element declarations EXPERIMENTAL

let notesList = ["This is your list of task!", "Task 1", "Task 2", "Task 3"];

let notesListString = JSON.stringify(notesList);

localStorage.setItem('data', notesListString);

// Event listeners ONCLICK

buttonHome.addEventListener('click', function() {

    // Home button

    if (isShownHome == false) {

        console.log("Welcome to home!");

        home.style.display = 'block';

        notes.forEach(function(element) {
            element.remove();
        });

        isShownHome = true;
        isShownNotes = false;

    } else {
        console.log("Your at home already!");
    }
});

buttonNotes.addEventListener('click', function() {

   // Notes button

    if (isShownNotes == false) {

        home.style.display = 'none';

        const newDiv = document.createElement('div');

        newDiv.classList.add('notes');

        // EXPERIMENTAL

        const data = localStorage.getItem('data');

        const currentArray = JSON.parse(data);

        newDiv.textContent = currentArray;

        // EXPERIMENTAL

        body.insertBefore(newDiv, footer);

        notes = document.querySelectorAll('.notes');

        isShownNotes = true;
        isShownHome = false;

    } else {

        const newDiv = document.createElement('div');
        newDiv.classList.add('notes');

        // EXPERIMENTAL

        const currentArrayString = localStorage.getItem('data');
        const currentArray = JSON.parse(currentArrayString);

        const newNote = currentArray.length;
        currentArray.push("Task " + newNote);

        newDiv.textContent = currentArray;

        const updatedArrayString = JSON.stringify(currentArray);
        localStorage.setItem('data', updatedArrayString);

        // EXPERIMENTAL

        body.insertBefore(newDiv, footer);

        notes = document.querySelectorAll('.notes');
    }
});

// Event listeners ONLOAD

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
  