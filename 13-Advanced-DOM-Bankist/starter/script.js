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

//////// types of events and event handlers ////////

const alertH1 = function () {
  alert('addEventListener: Great! You are reading the heading :D');
  // h1.removeEventListener('mouseenter', alertH1);
};
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function () {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//////// event propogation ////////
// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomInt(2, 5));

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.eventPhase, e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // stop propogation - will stop propogation (in this case to bubbling phase), not always a good idea
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LIST', e.eventPhase, e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.eventPhase, e.target, e.currentTarget);
  },
  true // enable event litener on capturing phase
);

//////// DOM traversing ////////
// going downwards: children
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = 'scale(0.7)';
  }
});

//////// lifecyscle DOM events ////////
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('DOMContentLoaded', e);
});

window.addEventListener('load', function (e) {
  console.log('load', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log('beforeunload', e);
  e.returnValue = '';
});
