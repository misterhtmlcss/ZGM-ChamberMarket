const copyright = document.querySelector('#copyright');

// Generates current year for copyright
const currentYear = function() {
  return new Date().getFullYear();
}



copyright.textContent = `© ACC Chamber Market ${currentYear()}`
