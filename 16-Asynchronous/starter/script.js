'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// https://restcountries.com/v2/

//////// XMLHttpRequest ////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    if (this.getResponseHeader('Content-Type') !== 'application/json') return;

    const [data] = JSON.parse(this.responseText);

    const html = `
        <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[0].name
                }</p>
            </div>
        </article>
        `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('israel');
getCountryData('slovenia');
getCountryData('brazil');
*/

//////// callback hell ////////
/*
const renderCountry = function (data, className = '') {
  const html = `
          <article class="country ${className}">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                  <h3 class="country__name">${data.name}</h3>
                  <h4 class="country__region">${data.region}</h4>
                  <p class="country__row"><span>👫</span>${(
                    +data.population / 1000000
                  ).toFixed(1)}M people</p>
                  <p class="country__row"><span>🗣️</span>${
                    data.languages[0].name
                  }</p>
                  <p class="country__row"><span>💰</span>${
                    data.currencies[0].name
                  }</p>
              </div>
          </article>
          `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    if (this.getResponseHeader('Content-Type') !== 'application/json') return;

    const [data] = JSON.parse(this.responseText);

    // render country 1
    renderCountry(data);

    // get neighbour country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

//////// promises and fetch api ////////
/*
const request = fetch('https://restcountries.com/v2/name/portugal');
console.log(request); // Promise
*/

//////// consume promises ////////
/*
const renderCountry = function (data, className = '') {
  const html = `
            <article class="country ${className}">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(
                      +data.population / 1000000
                    ).toFixed(1)}M people</p>
                    <p class="country__row"><span>🗣️</span>${
                      data.languages[0].name
                    }</p>
                    <p class="country__row"><span>💰</span>${
                      data.currencies[0].name
                    }</p>
                </div>
            </article>
            `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       //   console.log(response);
//       return response.json();
//     })
//     .then(function (json) {
//       const [data] = json;
//       renderCountry(data);
//     });
// };

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(([data]) => renderCountry(data));
};

getCountryData('portugal');
getCountryData('brazil');
*/

//////// chain promises ////////
/*
const renderCountry = function (data, className = '') {
  const html = `
              <article class="country ${className}">
                  <img class="country__img" src="${data.flag}" />
                  <div class="country__data">
                      <h3 class="country__name">${data.name}</h3>
                      <h4 class="country__region">${data.region}</h4>
                      <p class="country__row"><span>👫</span>${(
                        +data.population / 1000000
                      ).toFixed(1)}M people</p>
                      <p class="country__row"><span>🗣️</span>${
                        data.languages[0].name
                      }</p>
                      <p class="country__row"><span>💰</span>${
                        data.currencies[0].name
                      }</p>
                  </div>
              </article>
              `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(([data]) => {
      renderCountry(data);
      const neighbour = data.borders?.[0];

      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      renderCountry(data, 'neighbour');
      const neighbour = data.borders?.[0];

      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

getCountryData('brazil');
*/

//////// handling rejected promises ////////
/*
const renderCountry = function (data, className = '') {
  const html = `
              <article class="country ${className}">
                  <img class="country__img" src="${data.flag}" />
                  <div class="country__data">
                      <h3 class="country__name">${data.name}</h3>
                      <h4 class="country__region">${data.region}</h4>
                      <p class="country__row"><span>👫</span>${(
                        +data.population / 1000000
                      ).toFixed(1)}M people</p>
                      <p class="country__row"><span>🗣️</span>${
                        data.languages[0].name
                      }</p>
                      <p class="country__row"><span>💰</span>${
                        data.currencies[0].name
                      }</p>
                  </div>
              </article>
              `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok) {
        throw new Error(`Country "${country}" not found (${response.status})`);
      }
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      renderCountry(data, 'neighbour');
      const neighbour = data.borders?.[0];

      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    // then is called when promise is fullfilled
    .then(data => renderCountry(data, 'neighbour'))
    // catch is called when promise is rejected
    .catch(err => {
      console.error(`${err} ☣☣☣`);
      renderError(`something went wrong ☣☣☣ ${err.message}. Try again!`);
    })
    // finally is always called
    .finally(() => {
      console.log('I always happen yey');
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('lahdkad');
});
*/

//////// throwing errors manually ////////
/*
const renderCountry = function (data, className = '') {
  const html = `
                <article class="country ${className}">
                    <img class="country__img" src="${data.flag}" />
                    <div class="country__data">
                        <h3 class="country__name">${data.name}</h3>
                        <h4 class="country__region">${data.region}</h4>
                        <p class="country__row"><span>👫</span>${(
                          +data.population / 1000000
                        ).toFixed(1)}M people</p>
                        <p class="country__row"><span>🗣️</span>${
                          data.languages[0].name
                        }</p>
                        <p class="country__row"><span>💰</span>${
                          data.currencies[0].name
                        }</p>
                    </div>
                </article>
                `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJson = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  getJson(
    `https://restcountries.com/v2/name/${country}`,
    `Country "${country}" not found`
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour found');
      return getJson(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Country "${neighbour}" not found`
      );
    })
    .then(data => {
      renderCountry(data, 'neighbour');
      const neighbour = data.borders?.[0];
      //   const neighbour = 'dafaaf';

      if (!neighbour) throw new Error('No neighbour found');
      return getJson(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Country "${neighbour}" not found`
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    // catch is called when promise is rejected
    .catch(err => {
      console.error(`${err} ☣☣☣`);
      renderError(`something went wrong ☣☣☣ ${err.message}. Try again!`);
    })
    // finally is always called
    .finally(() => {
      console.log('I always happen yey');
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});
*/

//////// event loop in action ////////
/*
console.log('test start');
setTimeout(() => console.log('0 seconds timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('test end');
*/

//////// build a simple promise ////////
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('lottery is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win 💰');
    } else {
      reject(new Error('You lost 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => console.log('4 seconds passed'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('problem!')).catch(x => console.error(x));
*/

//////// promisifying the geolocation api ////////
/*
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderCountry = function (data, className = '') {
  const html = `
                    <article class="country ${className}">
                        <img class="country__img" src="${data.flag}" />
                        <div class="country__data">
                            <h3 class="country__name">${data.name}</h3>
                            <h4 class="country__region">${data.region}</h4>
                            <p class="country__row"><span>👫</span>${(
                              +data.population / 1000000
                            ).toFixed(1)}M people</p>
                            <p class="country__row"><span>🗣️</span>${
                              data.languages[0].name
                            }</p>
                            <p class="country__row"><span>💰</span>${
                              data.currencies[0].name
                            }</p>
                        </div>
                    </article>
                    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

// getPosition()
//   .then(pos => console.log(pos))
//   .catch(err => console.error(err));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `Request quota reached, try again later (${response.status})`
        );
      }
      return response.json();
    })
    .then(json => {
      const country = json.country;
      let city = json.city;
      city = `${city[0]}${city.slice(1).toLowerCase()}`;
      console.log(`You are in ${city}, ${country}`);

      return fetch(`https://restcountries.com/v2/name/${country.toLowerCase()}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(
              `Country "${country}" not found (${response.status})`
            );
          }
          return response.json();
        })
        .then(data => {
          if (data.length > 1) {
            renderCountry(data[1]);
          } else {
            renderCountry(data[0]);
          }
        });
    })
    .catch(err => {
      console.error(`${err.message} 🤮`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', whereAmI);
*/

//////// consuming promises with async/await ////////
