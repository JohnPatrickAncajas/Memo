function getCurrentYear() {

    const currentYear = document.getElementById('currentYear');
    const currentDate = new Date();
    const currentYearValue = currentDate.getFullYear();
  
    currentYear.innerText = currentYearValue.toString();
}

getCurrentYear();