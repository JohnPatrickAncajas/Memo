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
const notesEditButton = document.getElementById('notesEditButton');

const addNoteHeading = document.getElementById('addNoteHeading');
const myNoteHeading = document.getElementById('myNoteHeading');

// Value declarations LET

let isShownHome = true;
let isShownNotes = false;

let editing = false;

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

        console.log('Your at Home already!');
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
            const newPTitle = document.createElement('p');
            const newPDate = document.createElement('p');
            const newPTask = document.createElement('p');
            const hr = document.createElement('hr');

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
                const newPTitle = document.createElement('p');
                const newPDate = document.createElement('p');
                const newPTask = document.createElement('p');
                const hr = document.createElement('hr');
    
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


notesEditButton.addEventListener('click', function() {

    // Edit Notes button

    if (editing == false) {

        loadEditNotes()
        

    } else {

        loadNotes()
        
        editing = false;

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

    // Initialize array of notes

    const startup = localStorage.getItem('startup');

    if (startup == 'true') {
        localStorage.setItem('startup', 'false');
    } else {
        localStorage.setItem('startup', 'true');
    }

    if (startup == 'true') {

        let notesList = [
            ["Christmas", "December 25", "Celebrate the Christmas holidays and enjoy!"],
            ["New Year", "January 1", "Have fun and celebrate the new year!"],
            ["Valentine's Day", "February 14", "Share the love on this special day!"],
            ["Death", "Soon", "Make each moment count."]
        ];

        let notesListString = JSON.stringify(notesList);

        localStorage.setItem('data', notesListString);
    }
});


// Functions 

function loadNotes() {

    notesDiv.forEach(function(element) {
        element.remove();
    });

    const data = localStorage.getItem('data');
    
    const currentArray = JSON.parse(data);

    currentArray.forEach(value => {

        const newDiv = document.createElement('div');
        const newDivTitleAndDate = document.createElement('div');
        const newPTitle = document.createElement('p');
        const newPDate = document.createElement('p');
        const newPTask = document.createElement('p');
        const hr = document.createElement('hr');

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
}

function loadEditNotes() {

    notesDiv.forEach(function(element) {
        element.remove();
    });

    const data = localStorage.getItem('data');
    
    const currentArray = JSON.parse(data);

    currentArray.forEach((value, index) => {

        const newDiv = document.createElement('div');
        const newDivTitleAndDate = document.createElement('div');
        const newPTitle = document.createElement('p');
        const newPDate = document.createElement('p');
        const newPTask = document.createElement('p');
        const hr1 = document.createElement('hr');
        const hr2 = document.createElement('hr');
        const newUpDownRemove = document.createElement('div');
        const newUpButton = document.createElement('button');
        const newDownButton = document.createElement('button');
        const newRemoveButton = document.createElement('button');
        
        newDiv.classList.add('notes');
        newDivTitleAndDate.classList.add('notesTitleAndDate');
        newUpDownRemove.classList.add('notesUpDownRemove');
        newPTask.classList.add('notesTask');

        newPTitle.textContent = value[0];
        newPDate.textContent = value[1];
        newPTask.textContent = value[2];

        newUpButton.innerText = 'Up';
        newDownButton.innerText = 'Down';
        newRemoveButton.innerText = 'Remove';

        newUpButton.setAttribute('id', 'newUpButton' + index);
        newUpButton.setAttribute('class', 'upButton');

        newDownButton.setAttribute('id', 'newDownButton' + index);
        newDownButton.setAttribute('class', 'downButton');

        newRemoveButton.setAttribute('id', 'newRemoveButton' + index);
        newRemoveButton.setAttribute('class', 'removeButton');


        // Up button

        newUpButton.addEventListener('click', function() {
            alert('Up Button clicked!');
        });


        // Down button

        newDownButton.addEventListener('click', function() {
            alert('Down Button clicked!');
        });

        
        // Remove button

        newRemoveButton.addEventListener('click', function() {

            const data = localStorage.getItem('data');

            const currentArray = JSON.parse(data);
            
            currentArray.splice(value, 1);

            const updatedArrayString = JSON.stringify(currentArray);

            localStorage.setItem('data', updatedArrayString);

            loadNotes();
        });

        newDivTitleAndDate.appendChild(newPTitle);
        newDivTitleAndDate.appendChild(newPDate);

        newUpDownRemove.appendChild(newUpButton);
        newUpDownRemove.appendChild(newDownButton);
        newUpDownRemove.appendChild(newRemoveButton);
        
        newDiv.appendChild(newDivTitleAndDate);
        newDiv.appendChild(hr1);
        newDiv.appendChild(newPTask);
        newDiv.appendChild(hr2);
        newDiv.appendChild(newUpDownRemove);

        body.insertBefore(newDiv, footer);
    });

    const updatedArrayString = JSON.stringify(currentArray);

    localStorage.setItem('data', updatedArrayString);
    
    notesDiv = document.querySelectorAll('.notes');

    editing = true;
}