// Element declarations CONST

const body = document.querySelector('body');
const footer = document.getElementById('footer');

const home = document.getElementById('home');
const notes = document.getElementById('notes');

const buttonHome = document.getElementById('buttonHome');
const buttonNotes = document.getElementById('buttonNotes');

const notesTitleInput = document.getElementById('notesTitleInput');
const notesDateInput = document.getElementById('notesDateInput');
const notesTaskInput = document.getElementById('notesTaskInput');

const notesAddButton = document.getElementById('notesAddButton');
const notesClearButton = document.getElementById('notesClearButton');

const addNoteHeading = document.getElementById('addNoteHeading');
const myNoteHeading = document.getElementById('myNoteHeading');

// Value declarations LET

let notesList = [
    ["Christmass", "December 25", "Celebrate the Christmas holidays and enjoy!"],
    ["New Year", "January 1", "Have fun and celebrate the new year!"],
    ["Valentine's", "February 14", "Share the love on this special day!"],
    ["Death", "Soon", "Make each moment count."]
];

let notesListString = JSON.stringify(notesList);

let isShownHome = true;
let isShownNotes = false;

let memoLastPage = 'home_Memo';
let noteLastScroll = 'add_Notes';

// Data declarations

localStorage.setItem('data', notesListString);



// Event listeners ONCLICK

buttonHome.addEventListener('click', function() {

    // Home button

    if (isShownHome == false) {

        // Home click event if not already at Home

        home.style.display = 'block';
        notes.style.display = 'none';

        notesDiv.forEach(function(element) {
            element.remove();
        });

        isShownHome = true;
        isShownNotes = false;

    } else {

        // Home click event if already at Home

        console.log("Your at Home already!");
    }
});


buttonNotes.addEventListener('click', function() {

   // Notes button

    if (isShownNotes == false) {

        // Notes click event if not already at Notes

        home.style.display = 'none';
        notes.style.display = 'block';

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

        notesDiv = document.querySelectorAll('.notes');

        isShownNotes = true;
        isShownHome = false;

    } else {

        // Notes click event if already at Notes

        console.log('Your at Notes already!');
    }
});


notesAddButton.addEventListener('click', function() {

        // Add Notes button

        const notesTitleInputValue = notesTitleInput.value;
        const notesDateInputValue = notesDateInput.value;
        const notesTaskInputValue = notesTaskInput.value;
        
        if (notesTitleInputValue != '' && notesDateInputValue != '' && notesTaskInputValue != '') {

            // Add Notes when Input is complete

            notesDiv.forEach(function(element) {
                element.remove();
            });
    
            const data = localStorage.getItem('data');
    
            const currentArray = JSON.parse(data);
    
            currentArray.push([notesTitleInputValue, notesDateInputValue, notesTaskInputValue]);
    
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
    
            const updatedArrayString = JSON.stringify(currentArray);
            localStorage.setItem('data', updatedArrayString);
    
            notesDiv = document.querySelectorAll('.notes');
    
            notesTitleInput.value = '';
            notesDateInput.value = '';
            notesTaskInput.value = '';

        } else {

            // Alert when Input is Incomplete

            alert('You need to complete all forms!');

        }
});


// Event listeners SCROLL

window.addEventListener('scroll', function() {

    let scrollPosition = window.scrollY;
    let noteLastScroll = 'add_Notes';

    let myNoteHeadingRect = myNoteHeading.getBoundingClientRect();
    let myNoteHeadingRectTop = myNoteHeadingRect.top;

    if (scrollPosition > myNoteHeadingRectTop) {
        noteLastScroll = 'my_notes';
        console.log(noteLastScroll);
    } else {
        noteLastScroll = 'add_notes';
        console.log(noteLastScroll);
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