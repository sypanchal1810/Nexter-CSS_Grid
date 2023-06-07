///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector('.year');
console.log(yearEl);
console.log(yearEl.textContent);
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
