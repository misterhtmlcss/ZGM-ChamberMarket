const copyright = document.querySelector('#copyright');

const currentYear = function() {
  console.log('test')
  return new Date().getFullYear();
}



copyright.textContent = `© ACC Chamber Market ${currentYear()}`
