'use strict';

let expandDown = document.querySelector('.expand');
let product = document.querySelector('.products');

function toggleProductDisplay() {
  if (product.style.display === 'none') {
    expandDown.src = './icons/expand_more.svg';
    product.style.display = 'grid';
  } else {
    expandDown.src = './icons/keyboard_arrow_up.svg';
    product.style.display = 'none';
  }
}

function handleResize() {
  const mediaQuery = window.matchMedia('(max-width: 320px)');
  if (mediaQuery.matches) {
    // Disable click event listener at width <= 320px
    expandDown.removeEventListener('click', toggleProductDisplay);
    product.style.display = 'grid';
  } else {
    // Enable click event listener above 320px
    expandDown.addEventListener('click', toggleProductDisplay);
    product.style.display = 'none';
  }
}

handleResize();

window.addEventListener('resize', handleResize);

expandDown.addEventListener('click', toggleProductDisplay);
