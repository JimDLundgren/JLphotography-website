const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.grid-imgs img'); 
const opacity = 0.6;

// Set first pre-selected grid image opacity
imgs[0].style.opacity = opacity; /* imgs variable is array-like*/

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // Reset image opacity on grid image
  imgs.forEach(img => (img.style.opacity = 1));

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Change the opacity on grid image
  e.target.style.opacity = opacity;
}