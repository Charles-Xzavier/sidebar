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

expandDown.addEventListener('click', toggleProductDisplay);
