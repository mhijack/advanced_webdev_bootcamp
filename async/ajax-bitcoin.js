const btn = document.querySelector('#btn');
const price = document.querySelector('#price');
const code = document.querySelector('#code');
const body = document.querySelector('body');
const radios = document.querySelectorAll('.radios');
let currency = 'USD';
let attached = false;

// define request function
function makeRequest() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      // need more practice on object destructuring
      let price = data.bpi[currency].rate_float;
      console.log('new request made');
      changePrice(price);
      changeCode(currency);

      if (!attached) {
        radios.forEach(radio => {
          // add click event to every radio button

          // using .onclick, we don't attach multiple eventlisteners to the element
          radio.onclick = () => {
            // abstract value of each event
            const value = radio.value;
            // console.log(value);
            currency = value;
            price = data.bpi[currency].rate_float;

            // update price and currency according to which radio is selected
            changePrice(price);
            changeCode(currency);
            console.log(price, currency);
            attached = true;
          };
        });
      }
    }
  };

  xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');

  xhr.send();

  attached = false;
}

// write the price to span
function changePrice(result) {
  price.innerHTML = result;
}

// write code next to price
function changeCode(currency) {
  code.innerHTML = currency;
}

// // make a request onload
body.onload = makeRequest();

// button event
btn.addEventListener('click', () => {
  makeRequest();
});

// radio event
function radioEvent() {
  radios.forEach(radio => {
    // add click event to every radio button

    // using .onclick, we don't attach multiple eventlisteners to the element
    radio.onclick = () => {
      // abstract value of each event
      const value = radio.value;
      // console.log(value);
      currency = value;
      price = data.bpi[currency].rate_float;

      // update price and currency according to which radio is selected
      changePrice(price);
      changeCode(currency);
      console.log(price, currency);
    }
  })
}
