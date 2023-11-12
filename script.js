// Boolean declarations

let isShownHome = true;
let isShownNotes = false;

// Element declarations CONST

const buttonHome = document.getElementById('buttonHome');
const buttonNotes = document.getElementById('buttonNotes');
const body = document.querySelector('body');
const home = document.getElementById('home');
const footer = document.getElementById('footer');
const notes = document.getElementById('notes');

// Element declarations LET

let notesDiv = document.querySelectorAll('.notes');
let notesList = [["Christmass!", "December 25, 2023", "Celebrate the christmass holiday and enjoy!"], ["New Year!", "January 1, 2024", "Have fun and celebrate the new year!"], ["Death.", "Soon.", "Make each moment count."]];
let notesListString = JSON.stringify(notesList);

// Data declarations

localStorage.setItem('data', notesListString);

// Event listeners ONCLICK

buttonHome.addEventListener('click', function() {

    // Home button

    if (isShownHome == false) {

        // Home click if not at Home

        home.style.display = 'block';
        notes.style.display = 'none';

        notesDiv.forEach(function(element) {
            element.remove();
        });

        isShownHome = true;
        isShownNotes = false;

    } else {

        // Home click if at Home

        console.log("Your at home already!");
    }
});

buttonNotes.addEventListener('click', function() {

   // Notes button

    if (isShownNotes == false) {

        // Notes click if not at Notes

        home.style.display = 'none';
        notes.style.display = 'block';
    
        // EXPERIMENTAL

        const data = localStorage.getItem('data');

        const currentArray = JSON.parse(data);

        currentArray.forEach(value => {

            const newDiv = document.createElement('div');
            const newDivTitleAndDate = document.createElement('div');
            const newPTitle = document.createElement("p");
            const newPDate = document.createElement("p");
            const newPTask = document.createElement("p");
            const hr = document.createElement("hr");

            newDiv.classList.add('notes');
            newDivTitleAndDate.classList.add('notesTitleAndDate');
            newPTask.classList.add('notesTask');

            newPTitle.textContent = value[0];
            newPDate.textContent = value[1];
            newPTask.textContent = value[2];

            newDivTitleAndDate.appendChild(newPTitle);
            newDivTitleAndDate.appendChild(newPDate);

            newDiv.appendChild(newDivTitleAndDate);
            newDiv.appendChild(hr);
            newDiv.appendChild(newPTask);

            body.insertBefore(newDiv, footer);
        });

        // EXPERIMENTAL

        notesDiv = document.querySelectorAll('.notes');

        isShownNotes = true;
        isShownHome = false;

    } else {

        // Notes click if at Notes

        const newDiv = document.createElement('div');
        newDiv.classList.add('notes');

        notesDiv.forEach(function(element) {
            element.remove();
        });

        // EXPERIMENTAL

        const data = localStorage.getItem('data');

        const currentArray = JSON.parse(data);

        const currentArrayLength = currentArray.length + 1;

        currentArray.push(["Task " + currentArrayLength + " Title", "Task " + currentArrayLength + " Date", "Task " + currentArrayLength]);

        currentArray.forEach(value => {

            const newDiv = document.createElement('div');

            newDiv.classList.add('notes');

            newDiv.textContent = value;

            body.insertBefore(newDiv, footer);
        });

        const updatedArrayString = JSON.stringify(currentArray);
        localStorage.setItem('data', updatedArrayString);

        // EXPERIMENTAL

        notesDiv = document.querySelectorAll('.notes');
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
  