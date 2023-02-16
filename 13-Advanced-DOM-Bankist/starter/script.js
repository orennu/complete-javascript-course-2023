'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////// selecting creating and deleting elements ////////

// selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const sections = document.querySelectorAll('.section');

console.log(header);
console.log(sections);

console.log(document.getElementById('section--1'));

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements

/// insertAdjacentHTML
header.insertAdjacentHTML(
  'afterbegin',
  '<div style="font-size: 20px;">oren div</div>'
);

/// createElement
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'we use cookies for improved functionality and analytics.';
message.innerHTML =
  'we use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message);
// setTimeout(() => header.append(message), 3000);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// delete
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });

//////// styles attributes and classes ////////
// styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// we can only get inline styles we defined
console.log(message.style.height); // blank
console.log(message.style.backgroundColor); // rgb(55, 56, 61)
console.log(message.style.color); // blank

// get styles in class (or not inline we defined)
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

// change style
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// change style using css variable
document.documentElement.style.setProperty('--color-primary', 'orangered');

// attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

console.log(logo.src); // absolute url
console.log(logo.getAttribute('src')); // relative path

const link = document.querySelector('.btn--show-modal');
console.log(link.href); // absolute url
console.log(link.getAttribute('href')); // relative path

// non-standard
console.log(logo.designer); // will not work -> undefined
console.log(logo.getAttribute('designer')); // orenn

// set attribue
logo.alt = 'nice minimal logo';
logo.setAttribute('company', 'bankist');

// data attributes
// logo element has attribute data-version-number="3.0"
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// don't use, this overwrites all classes and allows setting just a single class
// logo.className = 'orenn';
