// Element declarations CONST

const body = document.querySelector('body');
const footer = document.getElementById('footer');

const home = document.getElementById('home');
const notes = document.getElementById('notes');
const user = document.getElementById('user');

const buttonHome = document.getElementById('buttonHome');
const buttonNotes = document.getElementById('buttonNotes');
const buttonUser = document.getElementById('buttonUser');

const notesTitleInput = document.getElementById('notesTitleInput');
const notesDateInput = document.getElementById('notesDateInput');
const notesTaskInput = document.getElementById('notesTaskInput');

const notesAddButton = document.getElementById('notesAddButton');
const notesClearButton = document.getElementById('notesClearButton');
const notesEditButton = document.getElementById('notesEditButton');

const addNoteHeading = document.getElementById('addNoteHeading');
const myNoteHeading = document.getElementById('myNoteHeading');

const username = document.getElementById('username');
const usernameOutput = document.getElementById('usernameOutput');
const usernameEdit = document.getElementById('usernameEdit');
const usernameEditInput = document.getElementById('usernameEditInput');
const usernameEditSubmit = document.getElementById('usernameEditSubmit');

const changeUsername = document.getElementById('changeUsername');
const changeTheme = document.getElementById('changeTheme');
const resetButton = document.getElementById('resetButton');

// Boolean declarations LET

let isShownHome = true;
let isShownNotes = false;
let isShownUser = false;

let editing = false;

let changingUsername = false;

// Value declaraions LET

let usernameOutputText = '';
let usernameEditInputValue = '';


// Event listeners ONCLICK

buttonHome.addEventListener('click', function() {

    // Home button

    if (isShownHome == false) {

        // Home click event if not already at Home

        home.style.display = 'block';
        notes.style.display = 'none';
        user.style.display = 'none';

        if (typeof notesDiv !== 'undefined') {

            notesDiv.forEach(function(element) {
                element.remove();
            });
        }  

        isShownHome = true;
        isShownNotes = false;
        isShownUser = false;

    } else {

        // Home click event if already at Home

        console.log('Your at Home already!');
    }
});


buttonNotes.addEventListener('click', function() {

   // Notes button

    if (isShownNotes == false) {

    checkStartup();

        // Notes click event if not already at Notes

        home.style.display = 'none';
        notes.style.display = 'block';
        user.style.display = 'none';

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

        isShownHome = false;
        isShownNotes = true;
        isShownUser = false;
        
    } else {

        // Notes click event if already at Notes

        console.log('Your at Notes already!');
    }
});


buttonUser.addEventListener('click', function() {

    // User button
    
    if (isShownUser == false) {
        
        if (typeof notesDiv !== 'undefined') {

            notesDiv.forEach(function(element) {
                element.remove();
            });
        }
        
        home.style.display = 'none';
        notes.style.display = 'none';
        user.style.display = 'block';

        isShownHome = false;
        isShownNotes = false;
        isShownUser = true;

    } else {

        // Notes click event if already at Notes

        console.log('Your at User already!');
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
            
            editing = false;
    
        } else {

            // Alert when Input is Incomplete

            alert('You need to complete all forms!');

        }
});


notesClearButton.addEventListener('click', function() {

    // Clear Notes button
    
    notesTitleInput.value = '';
    notesDateInput.value = '';
    notesTaskInput.value = '';
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

// User page button event listeners

resetButton.addEventListener('click', function() {

    let notesList = [
        ["Christmas", "December 25", "Celebrate the Christmas holidays and enjoy!"],
        ["New Year", "January 1", "Have fun and celebrate the new year!"],
        ["Valentine's Day", "February 14", "Share the love on this special day!"],
        ["Death", "Soon", "Make each moment count."]
    ];

    let notesListString = JSON.stringify(notesList);

    localStorage.setItem('data', notesListString);
    localStorage.setItem('username', 'User');

    usernameOutput.innerText = "User";

    username.style.display = 'block';
    usernameEdit.style.display = 'none';
        
    changingUsername = false;
});

changeUsername.addEventListener('click', function() {
    
    if (changingUsername == false) {
     
        username.style.display = 'none';
        usernameEdit.style.display = 'block';   
    
        changingUsername = true;

    } else { 

        username.style.display = 'block';
        usernameEdit.style.display = 'none';
        
        changingUsername = false;
    }
});

changeTheme.addEventListener('click', function() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'theme.css';
    document.head.appendChild(link);
});

usernameEditSubmit.addEventListener('click', function() {

    const usernameEditInputValue = usernameEditInput.value;

    localStorage.setItem('username', usernameEditInputValue);

    usernameOutput.innerText = usernameEditInputValue;

    username.style.display = 'block';
    usernameEdit.style.display = 'none';
        
    changingUsername = false;
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

    if (!localStorage.getItem('startup')) {
        localStorage.setItem('startup', 'true');
    }

    if (!localStorage.getItem('username')) {
        localStorage.setItem('username', 'User');
    } else {
        usernameOutputText = localStorage.getItem('username');
        usernameOutput.innerText = usernameOutputText;
    }
});


// Functions 

function loadNotes() {

    // Shows Notes

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

    // Shows Notes with Edit

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

            const data = localStorage.getItem('data');

            const currentArray = JSON.parse(data);

            if (index > 0) {
                [currentArray[index], currentArray[index - 1]] = [currentArray[index - 1], currentArray[index]];
            }

            const updatedArrayString = JSON.stringify(currentArray);

            localStorage.setItem('data', updatedArrayString);

            loadEditNotes();
        });


        // Down button

        newDownButton.addEventListener('click', function() {
            const data = localStorage.getItem('data');

            const currentArray = JSON.parse(data);

            if (index < currentArray.length - 1) {
                [currentArray[index], currentArray[index + 1]] = [currentArray[index + 1], currentArray[index]];
            }

            const updatedArrayString = JSON.stringify(currentArray);

            localStorage.setItem('data', updatedArrayString);

            loadEditNotes();
        });

        
        // Remove button

        newRemoveButton.addEventListener('click', function() {

            const data = localStorage.getItem('data');

            const currentArray = JSON.parse(data);
            
            currentArray.splice(index, 1);

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


// Checks if first launch of the page

function checkStartup() {

    const startup = localStorage.getItem('startup');

    // Initializes starter notes array

    if (startup == 'true') {

        let notesList = [
            ["Christmas", "December 25", "Celebrate the Christmas holidays and enjoy!"],
            ["New Year", "January 1", "Have fun and celebrate the new year!"],
            ["Valentine's Day", "February 14", "Share the love on this special day!"],
            ["Death", "Soon", "Make each moment count."]
        ];

        localStorage.setItem('startup', 'false');

        let notesListString = JSON.stringify(notesList);

        localStorage.setItem('data', notesListString);
    }
}